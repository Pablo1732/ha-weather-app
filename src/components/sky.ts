import { css, html, nothing } from "lit";

// Dezente Wetter-Animation im Hintergrund: fallende Regenstreifen bzw. Schneeflocken.
// Nur CSS-Transforms (GPU), wenige Elemente; aus bei animations: false oder „Bewegung reduzieren“.

type Kind = "rain" | "pour" | "snow" | "sleet";

const KIND: Record<string, Kind> = {
  rainy: "rain", "lightning-rainy": "rain", hail: "rain", pouring: "pour",
  snowy: "snow", "snowy-rainy": "sleet",
};

// fester Zufall → gleiche Anordnung bei jedem Rendern
function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function drops(n: number, seed: number) {
  const r = rng(seed);
  return [...Array(n)].map(() => {
    const dur = 0.7 + r() * 0.5;
    return `left:${(r() * 100).toFixed(1)}%;height:${Math.round(14 + r() * 14)}px;animation-duration:${dur.toFixed(2)}s;animation-delay:-${(r() * dur).toFixed(2)}s;opacity:${(0.4 + r() * 0.6).toFixed(2)}`;
  });
}

function flakes(n: number, seed: number) {
  const r = rng(seed);
  return [...Array(n)].map(() => {
    const dur = 9 + r() * 8, size = 2 + r() * 2.5;
    return `left:${(r() * 100).toFixed(1)}%;width:${size.toFixed(1)}px;height:${size.toFixed(1)}px;animation-duration:${dur.toFixed(1)}s;animation-delay:-${(r() * dur).toFixed(1)}s;opacity:${(0.35 + r() * 0.5).toFixed(2)}`;
  });
}

const LAYERS: Record<Kind, { drops: string[]; flakes: string[] }> = {
  rain: { drops: drops(28, 1), flakes: [] },
  pour: { drops: drops(56, 2), flakes: [] },
  snow: { drops: [], flakes: flakes(36, 3) },
  sleet: { drops: drops(14, 4), flakes: flakes(18, 5) },
};

export function renderSky(condition: string | undefined, enabled: boolean) {
  const kind = enabled && condition ? KIND[condition] : undefined;
  if (!kind) return nothing;
  const l = LAYERS[kind];
  return html`<div class="sky" aria-hidden="true">
    ${l.drops.map((s) => html`<i class="drop" style=${s}></i>`)}
    ${l.flakes.map((s) => html`<i class="flake" style=${s}></i>`)}
  </div>`;
}

export const skyStyles = css`
  .sky {
    position: absolute; left: 0; right: 0; top: 0; height: 560px; overflow: hidden; pointer-events: none;
    -webkit-mask-image: linear-gradient(180deg, #000 0, #000 45%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 0, #000 45%, transparent 100%);
  }
  .sky i { position: absolute; top: 0; will-change: transform; animation: wa-fall linear infinite; }
  .drop { width: 1.5px; border-radius: 1px; background: linear-gradient(180deg, transparent, var(--wa-drop)); }
  .sky .flake { border-radius: 50%; background: var(--wa-flake); animation-name: wa-snow; }
  @keyframes wa-fall { from { transform: translate3d(0, -40px, 0); } to { transform: translate3d(0, 580px, 0); } }
  @keyframes wa-snow {
    0% { transform: translate3d(0, -10px, 0); }
    50% { transform: translate3d(14px, 280px, 0); }
    100% { transform: translate3d(0, 570px, 0); }
  }
  @media (prefers-reduced-motion: reduce) { .sky { display: none; } }
`;
