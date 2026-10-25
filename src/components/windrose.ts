import { css, html, svg } from "lit";
import type { StatValue } from "../types";
import { num } from "../util/format";

// Windrose aus Statistik-Mittelwerten (Richtung + Geschwindigkeit je Stunde bzw. Tag),
// optisch angelehnt an die windrose-card: 16 Richtungen, gestapelt nach Beaufort,
// Windstille in der Mitte, Beaufort-Leiste darunter, rote Pfeile = aktueller Wind.

const CALM = { max: 1, color: "#2a32ff", text: "#fff" }; // < 1 km/h = Windstille (Beaufort 0)
const CLASSES = [
  { max: 6, label: "1", color: "#3a6ff7", text: "#fff" },
  { max: 12, label: "2", color: "#3fb4f7", text: "#000" },
  { max: 20, label: "3", color: "#44f2f7", text: "#000" },
  { max: 29, label: "4", color: "#a6f78a", text: "#000" },
  { max: 39, label: "5", color: "#f7d64a", text: "#000" },
  { max: Infinity, label: "6+", color: "#f77a4a", text: "#000" },
];
const DIRS = ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

export interface WindNow { direction?: number; speed?: number }

export function renderWindrose(dirRows: StatValue[] = [], speedRows: StatValue[] = [], now: WindNow = {}) {
  const speedAt = new Map(speedRows.map((r) => [r.start, r.mean]));
  const counts = DIRS.map(() => CLASSES.map(() => 0));
  const classTotals = CLASSES.map(() => 0);
  let calm = 0, total = 0;
  for (const r of dirRows) {
    const sp = speedAt.get(r.start);
    if (r.mean == null || sp == null) continue;
    total++;
    if (sp < CALM.max) { calm++; continue; }
    const d = Math.round((((r.mean % 360) + 360) % 360) / 22.5) % 16;
    const c = CLASSES.findIndex((k) => sp < k.max);
    counts[d][c]++;
    classTotals[c]++;
  }
  if (!total) return html`<div class="hint">Keine Winddaten im Zeitraum.</div>`;

  const pct = (n: number) => (n / total) * 100;
  const dirMax = Math.max(...counts.map((c) => pct(c.reduce((a, b) => a + b, 0))), 1);
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

  const rings = [];
  for (let v = ringStep; v <= outer; v += ringStep) {
    rings.push(svg`<circle cx="100" cy="100" r=${rad(v)} class="ring"/>`);
    // Beschriftung in der Lücke zwischen OSO und SO, mit Hintergrund-Kontur lesbar über Sektoren
    rings.push(svg`<text x=${100 + rad(v) * Math.cos(ang(123.75))} y=${102 + rad(v) * Math.sin(ang(123.75))} class="rl">${v} %</text>`);
  }
  const wedges = counts.flatMap((cls, i) => {
    let acc = 0;
    return cls.map((n, c) => {
      if (!n) return svg``;
      const r1 = rad(acc);
      acc += pct(n);
      return svg`<path d=${wedge(i, r1, rad(acc))} style="fill:${CLASSES[c].color}"><title>${DIRS[i]}, Bft ${CLASSES[c].label}: ${num(pct(n), 1)} %</title></path>`;
    });
  });
  const ticks = DIRS.map((_, i) => i % 4 === 0 ? svg`` : svg`<text x=${100 + 101 * Math.cos(ang(i * 22.5))} y=${103 + 101 * Math.sin(ang(i * 22.5))} class=${i % 2 ? "cd2" : "cd"}>${DIRS[i]}</text>`);
  // aktuelle Richtung: roter Pfeil am Rand, zeigt nach innen (Wind kommt aus dieser Richtung)
  const dirArrow = now.direction != null
    ? svg`<path d="M100 ${100 - R - 1} l-5 -9 h10z" class="now" transform="rotate(${now.direction} 100 100)"><title>Aktuell: ${Math.round(now.direction)}°</title></path>`
    : svg``;

  // Beaufort-Leiste: gleich breite Felder, aktuelle Geschwindigkeit als roter Pfeil darüber
  const bar = [{ ...CALM, label: "0", share: pct(calm) }, ...CLASSES.map((c, i) => ({ ...c, share: pct(classTotals[i]) }))];
  let nowPos: number | undefined;
  if (now.speed != null) {
    const bounds = [0, CALM.max, ...CLASSES.map((c) => c.max)];
    const i = Math.max(0, bounds.findIndex((b, j) => j > 0 && now.speed! < b) - 1);
    const lo = bounds[i], hi = Number.isFinite(bounds[i + 1]) ? bounds[i + 1] : lo + 20;
    nowPos = ((i + Math.min(1, (now.speed - lo) / (hi - lo))) / bar.length) * 100;
  }

  return html`
    <div class="rose">
      <svg viewBox="-14 -14 228 228">
        ${rings}
        <line x1="100" y1="8" x2="100" y2="192" class="ring"/><line x1="8" y1="100" x2="192" y2="100" class="ring"/>
        ${wedges}
        <circle cx="100" cy="100" r=${R0 - 1} style="fill:${CALM.color}"/>
        <text x="100" y="103.5" class="cv">${Math.round(pct(calm))} %</text>
        <text x="100" y="2" class="cd">N</text><text x="100" y="208" class="cd">S</text>
        <text x="203" y="103" class="cd">O</text><text x="-3" y="103" class="cd">W</text>
        ${ticks}
        ${dirArrow}
      </svg>
      <div class="bftbar">
        ${nowPos != null ? html`<span class="nowsp" style="left:${nowPos}%" title="Aktuell: ${num(now.speed, 1)} km/h"></span>` : ""}
        <div class="segs">${bar.map((b) => html`<span style="background:${b.color};color:${b.text}">${b.share >= 0.5 ? `${Math.round(b.share)}%` : ""}</span>`)}</div>
        <div class="nums">${bar.map((b) => html`<span>${b.label}</span>`)}</div>
        <div class="bl">Beaufort</div>
      </div>
    </div>`;
}

export const windroseStyles = css`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 10px; }
  .rose svg { width: 100%; max-width: 320px; }
  .ring { fill: none; stroke: var(--wa-divider); stroke-width: 0.8; }
  .rl { fill: var(--wa-text2); font-size: 6.5px; text-anchor: middle; paint-order: stroke; stroke: var(--ha-card-background, var(--card-background-color, #1c1c1c)); stroke-width: 2px; }
  .cv { fill: #fff; font-size: 9px; font-weight: 600; text-anchor: middle; }
  .cd { fill: var(--wa-text); font-size: 10px; font-weight: 600; text-anchor: middle; }
  .cd2 { fill: var(--wa-text2); font-size: 6.5px; text-anchor: middle; }
  .now { fill: #e53935; }
  .bftbar { position: relative; width: 100%; max-width: 360px; padding-top: 10px; }
  .segs { display: flex; height: 18px; border-radius: 4px; overflow: hidden; }
  .segs span { flex: 1; font-size: 10px; font-weight: 600; line-height: 18px; text-align: center; }
  .nums { display: flex; font-size: 11px; color: var(--wa-text2); margin-top: 2px; }
  .nums span { flex: 1; text-align: center; }
  .bl { text-align: center; font-size: 11px; color: var(--wa-text2); }
  .nowsp { position: absolute; top: 0; width: 0; height: 0; margin-left: -6px;
    border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 9px solid #e53935; }
`;
