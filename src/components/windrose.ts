import { css, html, svg } from "lit";
import type { StatValue } from "../types";
import { num } from "../util/format";

// Windrose aus Statistik-Mittelwerten (Richtung + Geschwindigkeit je Stunde bzw. Tag).
// 16 Richtungen, gestapelt nach Beaufort-Stufen; Windstille als Prozent in der Mitte.

const CLASSES = [
  { max: 6, label: "1", color: "#4fc3f7" }, // 1–5 km/h  leiser Zug
  { max: 12, label: "2", color: "#4db6ac" }, // 6–11     leichte Brise
  { max: 20, label: "3", color: "#aed581" }, // 12–19    schwache Brise
  { max: 29, label: "4", color: "#ffd54f" }, // 20–28    mäßige Brise
  { max: 39, label: "5", color: "#ffb74d" }, // 29–38    frische Brise
  { max: Infinity, label: "6+", color: "#e57373" },
];
const CALM = 1; // < 1 km/h = Windstille (Beaufort 0)
const DIRS = ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

export function renderWindrose(dirRows: StatValue[] = [], speedRows: StatValue[] = []) {
  const speedAt = new Map(speedRows.map((r) => [r.start, r.mean]));
  const counts = DIRS.map(() => CLASSES.map(() => 0));
  const classTotals = CLASSES.map(() => 0);
  let calm = 0, total = 0;
  for (const r of dirRows) {
    const sp = speedAt.get(r.start);
    if (r.mean == null || sp == null) continue;
    total++;
    if (sp < CALM) { calm++; continue; }
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
  const R0 = 14, R = 92;
  const rad = (p: number) => R0 + (p / outer) * (R - R0);
  const wedge = (i: number, r1: number, r2: number) => {
    const a1 = ((i * 22.5 - 9.5 - 90) * Math.PI) / 180, a2 = ((i * 22.5 + 9.5 - 90) * Math.PI) / 180;
    const p = (r: number, a: number) => `${100 + r * Math.cos(a)},${100 + r * Math.sin(a)}`;
    return `M${p(r1, a1)} L${p(r2, a1)} A${r2} ${r2} 0 0 1 ${p(r2, a2)} L${p(r1, a2)} A${r1} ${r1} 0 0 0 ${p(r1, a1)}Z`;
  };

  const rings = [];
  for (let v = ringStep; v <= outer; v += ringStep) {
    rings.push(svg`<circle cx="100" cy="100" r=${rad(v)} class="ring"/>`);
    rings.push(svg`<text x=${100 + rad(v) * 0.71 + 2} y=${100 + rad(v) * 0.71 + 8} class="rl">${v} %</text>`);
  }
  const wedges = counts.flatMap((cls, i) => {
    let acc = 0;
    return cls.map((n, c) => {
      if (!n) return svg``;
      const r1 = rad(acc);
      acc += pct(n);
      return svg`<path d=${wedge(i, r1, rad(acc))} style="fill:${CLASSES[c].color}"><title>${DIRS[i]}: ${num(pct(n), 1)} %</title></path>`;
    });
  });

  return html`
    <div class="rose">
      <svg viewBox="-12 -12 224 224">
        ${rings}
        <line x1="100" y1="2" x2="100" y2="198" class="ring"/><line x1="2" y1="100" x2="198" y2="100" class="ring"/>
        ${wedges}
        <circle cx="100" cy="100" r=${R0 - 1} class="calm"/>
        <text x="100" y="104" class="cv">${Math.round(pct(calm))} %</text>
        <text x="100" y="-2" class="cd">N</text><text x="100" y="212" class="cd">S</text>
        <text x="206" y="104" class="cd">O</text><text x="-6" y="104" class="cd">W</text>
      </svg>
      <div class="bft">
        <span class="bl">Beaufort</span>
        <span><i style="background:var(--wa-track)"></i>0 · ${Math.round(pct(calm))} %</span>
        ${CLASSES.map((c, i) => classTotals[i]
          ? html`<span><i style="background:${c.color}"></i>${c.label} · ${Math.round(pct(classTotals[i]))} %</span>`
          : "")}
      </div>
    </div>`;
}

export const windroseStyles = css`
  .rose { display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .rose svg { width: 100%; max-width: 300px; }
  .ring { fill: none; stroke: var(--wa-divider); stroke-width: 0.8; }
  .rl { fill: var(--wa-text2); font-size: 7px; }
  .calm { fill: var(--ha-card-background, var(--card-background-color, #1c1c1c)); stroke: var(--wa-divider); }
  .cv { fill: var(--wa-text); font-size: 8px; font-weight: 600; text-anchor: middle; }
  .cd { fill: var(--wa-text2); font-size: 10px; font-weight: 600; text-anchor: middle; }
  .bft { display: flex; flex-wrap: wrap; gap: 4px 12px; justify-content: center; font-size: 12px; color: var(--wa-text2); }
  .bft i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }
  .bft .bl { font-weight: 500; }
`;
