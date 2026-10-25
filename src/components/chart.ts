import { LitElement, css, html, nothing, svg, type PropertyValues, type SVGTemplateResult } from "lit";
import { num } from "../util/format";
import { onOtherTip, tipOpened } from "../util/tip-bus";
import { iconStyles } from "./styles";

// Schlankes SVG-Zeitdiagramm (Linie, Fläche, Band, Balken) — ersetzt schwere Chart-Bibliotheken.
// Rendert nur bei geänderten Daten oder Breite; Antippen/Hovern zeigt Werte zum Zeitpunkt.

export interface ChartPoint {
  t: number;
  v: number | null | undefined;
  /** Obergrenze bei `band`/`range` (v = unten, v2 = oben) */
  v2?: number | null;
  /** Ende des Zeitabschnitts (Balkenbreite bei ungleich langen Abschnitten, z. B. Monate) */
  t2?: number;
}

export interface ChartSeries {
  /** range = senkrechter Balken von v bis v2 (Min–Max je Tag/Monat) */
  type: "line" | "area" | "bar" | "band" | "range";
  points: ChartPoint[];
  color: string;
  axis?: "left" | "right";
  /** Linie ab diesem Zeitpunkt gestrichelt (Messung durchgezogen, Vorhersage gestrichelt) */
  dashFrom?: number;
  /** Balkenbreite in ms (Standard: Abstand der Punkte) */
  barWidth?: number;
  label?: string;
  unit?: string;
  digits?: number;
  /** nicht im Tooltip anzeigen */
  silent?: boolean;
  /** rechte Skala ohne Beschriftung, stattdessen der letzte Wert am Linienende (z. B. Regensumme) */
  endLabel?: boolean;
}

export interface ChartTick {
  t: number;
  label: string;
}

export interface ChartMarker {
  t: number;
  v: number;
  label: string;
}

const PAD = { l: 6, r: 38, t: 18, b: 22 };

export class WetterChart extends LitElement {
  static properties = {
    start: { type: Number },
    end: { type: Number },
    series: { attribute: false },
    ticks: { attribute: false },
    markers: { attribute: false },
    now: { type: Number },
    height: { type: Number },
    yMin: { type: Number },
    yMax: { type: Number },
    yUnit: { type: String },
    rightMax: { type: Number },
    rightUnit: { type: String },
    timeFormat: { attribute: false },
    tipIcon: { attribute: false },
    _w: { state: true },
    _hover: { state: true },
  };

  start = 0;
  end = 0;
  series: ChartSeries[] = [];
  ticks: ChartTick[] = [];
  markers: ChartMarker[] = [];
  now?: number;
  height = 200;
  yMin?: number;
  yMax?: number;
  yUnit = "";
  rightMax?: number;
  rightUnit = "";
  timeFormat: (t: number) => string = (t) => new Date(t).toLocaleString("de-DE");
  /** optionales Symbol im Tooltip neben der Uhrzeit (z. B. Wetter dieser Stunde) */
  tipIcon?: (t: number) => unknown;
  private _w = 0;
  private _hover?: number;
  private _ro?: ResizeObserver;
  // Touch: erst nach der ersten Bewegung entscheiden — waagrecht/langes Drücken = Werte ansehen, sonst normal scrollen
  private _touch?: { x: number; y: number; mode: "?" | "scrub" | "scroll"; timer?: number };
  private _hideTimer?: number;
  private _offTip?: () => void;
  private _onTouchStart = (e: TouchEvent) => this.touchStart(e);
  private _onTouchMove = (e: TouchEvent) => this.touchMove(e);
  private _onTouchEnd = () => this.touchEnd();

  connectedCallback(): void {
    super.connectedCallback();
    this._ro ??= new ResizeObserver((e) => {
      const w = Math.round(e[0].contentRect.width);
      if (w && w !== this._w) this._w = w;
    });
    this._ro.observe(this);
    this._offTip = onOtherTip(this, () => (this._hover = undefined), () => this);
    this.addEventListener("touchstart", this._onTouchStart, { passive: true });
    // nicht passiv, sonst lässt sich das Scrollen beim Werte-Ansehen nicht unterdrücken
    this.addEventListener("touchmove", this._onTouchMove, { passive: false });
    this.addEventListener("touchend", this._onTouchEnd);
    this.addEventListener("touchcancel", this._onTouchEnd);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._ro?.disconnect();
    this._offTip?.();
    this.removeEventListener("touchstart", this._onTouchStart);
    this.removeEventListener("touchmove", this._onTouchMove);
    this.removeEventListener("touchend", this._onTouchEnd);
    this.removeEventListener("touchcancel", this._onTouchEnd);
    clearTimeout(this._touch?.timer);
    clearTimeout(this._hideTimer);
  }

  protected willUpdate(changed: PropertyValues): void {
    // nur bei anderem Zeitraum zurücksetzen — neue Datenreihen (Live-Update, Neuzeichnen) lassen das Detail offen
    if (changed.has("start") && changed.get("start") !== undefined && changed.get("start") !== this.start) this._hover = undefined;
  }

  // ---- Skalen ----

  private x(t: number): number {
    const span = Math.max(1, this.end - this.start);
    return PAD.l + ((t - this.start) / span) * (this._w - PAD.l - PAD.r);
  }

  private scale(axis: "left" | "right") {
    const vals: number[] = [];
    for (const s of this.series) {
      if ((s.axis ?? "left") !== axis) continue;
      for (const p of s.points) {
        if (p.v != null) vals.push(p.v);
        if (p.v2 != null) vals.push(p.v2);
      }
      if (s.type === "bar") vals.push(0);
    }
    let lo = axis === "left" ? this.yMin : 0;
    let hi = axis === "left" ? this.yMax : this.rightMax;
    if (lo == null) lo = vals.length ? Math.min(...vals) : 0;
    if (hi == null) hi = vals.length ? Math.max(...vals) : 1;
    if (hi - lo < 1e-9) hi = lo + 1;
    const step = niceStep((hi - lo) / 4);
    if (axis === "left" && this.yMin == null) lo = Math.floor(lo / step) * step;
    if (axis === "left" && this.yMax == null) hi = Math.ceil(hi / step) * step;
    if (axis === "right" && this.rightMax == null) hi = Math.ceil(hi / step) * step;
    const h = this.height - PAD.t - PAD.b;
    const y = (v: number) => PAD.t + h - ((v - lo!) / (hi! - lo!)) * h;
    const ticks: number[] = [];
    for (let v = lo; v <= hi + step / 1000; v += step) ticks.push(Math.round(v * 1e6) / 1e6);
    return { y, ticks, lo, hi };
  }

  // ---- Interaktion ----

  private onPointer(e: PointerEvent): void {
    if (e.pointerType === "touch") return; // Touch läuft über touchStart/-Move
    this.hoverAt(e.clientX);
  }

  private touchStart(e: TouchEvent): void {
    clearTimeout(this._touch?.timer);
    clearTimeout(this._hideTimer);
    if (e.touches.length !== 1) { this._touch = undefined; return; } // Zwei Finger: Zoom nicht stören
    const p = e.touches[0];
    this._touch = { x: p.clientX, y: p.clientY, mode: "?" };
    this._touch.timer = window.setTimeout(() => {
      if (this._touch?.mode === "?") this._touch.mode = "scrub";
    }, 250);
    this.hoverAt(p.clientX);
  }

  private touchMove(e: TouchEvent): void {
    const t = this._touch;
    if (!t || e.touches.length !== 1) return;
    const p = e.touches[0];
    if (t.mode === "?") {
      const dx = Math.abs(p.clientX - t.x), dy = Math.abs(p.clientY - t.y);
      if (dx < 8 && dy < 8) return;
      clearTimeout(t.timer);
      t.mode = dx > dy ? "scrub" : "scroll";
      if (t.mode === "scroll") { this._hover = undefined; return; }
    }
    if (t.mode !== "scrub") return;
    if (e.cancelable) e.preventDefault();
    this.hoverAt(p.clientX);
  }

  private touchEnd(): void {
    const t = this._touch;
    if (!t) return;
    clearTimeout(t.timer);
    this._touch = undefined;
    // nach dem Antippen/Wischen Werte noch kurz stehen lassen
    if (t.mode !== "scroll") this._hideTimer = window.setTimeout(() => (this._hover = undefined), 3000);
  }

  private hoverAt(clientX: number): void {
    // das Diagramm selbst, nicht das Wetter-Symbol im Tooltip (steht davor)
    const svgEl = this.renderRoot.querySelector(".wrap > svg");
    if (!svgEl) return;
    const px = clientX - svgEl.getBoundingClientRect().left;
    const t = this.start + ((px - PAD.l) / (this._w - PAD.l - PAD.r)) * (this.end - this.start);
    // auf nächsten echten Datenpunkt einrasten
    let best: number | undefined;
    for (const s of this.series) {
      for (const p of s.points) {
        if (p.v == null) continue;
        const c = center(s, p);
        if (best == null || Math.abs(c - t) < Math.abs(best - t)) best = c;
      }
    }
    if (this._hover == null && best != null) tipOpened(this);
    this._hover = best;
  }

  // ---- Render ----

  protected render() {
    const w = this._w;
    if (!w || this.end <= this.start) return html`<div style="height:${this.height}px"></div>`;
    const L = this.scale("left");
    const hasRight = this.series.some((s) => s.axis === "right");
    const R = hasRight ? this.scale("right") : undefined;
    const bottom = this.height - PAD.b;

    const parts: SVGTemplateResult[] = [];

    // Vergangenheit leicht abdunkeln
    if (this.now && this.now > this.start && this.now < this.end) {
      parts.push(svg`<rect x=${PAD.l} y=${PAD.t} width=${this.x(this.now) - PAD.l} height=${bottom - PAD.t} class="past"/>`);
    }
    // Raster
    for (const v of L.ticks) {
      const y = L.y(v);
      parts.push(svg`<line x1=${PAD.l} x2=${w - PAD.r} y1=${y} y2=${y} class="grid"/>`);
      parts.push(svg`<text x=${w - PAD.r + 6} y=${y + 4} class="ylab">${fmtTick(v)}${this.yUnit}</text>`);
    }
    // rechte Skala (z. B. Summe/Wahrscheinlichkeit): Beschriftung links innen, in der Farbe der Serie
    // (wird nach den Serien gezeichnet, mit Kontur → nicht von Balken/Linien verdeckt)
    const rightLabels: SVGTemplateResult[] = [];
    if (R && !this.series.some((s) => s.axis === "right" && s.endLabel)) {
      const col = this.series.find((s) => s.axis === "right")!.color;
      for (const v of R.ticks) {
        if (v === 0) continue;
        rightLabels.push(svg`<text x=${PAD.l + 3} y=${R.y(v) - 3} class="rlab" style="fill:${col}">${fmtTick(v)}${this.rightUnit}</text>`);
      }
    }
    for (const tk of this.ticks) {
      const x = this.x(tk.t);
      if (x < PAD.l - 1 || x > w - PAD.r + 1) continue;
      parts.push(svg`<line x1=${x} x2=${x} y1=${PAD.t} y2=${bottom} class="vgrid"/>`);
      // ganz rechts: rechtsbündig vor die Linie, sonst kollidiert es mit der Y-Beschriftung
      const end = x + 3 + tk.label.length * 6 > w - PAD.r;
      parts.push(svg`<text x=${end ? x - 3 : x + 3} y=${this.height - 6} class="xlab" style=${end ? "text-anchor:end" : ""}>${tk.label}</text>`);
    }

    // Serien — auf die Zeichenfläche begrenzt, sonst ragen Linien/Flächen in die Achsenbeschriftung
    const sp: unknown[] = [];
    this.series.forEach((s, i) => {
      const sc = s.axis === "right" && R ? R : L;
      const pts = s.points.filter((p) => p.v != null).sort((a, b) => a.t - b.t);
      if (!pts.length) return;
      if (s.type === "bar" || s.type === "range") {
        const defW = s.barWidth ?? (pts.length > 1 ? pts[1].t - pts[0].t : (this.end - this.start) / 24);
        const y0 = sc.y(Math.max(0, sc.lo));
        for (const p of pts) {
          const bw = p.t2 != null ? p.t2 - p.t : defW;
          const pxw = Math.max(1.5, Math.min(14, (this.x(this.start + bw) - this.x(this.start)) * 0.65));
          const xc = this.x(p.t + bw / 2);
          const ya = sc.y(p.v!);
          const yb = s.type === "range" ? sc.y(p.v2 ?? p.v!) : y0;
          const h = Math.max(s.type === "range" ? pxw : 0.5, Math.abs(yb - ya));
          const top = Math.min(ya, yb) - (h - Math.abs(yb - ya)) / 2;
          sp.push(svg`<rect x=${xc - pxw / 2} y=${top} width=${pxw} height=${h} rx=${s.type === "range" ? pxw / 2 : 2} style="fill:${s.color}"/>`);
        }
        return;
      }
      if (s.type === "band") {
        const top = pts.filter((p) => p.v2 != null).map((p) => [this.x(p.t), sc.y(p.v2!)] as const);
        const low = pts.map((p) => [this.x(p.t), sc.y(p.v!)] as const).reverse();
        if (top.length) {
          sp.push(svg`<path d=${smooth(top) + " L" + smooth(low).slice(1) + "Z"} style="fill:${s.color};fill-opacity:0.28"/>`);
        }
        return;
      }
      const xy = pts.map((p) => [this.x(p.t), sc.y(p.v!)] as const);
      if (s.type === "area") {
        const id = `g${i}`;
        sp.push(svg`
          <defs><linearGradient id=${id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${s.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${s.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${smooth(xy)} L${xy[xy.length - 1][0]},${bottom} L${xy[0][0]},${bottom}Z`} fill="url(#${id})"/>`);
      }
      if (s.dashFrom != null) {
        const cut = pts.findIndex((p) => p.t >= s.dashFrom!);
        const a = cut < 0 ? xy : xy.slice(0, cut + 1);
        const b = cut < 0 ? [] : xy.slice(cut);
        if (a.length > 1) sp.push(svg`<path d=${smooth(a)} class="ln" style="stroke:${s.color}"/>`);
        if (b.length > 1) sp.push(svg`<path d=${smooth(b)} class="ln" style="stroke:${s.color}" stroke-dasharray="5 5"/>`);
      } else {
        sp.push(svg`<path d=${smooth(xy)} class="ln" style="stroke:${s.color}" />`);
      }
    });

    const gridCount = parts.length;
    for (const s of this.series) {
      const last = s.endLabel ? [...s.points].reverse().find((p) => p.v != null) : undefined;
      if (!last) continue;
      const sc = s.axis === "right" && R ? R : L;
      // über dem Linienende, rechtsbündig → bleibt in der Zeichenfläche
      parts.push(svg`<text x=${Math.min(this.x(last.t), w - PAD.r) - 2} y=${sc.y(last.v!) - 7} class="rlab" style="fill:${s.color};text-anchor:end">${num(last.v!, s.digits ?? 1)}${s.unit ?? ""}</text>`);
    }
    // Markierungen (z. B. H/T)
    for (const m of this.markers) {
      const x = this.x(m.t), y = L.y(m.v);
      parts.push(svg`<circle cx=${x} cy=${y} r="4" class="mk"/>`);
      parts.push(svg`<text x=${x} y=${y - 9} class="mklab">${m.label}</text>`);
    }

    // Jetzt-Linie
    if (this.now && this.now > this.start && this.now < this.end) {
      const x = this.x(this.now);
      parts.push(svg`<line x1=${x} x2=${x} y1=${PAD.t} y2=${bottom} class="nowl"/>`);
    }

    // Hover
    let tip: unknown = nothing;
    if (this._hover != null) {
      const t = this._hover;
      const x = this.x(t);
      parts.push(svg`<line x1=${x} x2=${x} y1=${PAD.t - 6} y2=${bottom} class="hov"/>`);
      const rows: { color: string; label: string; value: string }[] = [];
      for (const s of this.series) {
        const p = nearest(s, t);
        if (!p || p.v == null || s.silent) continue;
        const sc = s.axis === "right" && R ? R : L;
        if (s.type === "line" || s.type === "area") parts.push(svg`<circle cx=${x} cy=${sc.y(p.v)} r="4" style="fill:${s.color}" class="hdot"/>`);
        const f = (v: number) => `${num(v, s.digits ?? 1)}${s.unit ?? ""}`;
        // Min/Max als eigene, beschriftete Zeilen statt „21 – 99“
        if ((s.type === "band" || s.type === "range") && p.v2 != null) {
          rows.push({ color: s.color, label: "Max", value: f(p.v2) }, { color: s.color, label: "Min", value: f(p.v) });
        } else {
          rows.push({ color: s.color, label: s.label ?? "", value: f(p.v) });
        }
      }
      // Box neben der Linie, innerhalb des Diagramms → verdeckt nichts darüber
      const side = x > w / 2 ? `right:${w - x + 8}px` : `left:${x + 8}px`;
      tip = html`<div class="tip" style="${side}"><div class="th"><b>${this.timeFormat(t)}</b>${this.tipIcon?.(t) ?? nothing}</div>
        ${rows.map((r) => html`<div class="tr"><i style="background:${r.color}"></i><span>${r.label}</span><b>${r.value}</b></div>`)}</div>`;
    }

    return html`
      <div class="wrap">
        ${tip}
        <svg width=${w} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${(e: PointerEvent) => { if (e.pointerType !== "touch") this._hover = undefined; }}>
          <defs><clipPath id="plot"><rect x=${PAD.l - 1} y="0" width=${Math.max(0, w - PAD.l - PAD.r + 2)} height=${bottom + 1}/></clipPath></defs>
          ${parts.slice(0, gridCount)}<g clip-path="url(#plot)">${sp}</g>${parts.slice(gridCount)}${rightLabels}</svg>
      </div>
    `;
  }

  static styles = [iconStyles, css`
    :host { display: block; width: 100%; touch-action: pan-y; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
    .wrap { position: relative; }
    svg { display: block; overflow: visible; }
    .grid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-width: 1; }
    .vgrid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-dasharray: 2 3; }
    .ylab, .xlab { fill: var(--secondary-text-color); font-size: 11px; }
    .rlab {
      font-size: 10px; font-weight: 500; paint-order: stroke; stroke-width: 3px; stroke-linejoin: round;
      stroke: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    }
    .past { fill: rgba(127, 127, 127, 0.08); }
    .ln { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
    .mk { fill: var(--primary-text-color); stroke: var(--card-background-color, #000); stroke-width: 2; }
    .mklab { fill: var(--primary-text-color); font-size: 12px; font-weight: 500; text-anchor: middle; }
    .nowl { stroke: var(--primary-text-color); stroke-width: 1; opacity: 0.5; }
    .hov { stroke: var(--primary-text-color); stroke-width: 1; }
    .hdot { stroke: var(--card-background-color, #000); stroke-width: 2; }
    .tip {
      position: absolute; top: 4px; pointer-events: none; z-index: 1; min-width: 96px;
      background: var(--card-background-color, #222); color: var(--primary-text-color);
      border: 1px solid var(--divider-color); border-radius: 8px; padding: 6px 8px; font-size: 12px;
      display: flex; flex-direction: column; gap: 3px; white-space: nowrap; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    .th { display: flex; align-items: center; justify-content: space-between; gap: 8px; min-height: 18px; }
    .th .wicon { width: 26px; height: 26px; margin: -4px -2px -4px 0; }
    .tr { display: flex; align-items: center; gap: 6px; }
    .tr i { width: 8px; height: 8px; border-radius: 2px; flex: none; }
    .tr span { color: var(--secondary-text-color); flex: 1; }
    .tr b { font-weight: 500; }
  `];
}

/** Punkt einer Serie nahe t — Toleranz halber Punktabstand (Balken/Linien liegen leicht versetzt). */
function nearest(s: ChartSeries, t: number): ChartPoint | undefined {
  let best: ChartPoint | undefined;
  for (const p of s.points) if (p.v != null && (!best || Math.abs(center(s, p) - t) < Math.abs(center(s, best) - t))) best = p;
  if (!best) return undefined;
  const pts = s.points;
  const gap = best.t2 != null ? best.t2 - best.t : s.barWidth ?? (pts.length > 1 ? Math.abs(pts[1].t - pts[0].t) : Infinity);
  return Math.abs(center(s, best) - t) <= gap / 2 + 1 ? best : undefined;
}

/** Zeitpunkt, an dem ein Punkt gezeichnet wird — Balken stehen in der Mitte ihres Abschnitts. */
function center(s: ChartSeries, p: ChartPoint): number {
  if (s.type !== "bar" && s.type !== "range") return p.t;
  const pts = s.points;
  const bw = p.t2 != null ? p.t2 - p.t : s.barWidth ?? (pts.length > 1 ? pts[1].t - pts[0].t : 0);
  return p.t + bw / 2;
}

function niceStep(raw: number): number {
  const p = Math.pow(10, Math.floor(Math.log10(Math.max(raw, 1e-9))));
  const f = raw / p;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
}

/** so viele Nachkommastellen wie nötig (0,05 statt zweimal „0,1“ bei Schritten von 0,05) */
function fmtTick(v: number): string {
  let d = 0;
  while (d < 3 && Math.abs(Math.round(v * 10 ** d) - v * 10 ** d) > 1e-6) d++;
  return d === 0 ? String(Math.round(v)) : num(v, d);
}

/** Monotone kubische Interpolation — glatt, aber ohne Überschwinger (keine erfundenen Spitzen). */
function smooth(pts: readonly (readonly [number, number])[]): string {
  const n = pts.length;
  if (n === 0) return "";
  if (n < 3) return "M" + pts.map((p) => `${p[0]},${p[1]}`).join(" L");
  const dx: number[] = [], m: number[] = [], t: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx[i] = pts[i + 1][0] - pts[i][0];
    m[i] = dx[i] ? (pts[i + 1][1] - pts[i][1]) / dx[i] : 0;
  }
  t[0] = m[0];
  t[n - 1] = m[n - 2];
  for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (3 * (dx[i - 1] + dx[i])) / ((2 * dx[i] + dx[i - 1]) / m[i - 1] + (dx[i] + 2 * dx[i - 1]) / m[i]);
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    const h = dx[i] / 3;
    d += ` C${pts[i][0] + h},${pts[i][1] + h * t[i]} ${pts[i + 1][0] - h},${pts[i + 1][1] - h * t[i + 1]} ${pts[i + 1][0]},${pts[i + 1][1]}`;
  }
  return d;
}
