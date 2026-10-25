import { css, html, svg } from "lit";
import type { StatValue } from "../types";
import { num } from "../util/format";

// Windrose aus Statistik-Mittelwerten (Richtung + Geschwindigkeit je Stunde bzw. Tag),
// optisch angelehnt an die windrose-card: 16 Richtungen, gestapelt nach Beaufort,
// Windstille in der Mitte, Beaufort-Leiste darunter, rote Pfeile = aktueller Wind.

interface Bft { min: number; max: number; label: string; name: string; color: string; text: string }
// Beaufort-Stufen in km/h; Stufe 0 (Windstille) liegt in der Mitte der Rose
const BFT: Bft[] = [
  { min: 0, max: 1, label: "0", name: "Windstille", color: "#2a32ff", text: "#fff" },
  { min: 1, max: 6, label: "1", name: "leiser Zug", color: "#3a6ff7", text: "#fff" },
  { min: 6, max: 12, label: "2", name: "leichte Brise", color: "#3fb4f7", text: "#000" },
  { min: 12, max: 20, label: "3", name: "schwache Brise", color: "#44f2f7", text: "#000" },
  { min: 20, max: 29, label: "4", name: "mäßige Brise", color: "#a6f78a", text: "#000" },
  { min: 29, max: 39, label: "5", name: "frische Brise", color: "#f7d64a", text: "#000" },
  { min: 39, max: 50, label: "6", name: "starker Wind", color: "#f77a4a", text: "#000" },
  { min: 50, max: 62, label: "7", name: "steifer Wind", color: "#e8443a", text: "#fff" },
  { min: 62, max: Infinity, label: "8+", name: "stürmischer Wind und mehr", color: "#b0207a", text: "#fff" },
];
const DIRS = ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
const bftOf = (sp: number) => BFT.findIndex((b) => sp < b.max);

export interface WindNow { direction?: number; speed?: number }
export interface RoseOpts { now?: WindNow; selected?: number; onSelect?: (i: number | undefined) => void }

export function renderWindrose(dirRows: StatValue[] = [], speedRows: StatValue[] = [], o: RoseOpts = {}) {
  const now = o.now ?? {};
  const speedAt = new Map(speedRows.map((r) => [r.start, r.mean]));
  const counts = DIRS.map(() => BFT.map(() => 0)); // [Richtung][Stufe], Stufe 0 bleibt leer
  const totals = BFT.map(() => 0);
  let total = 0;
  for (const r of dirRows) {
    const sp = speedAt.get(r.start);
    if (r.mean == null || sp == null) continue;
    total++;
    const c = bftOf(sp);
    totals[c]++;
    if (c === 0) continue;
    counts[Math.round((((r.mean % 360) + 360) % 360) / 22.5) % 16][c]++;
  }
  if (!total) return html`<div class="hint">Keine Winddaten im Zeitraum.</div>`;

  const pct = (n: number) => (n / total) * 100;
  const dirTot = counts.map((c) => pct(c.reduce((a, b) => a + b, 0)));
  const dirMax = Math.max(...dirTot, 1);
  // höchstens 4 Ringe, sonst überlappen die Beschriftungen
  const ringStep = [2, 5, 10, 20, 25, 50].find((st) => dirMax / st <= 4) ?? 50;
  const outer = Math.ceil(dirMax / ringStep) * ringStep;
  const R0 = 16, R = 90;
  const rad = (p: number) => R0 + (p / outer) * (R - R0);
  const ang = (deg: number) => ((deg - 90) * Math.PI) / 180;
  const pt = (r: number, deg: number) => `${100 + r * Math.cos(ang(deg))},${100 + r * Math.sin(ang(deg))}`;
  const wedge = (i: number, r1: number, r2: number) => {
    const a1 = i * 22.5 - 10.5, a2 = i * 22.5 + 10.5;
    return `M${pt(r1, a1)} L${pt(r2, a1)} A${r2} ${r2} 0 0 1 ${pt(r2, a2)} L${pt(r1, a2)} A${r1} ${r1} 0 0 0 ${pt(r1, a1)}Z`;
  };

  // Ring-Beschriftung in der Lücke zwischen den zwei schwächsten Nachbar-Richtungen, über den Sektoren
  let gap = 0, best = Infinity;
  for (let i = 0; i < 16; i++) {
    const v = Math.max(dirTot[i], dirTot[(i + 1) % 16]);
    if (v < best) { best = v; gap = i; }
  }
  const la = gap * 22.5 + 11.25;
  const rings = [], ringLabels = [];
  for (let v = ringStep; v <= outer; v += ringStep) {
    rings.push(svg`<circle cx="100" cy="100" r=${rad(v)} class="ring"/>`);
    ringLabels.push(svg`<text x=${100 + rad(v) * Math.cos(ang(la))} y=${102.5 + rad(v) * Math.sin(ang(la))} class="rl">${v} %</text>`);
  }
  const dim = (c: number) => (o.selected != null && o.selected !== c ? "dim" : "");
  const wedges = counts.flatMap((cls, i) => {
    let acc = 0;
    return cls.map((n, c) => {
      if (!n) return svg``;
      const r1 = rad(acc);
      acc += pct(n);
      return svg`<path d=${wedge(i, r1, rad(acc))} style="fill:${BFT[c].color}" class=${dim(c)}><title>${DIRS[i]}, Bft ${BFT[c].label}: ${num(pct(n), 1)} %</title></path>`;
    });
  });
  const ticks = DIRS.map((_, i) => i % 4 === 0 ? svg`` : svg`<text x=${100 + 101 * Math.cos(ang(i * 22.5))} y=${103 + 101 * Math.sin(ang(i * 22.5))} class=${i % 2 ? "cd2" : "cd"}>${DIRS[i]}</text>`);
  // aktuelle Richtung: roter Pfeil am Rand, zeigt nach innen (Wind kommt aus dieser Richtung)
  const dirArrow = now.direction != null
    ? svg`<path d="M100 ${100 - R - 1} l-5 -9 h10z" class="now" transform="rotate(${now.direction} 100 100)"><title>Aktuell: ${Math.round(now.direction)}°</title></path>`
    : svg``;

  // Beaufort-Leiste: nur Stufen, die im Zeitraum vorkamen (+ die aktuelle)
  const nowCls = now.speed != null ? bftOf(now.speed) : -1;
  const shown = BFT.map((b, i) => ({ ...b, i, share: pct(totals[i]) })).filter((b) => totals[b.i] > 0 || b.i === nowCls);
  let nowPos: number | undefined;
  const ni = shown.findIndex((b) => b.i === nowCls);
  if (ni >= 0) {
    const b = shown[ni], hi = Number.isFinite(b.max) ? b.max : b.min + 20;
    nowPos = ((ni + Math.min(1, (now.speed! - b.min) / (hi - b.min))) / shown.length) * 100;
  }
  const sel = o.selected != null ? BFT[o.selected] : undefined;
  // Maus: Hover zeigt Details; Touch: Antippen schaltet um
  const pick = (i: number) => o.onSelect?.(o.selected === i ? undefined : i);
  const enter = (e: PointerEvent, i: number) => { if (e.pointerType === "mouse") o.onSelect?.(i); };
  const leave = (e: PointerEvent) => { if (e.pointerType === "mouse") o.onSelect?.(undefined); };
  const si = shown.findIndex((b) => b.i === o.selected);
  const range = (b: Bft) => (b.min === 0 ? "unter 1" : Number.isFinite(b.max) ? `${b.min}–${b.max - 1}` : `ab ${b.min}`);

  return html`
    <div class="rose">
      <svg viewBox="-14 -14 228 228">
        ${rings}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${wedges}
        <circle cx="100" cy="100" r=${R0 - 1} style="fill:${BFT[0].color}" class=${dim(0)}/>
        <text x="100" y="103.5" class="cv">${Math.round(pct(totals[0]))} %</text>
        ${ringLabels}
        <text x="100" y="2" class="cd">N</text><text x="100" y="208" class="cd">S</text>
        <text x="203" y="103" class="cd">O</text><text x="-3" y="103" class="cd">W</text>
        ${ticks}
        ${dirArrow}
      </svg>
      <div class="bftbar">
        ${nowPos != null ? html`<span class="nowsp" style="left:${nowPos}%" title="Aktuell: ${num(now.speed, 1)} km/h"></span>` : ""}
        ${sel && si >= 0 ? html`<div class="btip" style="left:${((si + 0.5) / shown.length) * 100}%">
          <div class="tr"><i style="background:${sel.color}"></i><b>Beaufort ${sel.label}</b></div>
          <div class="tr"><span>${sel.name}</span></div>
          <div class="tr"><span>Wind</span><b>${range(sel)} km/h</b></div>
          <div class="tr"><span>Anteil</span><b>${num(pct(totals[o.selected!]), 1)} %</b></div>
        </div>` : ""}
        <div class="segs">${shown.map((b) => html`<button style="background:${b.color};color:${b.text}" class=${o.selected === b.i ? "on" : ""}
          @click=${() => pick(b.i)} @pointerenter=${(e: PointerEvent) => enter(e, b.i)} @pointerleave=${leave}>${b.share >= 0.5 ? `${Math.round(b.share)}%` : ""}</button>`)}</div>
        <div class="nums">${shown.map((b) => html`<span @click=${() => pick(b.i)} @pointerenter=${(e: PointerEvent) => enter(e, b.i)} @pointerleave=${leave}>${b.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`;
}

export const windroseStyles = css`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .rose svg { width: 100%; max-width: 320px; }
  .rose .dim { opacity: 0.25; }
  .ring { fill: none; stroke: var(--wa-divider); stroke-width: 0.8; }
  .rl {
    fill: var(--wa-text); font-size: 6.5px; font-weight: 500; text-anchor: middle;
    paint-order: stroke; stroke: var(--ha-card-background, var(--card-background-color, #1c1c1c)); stroke-width: 2.2px;
  }
  .cv { fill: #fff; font-size: 9px; font-weight: 600; text-anchor: middle; }
  .cd { fill: var(--wa-text); font-size: 10px; font-weight: 600; text-anchor: middle; }
  .cd2 { fill: var(--wa-text2); font-size: 6.5px; text-anchor: middle; }
  .now { fill: #e53935; }
  .bftbar { position: relative; width: 100%; max-width: 360px; padding-top: 10px; }
  .segs { display: flex; height: 20px; border-radius: 4px; overflow: hidden; }
  .segs button { flex: 1; border: 0; padding: 0; font: inherit; font-size: 10px; font-weight: 600; line-height: 20px; cursor: pointer; }
  .segs button.on { box-shadow: inset 0 0 0 2px var(--wa-text); }
  .nums { display: flex; font-size: 11px; color: var(--wa-text2); margin-top: 2px; }
  .nums span { flex: 1; text-align: center; cursor: pointer; }
  .bl { text-align: center; font-size: 12px; color: var(--wa-text2); margin-top: 2px; }
  .btip {
    position: absolute; bottom: calc(100% - 6px); transform: translateX(-50%); pointer-events: none; z-index: 1; min-width: 130px;
    background: var(--card-background-color, #222); color: var(--primary-text-color);
    border: 1px solid var(--divider-color); border-radius: 8px; padding: 6px 8px; font-size: 12px; line-height: 1.5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25); white-space: nowrap;
  }
  .btip .tr { display: flex; align-items: center; gap: 6px; }
  .btip .tr i { width: 8px; height: 8px; border-radius: 2px; flex: none; }
  .btip .tr span { color: var(--secondary-text-color); flex: 1; }
  .btip .tr b { font-weight: 600; }
  .nowsp { position: absolute; top: 0; width: 0; height: 0; margin-left: -6px;
    border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 9px solid #e53935; }
`;
