import { LitElement, css, html, nothing, svg, type PropertyValues, type SVGTemplateResult } from "lit";
import { num } from "../util/format";

// Schlankes SVG-Zeitdiagramm (Linie, Fläche, Band, Balken) — ersetzt schwere Chart-Bibliotheken.
// Rendert nur bei geänderten Daten oder Breite; Antippen/Hovern zeigt Werte zum Zeitpunkt.

export interface ChartPoint {
  t: number;
  v: number | null | undefined;
  /** Obergrenze bei `band` (v = unten, v2 = oben) */
  v2?: number | null;
}

export interface ChartSeries {
  type: "line" | "area" | "bar" | "band";
  points: ChartPoint[];
  color: string;
  axis?: "left" | "right";
  /** Linie vor diesem Zeitpunkt gestrichelt (Vergangenheit vs. Vorhersage) */
  dashUntil?: number;
  /** Balkenbreite in ms (Standard: Abstand der Punkte) */
  barWidth?: number;
  label?: string;
  unit?: string;
  digits?: number;
  /** nicht im Tooltip anzeigen */
  silent?: boolean;
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
  private _w = 0;
  private _hover?: number;
  private _ro?: ResizeObserver;

  connectedCallback(): void {
    super.connectedCallback();
    this._ro ??= new ResizeObserver((e) => {
      const w = Math.round(e[0].contentRect.width);
      if (w && w !== this._w) this._w = w;
    });
    this._ro.observe(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._ro?.disconnect();
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("series") || changed.has("start")) this._hover = undefined;
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
    const rect = (e.currentTarget as SVGElement).getBoundingClientRect();
    const px = e.clientX - rect.left;
    const t = this.start + ((px - PAD.l) / (this._w - PAD.l - PAD.r)) * (this.end - this.start);
    // auf nächsten echten Datenpunkt einrasten
    let best: number | undefined;
    for (const s of this.series) {
      for (const p of s.points) {
        if (p.v == null) continue;
        if (best == null || Math.abs(p.t - t) < Math.abs(best - t)) best = p.t;
      }
    }
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
    for (const tk of this.ticks) {
      const x = this.x(tk.t);
      if (x < PAD.l - 1 || x > w - PAD.r + 1) continue;
      parts.push(svg`<line x1=${x} x2=${x} y1=${PAD.t} y2=${bottom} class="vgrid"/>`);
      parts.push(svg`<text x=${x + 3} y=${this.height - 6} class="xlab">${tk.label}</text>`);
    }

    // Serien
    this.series.forEach((s, i) => {
      const sc = s.axis === "right" && R ? R : L;
      const pts = s.points.filter((p) => p.v != null).sort((a, b) => a.t - b.t);
      if (!pts.length) return;
      if (s.type === "bar") {
        const bw = s.barWidth ?? (pts.length > 1 ? pts[1].t - pts[0].t : (this.end - this.start) / 24);
        const pxw = Math.max(1.5, (this.x(this.start + bw) - this.x(this.start)) * 0.7);
        const y0 = sc.y(Math.max(0, sc.lo));
        for (const p of pts) {
          const xc = this.x(p.t + bw / 2);
          const y = sc.y(p.v!);
          parts.push(svg`<rect x=${xc - pxw / 2} y=${Math.min(y, y0)} width=${pxw} height=${Math.max(0.5, Math.abs(y0 - y))} rx="2" style="fill:${s.color}"/>`);
        }
        return;
      }
      if (s.type === "band") {
        const top = pts.filter((p) => p.v2 != null).map((p) => [this.x(p.t), sc.y(p.v2!)] as const);
        const low = pts.map((p) => [this.x(p.t), sc.y(p.v!)] as const).reverse();
        if (top.length) {
          parts.push(svg`<path d=${smooth(top) + " L" + smooth(low).slice(1) + "Z"} style="fill:${s.color};fill-opacity:0.28"/>`);
        }
        return;
      }
      const xy = pts.map((p) => [this.x(p.t), sc.y(p.v!)] as const);
      if (s.type === "area") {
        const id = `g${i}`;
        parts.push(svg`
          <defs><linearGradient id=${id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:${s.color};stop-opacity:0.45"/>
            <stop offset="1" style="stop-color:${s.color};stop-opacity:0.04"/>
          </linearGradient></defs>
          <path d=${`${smooth(xy)} L${xy[xy.length - 1][0]},${bottom} L${xy[0][0]},${bottom}Z`} fill="url(#${id})"/>`);
      }
      if (s.dashUntil != null && pts[0].t < s.dashUntil) {
        const cut = pts.findIndex((p) => p.t >= s.dashUntil!);
        const a = cut < 0 ? xy : xy.slice(0, cut + 1);
        const b = cut < 0 ? [] : xy.slice(cut);
        parts.push(svg`<path d=${smooth(a)} class="ln" style="stroke:${s.color}" stroke-dasharray="5 5"/>`);
        if (b.length > 1) parts.push(svg`<path d=${smooth(b)} class="ln" style="stroke:${s.color}"/>`);
      } else {
        parts.push(svg`<path d=${smooth(xy)} class="ln" style="stroke:${s.color}"/>`);
      }
    });

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
      const rows: string[] = [];
      for (const s of this.series) {
        const p = nearest(s, t);
        if (!p || p.v == null || s.silent) continue;
        const sc = s.axis === "right" && R ? R : L;
        if (s.type === "line" || s.type === "area") parts.push(svg`<circle cx=${x} cy=${sc.y(p.v)} r="4" style="fill:${s.color}" class="hdot"/>`);
        const val = s.type === "band" && p.v2 != null
          ? `${num(p.v, s.digits ?? 1)} – ${num(p.v2, s.digits ?? 1)}`
          : num(p.v, s.digits ?? 1);
        rows.push(`${s.label ? s.label + " " : ""}${val}${s.unit ?? ""}`);
      }
      const left = Math.min(Math.max(x, 70), w - 70);
      tip = html`<div class="tip" style="left:${left}px"><b>${this.timeFormat(t)}</b>${rows.map((r) => html`<span>${r}</span>`)}</div>`;
    }

    return html`
      <div class="wrap">
        ${tip}
        <svg width=${w} height=${this.height} @pointermove=${this.onPointer} @pointerdown=${this.onPointer}
          @pointerleave=${() => (this._hover = undefined)}>${parts}</svg>
      </div>
    `;
  }

  static styles = css`
    :host { display: block; width: 100%; touch-action: pan-y; }
    .wrap { position: relative; }
    svg { display: block; overflow: visible; }
    .grid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-width: 1; }
    .vgrid { stroke: var(--divider-color, rgba(127, 127, 127, 0.2)); stroke-dasharray: 2 3; }
    .ylab, .xlab { fill: var(--secondary-text-color); font-size: 11px; }
    .past { fill: rgba(127, 127, 127, 0.08); }
    .ln { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
    .mk { fill: var(--primary-text-color); stroke: var(--card-background-color, #000); stroke-width: 2; }
    .mklab { fill: var(--primary-text-color); font-size: 12px; font-weight: 600; text-anchor: middle; }
    .nowl { stroke: var(--primary-text-color); stroke-width: 1; opacity: 0.5; }
    .hov { stroke: var(--primary-text-color); stroke-width: 1; }
    .hdot { stroke: var(--card-background-color, #000); stroke-width: 2; }
    .tip {
      position: absolute; top: -8px; transform: translate(-50%, -100%); pointer-events: none; z-index: 1;
      background: var(--card-background-color, #222); color: var(--primary-text-color);
      border: 1px solid var(--divider-color); border-radius: 8px; padding: 4px 8px; font-size: 12px;
      display: flex; gap: 8px; white-space: nowrap; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    }
  `;
}

/** Punkt einer Serie nahe t — Toleranz halber Punktabstand (Balken/Linien liegen leicht versetzt). */
function nearest(s: ChartSeries, t: number): ChartPoint | undefined {
  let best: ChartPoint | undefined;
  for (const p of s.points) if (p.v != null && (!best || Math.abs(p.t - t) < Math.abs(best.t - t))) best = p;
  if (!best) return undefined;
  const pts = s.points;
  const gap = s.barWidth ?? (pts.length > 1 ? Math.abs(pts[1].t - pts[0].t) : Infinity);
  return Math.abs(best.t - t) <= gap / 2 + 1 ? best : undefined;
}

function niceStep(raw: number): number {
  const p = Math.pow(10, Math.floor(Math.log10(Math.max(raw, 1e-9))));
  const f = raw / p;
  return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p;
}

function fmtTick(v: number): string {
  return Number.isInteger(v) ? String(v) : num(v, 1);
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
