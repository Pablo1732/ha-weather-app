import { LitElement, css, html, nothing, type PropertyValues, type TemplateResult } from "lit";

// Dezente Wetter-Animation im Hintergrund (Regen, Schnee, Sonne, Sterne, Wolken, Nebel, Blitz, Wind).
// Läuft über die Web Animations API statt CSS-@keyframes: die sind in Shadow-DOM-Stylesheets
// in manchen WebKit-Versionen (iOS-App) unzuverlässig. Nur Transform/Opacity → GPU, wenige Elemente.
// Aus bei animations: false oder „Bewegung reduzieren“.

type Layer = "rain" | "pour" | "snow" | "sleet" | "sun" | "stars" | "fewstars" | "clouds" | "fewclouds" | "fog" | "flash" | "wind";

const LAYERS: Record<string, Layer[]> = {
  rainy: ["clouds", "rain"], pouring: ["clouds", "pour"], hail: ["clouds", "rain"],
  "lightning-rainy": ["clouds", "rain", "flash"], lightning: ["clouds", "flash"],
  snowy: ["fewclouds", "snow"], "snowy-rainy": ["fewclouds", "sleet"],
  sunny: ["sun"], "clear-night": ["stars"],
  partlycloudy: ["sun", "fewclouds"], cloudy: ["clouds"], fog: ["fog"],
  windy: ["wind"], "windy-variant": ["fewclouds", "wind"],
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

interface Item { cls: string; style: string; anim: Keyframe[]; dur: number; delay: number; easing?: string; dir?: PlaybackDirection }

const FALL: Keyframe[] = [{ transform: "translate3d(0,-40px,0)" }, { transform: "translate3d(0,580px,0)" }];
const SNOW: Keyframe[] = [
  { transform: "translate3d(0,-10px,0)" }, { transform: "translate3d(14px,280px,0)" }, { transform: "translate3d(0,570px,0)" },
];
// Bahn über die ganze Breite: Element sitzt am linken Rand der Bahn, Bahn wandert von links außen nach rechts außen
const DRIFT = (w: number): Keyframe[] => [{ transform: `translate3d(-${w}%,0,0)` }, { transform: "translate3d(100%,0,0)" }];

function items(layer: Layer, seed: number): Item[] {
  const r = rng(seed);
  const n = (k: number) => [...Array(k)];
  switch (layer) {
    case "rain": case "pour": case "sleet": {
      const count = layer === "pour" ? 56 : layer === "sleet" ? 14 : 28;
      return n(count).map(() => {
        const dur = 700 + r() * 500;
        return { cls: "drop", style: `left:${(r() * 100).toFixed(1)}%;height:${Math.round(14 + r() * 14)}px;opacity:${(0.4 + r() * 0.6).toFixed(2)}`, anim: FALL, dur, delay: -r() * dur };
      }).concat(layer === "sleet" ? items("snow", seed + 7).slice(0, 18) : []);
    }
    case "snow":
      return n(36).map(() => {
        const dur = 9000 + r() * 8000, size = (2 + r() * 2.5).toFixed(1);
        return { cls: "flake", style: `left:${(r() * 100).toFixed(1)}%;width:${size}px;height:${size}px;opacity:${(0.35 + r() * 0.5).toFixed(2)}`, anim: SNOW, dur, delay: -r() * dur };
      });
    case "stars": case "fewstars":
      return n(layer === "stars" ? 46 : 18).map(() => {
        const size = (1 + r() * 1.6).toFixed(1);
        return {
          cls: "star", style: `left:${(r() * 100).toFixed(1)}%;top:${(r() * 300).toFixed(0)}px;width:${size}px;height:${size}px`,
          anim: [{ opacity: 0.15 }, { opacity: 0.4 + r() * 0.6 }], dur: 1800 + r() * 3500, delay: -r() * 4000, easing: "ease-in-out", dir: "alternate",
        };
      });
    case "sun":
      return [
        { cls: "glow", style: "", anim: [{ transform: "scale(1)", opacity: 0.75 }, { transform: "scale(1.08)", opacity: 1 }], dur: 7000, delay: 0, easing: "ease-in-out", dir: "alternate" },
        { cls: "rays", style: "", anim: [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], dur: 140000, delay: 0 },
      ];
    case "clouds": case "fewclouds":
      return n(layer === "clouds" ? 5 : 3).map((_, i) => {
        const dur = 70000 + r() * 50000;
        return {
          cls: "lane", style: `top:${Math.round(10 + i * (layer === "clouds" ? 70 : 90) + r() * 30)}px;--cw:${Math.round(28 + r() * 16)}%;opacity:${(0.5 + r() * 0.5).toFixed(2)}`,
          anim: DRIFT(45), dur, delay: -r() * dur,
        };
      });
    case "fog":
      return n(4).map((_, i) => {
        const dur = 50000 + r() * 40000;
        return { cls: "lane fogl", style: `top:${60 + i * 90}px`, anim: DRIFT(80), dur, delay: -r() * dur };
      });
    case "wind":
      return n(10).map(() => {
        const dur = 2200 + r() * 2200;
        return { cls: "lane windl", style: `top:${Math.round(20 + r() * 380)}px;--sw:${Math.round(60 + r() * 90)}px;opacity:${(0.3 + r() * 0.6).toFixed(2)}`, anim: DRIFT(20), dur, delay: -r() * dur * 3 };
      });
    case "flash":
      return [{
        cls: "flash", style: "",
        anim: [{ opacity: 0, offset: 0 }, { opacity: 0, offset: 0.9 }, { opacity: 0.35, offset: 0.91 }, { opacity: 0, offset: 0.93 }, { opacity: 0.22, offset: 0.95 }, { opacity: 0, offset: 0.97 }, { opacity: 0, offset: 1 }],
        dur: 9000, delay: -3000,
      }];
  }
}

const CACHE = new Map<string, Item[]>();
function itemsFor(condition: string, night: boolean): Item[] {
  const key = `${condition}|${night}`;
  let list = CACHE.get(key);
  if (!list) {
    // nachts statt Sonne ein paar Sterne
    const layers = (LAYERS[condition] ?? []).map((l) => (night && l === "sun" ? "fewstars" : l));
    list = layers.flatMap((l, i) => items(l, i * 31 + 1));
    CACHE.set(key, list);
  }
  return list;
}

const reducedMotion = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

export class WetterSky extends LitElement {
  static properties = { condition: {}, night: { type: Boolean } };
  condition?: string;
  night = false;

  protected render(): TemplateResult | typeof nothing {
    if (!this.condition || reducedMotion()) return nothing;
    const list = itemsFor(this.condition, this.night);
    if (!list.length) return nothing;
    return html`${list.map((it) => html`<i class=${it.cls} style=${it.style}>${it.cls.startsWith("lane") ? html`<b></b>` : nothing}</i>`)}`;
  }

  protected updated(changed: PropertyValues): void {
    if (!(changed.has("condition") || changed.has("night")) || !this.condition) return;
    const list = itemsFor(this.condition, this.night);
    const els = this.renderRoot.querySelectorAll("i");
    els.forEach((el, k) => {
      const it = list[k];
      if (!it || typeof el.animate !== "function") return;
      el.getAnimations?.().forEach((a) => a.cancel());
      el.animate(it.anim, { duration: it.dur, delay: it.delay, iterations: Infinity, easing: it.easing ?? "linear", direction: it.dir ?? "normal" });
    });
  }

  static styles = css`
    :host {
      position: absolute; left: 0; right: 0; top: 0; height: 560px; overflow: hidden; pointer-events: none; display: block;
      -webkit-mask-image: linear-gradient(180deg, #000 0, #000 45%, transparent 100%);
      mask-image: linear-gradient(180deg, #000 0, #000 45%, transparent 100%);
    }
    i { position: absolute; top: 0; left: 0; will-change: transform; }
    .drop { width: 1.5px; border-radius: 1px; background: linear-gradient(180deg, transparent, var(--wa-drop)); }
    .flake, .star { border-radius: 50%; background: var(--wa-flake); }
    .star { will-change: opacity; }
    .glow {
      left: auto; right: -90px; top: -110px; width: 340px; height: 340px; border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 214, 102, 0.45) 0, rgba(255, 196, 70, 0.18) 35%, transparent 70%);
    }
    .rays {
      left: auto; right: -330px; top: -350px; width: 820px; height: 820px; border-radius: 50%; opacity: 0.22;
      background: repeating-conic-gradient(from 0deg, rgba(255, 220, 140, 0.12) 0deg 3deg, transparent 6deg 15deg, rgba(255, 220, 140, 0.12) 18deg);
      -webkit-mask-image: radial-gradient(circle, #000 0, rgba(0, 0, 0, 0.5) 20%, transparent 50%);
      mask-image: radial-gradient(circle, #000 0, rgba(0, 0, 0, 0.5) 20%, transparent 50%);
    }
    .lane { width: 100%; height: 120px; }
    .lane b {
      position: absolute; left: 0; top: 0; width: var(--cw, 35%); height: 100%;
      background:
        radial-gradient(ellipse 45% 50% at 35% 60%, var(--wa-cloudbg) 0, transparent 70%),
        radial-gradient(ellipse 40% 55% at 62% 45%, var(--wa-cloudbg) 0, transparent 70%),
        radial-gradient(ellipse 50% 40% at 50% 70%, var(--wa-cloudbg) 0, transparent 75%);
    }
    .fogl { height: 70px; }
    .fogl b { width: 80%; background: radial-gradient(ellipse 50% 50% at 50% 50%, var(--wa-cloudbg) 0, transparent 70%); }
    .windl { height: 2px; }
    .windl b { width: var(--sw); height: 1.5px; border-radius: 1px; background: linear-gradient(90deg, transparent, var(--wa-drop), transparent); }
    .flash { width: 100%; height: 100%; opacity: 0; background: radial-gradient(ellipse at 50% 0, rgba(255, 255, 255, 0.9), transparent 70%); }
  `;
}
