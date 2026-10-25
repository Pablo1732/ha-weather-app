import { css, html, nothing, svg } from "lit";
import type { ForecastItem, HomeAssistant, StatResult, WetterConfig } from "../types";
import { moonInfo, sunTimes } from "../util/astro";
import { moonLabel } from "../util/conditions";
import { MOON_JPG } from "../util/moon-image";
import { clock, compass, num, rain, stateNum, temp } from "../util/format";
import { head } from "./styles";
import { icon, mdiPath } from "../util/mdi";

// Detail-Kacheln unter der Vorhersage. Jede Kachel blendet sich aus, wenn ihr Sensor fehlt.

export interface TileData {
  hass: HomeAssistant;
  config: WetterConfig;
  hourly?: ForecastItem[];
  /** stündliche Statistik der letzten 24 h (Regen-Änderung, Luftdruck-Mittel) */
  recent?: StatResult;
}

export function renderTiles(d: TileData) {
  return html`<div class="tiles">
    ${windTile(d)} ${feelsTile(d)} ${humidityTile(d)} ${rainTile(d)} ${pressureTile(d)} ${uvTile(d)} ${sunTile(d)} ${moonTile(d)}
  </div>`;
}

function feelsTile({ hass, config }: TileData) {
  const s = config.sensors ?? {};
  const f = stateNum(hass, s.feels_like);
  if (f == null) return nothing;
  const t = stateNum(hass, s.temperature);
  const text = t == null ? "" : f < t - 1 ? "Durch den Wind fühlt es sich kälter an."
    : f > t + 1 ? "Durch die Luftfeuchtigkeit fühlt es sich wärmer an."
    : "Ähnlich wie die tatsächliche Temperatur.";
  return html`<section class="card tile">${head("mdi:thermometer-lines", "Gefühlt")}
    <div class="val">${temp(f)}</div>
    ${t != null ? html`<div class="lbl">Tatsächlich: ${temp(t)}</div>${feelsBar(f, t)}` : nothing}
    <div class="txt">${text}</div></section>`;
}

/** Leiste wie bei Apple: Strich von gefühlt bis tatsächlich, Pille mit Differenz, Marke = tatsächlich. */
function feelsBar(f: number, t: number) {
  const d = Math.round(f - t);
  // Skala so wählen, dass die Pille außen neben dem Strich Platz hat (gut 30 % auf der Gefühlt-Seite)
  const W = Math.max(14, Math.abs(f - t) / 0.5);
  const lo = d < 0 ? f - 0.32 * W : d > 0 ? f + 0.32 * W - W : t - W / 2;
  const pos = (v: number) => ((v - lo) / W) * 100;
  const color = d < 0 ? "#6ec6f0" : "#ffb74d";
  return html`<div class="fbar">
    ${d !== 0 ? html`<i class="fseg" style="left:${pos(Math.min(f, t))}%;width:${pos(Math.max(f, t)) - pos(Math.min(f, t))}%;background:${color}"></i>
      <b class="fpill" style="left:${pos(f)}%;background:${color};transform:translateX(${d < 0 ? "-100%" : "0"})">${icon(d < 0 ? "mdi:arrow-down-thin" : "mdi:arrow-up-thin")}${Math.abs(d)}°</b>` : nothing}
    <i class="ftick" style="left:${pos(t)}%"></i>
  </div>`;
}

function windTile({ hass, config }: TileData) {
  const s = config.sensors ?? {};
  const speed = stateNum(hass, s.wind_speed);
  if (speed == null) return nothing;
  const gust = stateNum(hass, s.wind_gust);
  const dir = stateNum(hass, s.wind_direction);
  const ticks = [...Array(72)].map((_, i) => {
    const a = (i * 5 * Math.PI) / 180;
    const r1 = i % 18 === 0 ? 38 : 41;
    return svg`<line x1=${50 + Math.sin(a) * r1} y1=${50 - Math.cos(a) * r1} x2=${50 + Math.sin(a) * 45} y2=${50 - Math.cos(a) * 45} class=${i % 18 === 0 ? "tk major" : "tk"}/>`;
  });
  return html`<section class="card tile wide2">${head("mdi:weather-windy", "Wind")}
    <div class="wind">
      <div class="rows">
        <div class="row"><span>Wind</span><b>${num(speed, 0)} km/h</b></div>
        ${gust != null ? html`<div class="row"><span>Böen</span><b>${num(gust, 0)} km/h</b></div>` : nothing}
        ${dir != null ? html`<div class="row"><span>Richtung</span><b>${num(dir, 0)}° ${compass(dir)}</b></div>` : nothing}
      </div>
      <svg class="compass" viewBox="0 0 100 100">
        ${ticks}
        ${["N", "O", "S", "W"].map((l, i) => svg`<text x=${50 + Math.sin((i * Math.PI) / 2) * 30} y=${54 - Math.cos((i * Math.PI) / 2) * 30} class="cl">${l}</text>`)}
        ${dir != null ? svg`<g transform="rotate(${dir + 180} 50 50)">
          <line x1="50" y1="88" x2="50" y2="18" class="arrow"/><path d="M50 10l-6 11h12z" class="arrowhead"/>
          <circle cx="50" cy="88" r="3.5" class="arrowhead"/></g>` : nothing}
        <circle cx="50" cy="50" r="17" class="hub"/>
        <text x="50" y="50" class="cv">${num(speed, 0)}</text><text x="50" y="60" class="cu">km/h</text>
      </svg>
    </div></section>`;
}

function rainTile({ hass, config, hourly, recent }: TileData) {
  const s = config.sensors ?? {};
  if (!s.rain_total && !hourly) return nothing;
  const past = s.rain_total && recent?.[s.rain_total]
    ? recent[s.rain_total].reduce((a, r) => a + (r.change ?? 0), 0) : undefined;
  const now = Date.now();
  const next = hourly
    ?.filter((h) => { const t = new Date(h.datetime).getTime(); return t >= now - 3_600_000 && t < now + 23 * 3_600_000; })
    .reduce((a, h) => a + (h.precipitation ?? 0), 0);
  const rate = stateNum(hass, s.rain_rate);
  return html`<section class="card tile">${head("mdi:water", "Niederschlag")}
    <div class="val">${past != null ? rain(past) : "–"}</div>
    <div class="lbl">in den letzten 24 Std.</div>
    <div class="rows bottom">
      ${s.rain_rate ? html`<div class="row"><span>Aktuell</span><b>${rate ? `${num(rate)} l/m²/h` : "kein Regen"}</b></div>` : nothing}
      ${next != null ? html`<div class="row"><span>Nächste 24 Std.</span><b>${rain(next)}</b></div>` : nothing}
    </div></section>`;
}

function pressureTile({ hass, config, recent }: TileData) {
  const s = config.sensors ?? {};
  const p = stateNum(hass, s.pressure);
  if (p == null) return nothing;
  const rows = s.pressure ? recent?.[s.pressure] : undefined;
  // nur volle Stunden — die laufende Stunde kommt als 5-Minuten-Werte dazu
  const hours = rows?.filter((r) => r.end - r.start >= 3_600_000);
  const ref = hours && hours.length >= 3 ? hours[hours.length - 3].mean : undefined;
  const diff = ref != null ? p - ref : undefined;
  const trend = diff == null ? "" : diff > 1 ? "steigend" : diff < -1 ? "fallend" : "gleichbleibend";
  // Zeiger zeigt die 3-Stunden-Tendenz (−4 … +4 hPa) — unabhängig von der Höhen-Kalibrierung der Station
  const ang = diff == null ? 0 : Math.max(-1, Math.min(1, diff / 4)) * 120;
  const arc = [...Array(41)].map((_, i) => {
    const a = ((-120 + i * 6) * Math.PI) / 180;
    return svg`<line x1=${50 + Math.sin(a) * 36} y1=${54 - Math.cos(a) * 36} x2=${50 + Math.sin(a) * 44} y2=${54 - Math.cos(a) * 44} class="tk"/>`;
  });
  return html`<section class="card tile">${head("mdi:gauge", "Luftdruck")}
    <svg class="gauge" viewBox="0 0 100 92">
      ${arc}
      <g transform="rotate(${ang} 50 54)"><line x1="50" y1="6" x2="50" y2="20" class="needle"/></g>
      <text x="50" y="52" class="gv">${num(p, 0)}</text><text x="50" y="64" class="gu">hPa</text>
      <svg x="11" y="81" width="10" height="10" viewBox="0 0 24 24"><path d=${mdiPath("mdi:arrow-down-thin")} class="ga"/></svg>
      <svg x="79" y="81" width="10" height="10" viewBox="0 0 24 24"><path d=${mdiPath("mdi:arrow-up-thin")} class="ga"/></svg>
    </svg>
    <div class="txt">${trend ? html`3 Std.: ${trend} (${diff! > 0 ? "+" : ""}${num(diff, 1)} hPa)` : nothing}</div></section>`;
}

function humidityTile({ hass, config }: TileData) {
  const s = config.sensors ?? {};
  const h = stateNum(hass, s.humidity);
  if (h == null) return nothing;
  const dp = stateNum(hass, s.dewpoint);
  return html`<section class="card tile">${head("mdi:water-percent", "Feuchtigkeit")}
    <div class="val">${num(h, 0)} %</div>
    <div class="hbar"><i style="width:${Math.max(0, Math.min(100, h))}%"></i></div>
    <div class="txt">${dp != null ? `Der Taupunkt liegt derzeit bei ${temp(dp)}.` : ""}</div></section>`;
}

const UV_LEVELS: [number, string][] = [[3, "Niedrig"], [6, "Mittel"], [8, "Hoch"], [11, "Sehr hoch"], [99, "Extrem"]];

function uvTile({ hass, config }: TileData) {
  const s = config.sensors ?? {};
  const uv = stateNum(hass, s.uv);
  if (uv == null) return nothing;
  const solar = stateNum(hass, s.solar);
  const level = UV_LEVELS.find(([max]) => uv < max)![1];
  return html`<section class="card tile">${head("mdi:sun-wireless", "UV-Index")}
    <div class="val">${num(uv, 0)}</div><div class="lbl">${level}</div>
    <div class="uvbar"><i style="left:${Math.min(100, (uv / 11) * 100)}%"></i></div>
    <div class="txt">${solar != null ? `Sonneneinstrahlung ${num(solar, 0)} W/m²` : ""}</div></section>`;
}

function sunTile({ hass, config }: TileData) {
  const w = hass.states[config.weather]?.attributes;
  const sun = config.sun ? hass.states[config.sun] : undefined;
  const lat = w?.latitude ?? (hass as any).config?.latitude;
  const lon = w?.longitude ?? (hass as any).config?.longitude;
  if (lat == null || lon == null) return nothing;
  const now = new Date();
  const st = sunTimes(now, lat, lon);
  if (!st) return nothing;
  // sun.sun ist genauer — nutzen, wenn dessen "nächste" Zeit heute ist
  const sameDay = (iso?: string) => (iso && new Date(iso).toDateString() === now.toDateString() ? new Date(iso) : undefined);
  const rise = sameDay(sun?.attributes.next_rising) ?? st.rise;
  const set = sameDay(sun?.attributes.next_setting) ?? st.set;
  const beforeSet = now < set;
  const main = now < rise ? ["Sonnenaufgang", rise] as const : beforeSet ? ["Sonnenuntergang", set] as const
    : ["Sonnenaufgang", sunTimes(new Date(now.getTime() + 86_400_000), lat, lon)?.rise ?? rise] as const;

  const day0 = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const frac = (d: Date) => (d.getTime() - day0) / 86_400_000;
  const noon = (frac(rise) + frac(set)) / 2;
  const D = frac(set) - frac(rise);
  const yOf = (x: number) => Math.cos(2 * Math.PI * (x - noon));
  const horizon = Math.cos(Math.PI * D);
  const Y = (v: number) => 34 - v * 22;
  const path = [...Array(49)].map((_, i) => `${i ? "L" : "M"}${(i / 48) * 100},${Y(yOf(i / 48))}`).join(" ");
  const xn = frac(now);
  const up = now >= rise && now < set;
  return html`<section class="card tile">${head(up ? "mdi:weather-sunset-down" : "mdi:weather-sunset-up", main[0])}
    <div class="val">${clock(main[1])}</div>
    <div class="sunarc">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none">
        <path d=${path} class="sunpath"/>
        <line x1="0" x2="100" y1=${Y(horizon)} y2=${Y(horizon)} class="hz"/>
      </svg>
      <!-- Punkt als HTML, sonst verzerrt preserveAspectRatio=none ihn zur Ellipse -->
      <i class=${up ? "sundot" : "sundot down"} style="left:${xn * 100}%;top:${(Y(yOf(xn)) / 60) * 100}%"></i>
    </div>
    <div class="txt">${main[0] === "Sonnenuntergang" ? `Sonnenaufgang: ${clock(rise)}` : `Sonnenuntergang: ${clock(set)}`}</div>
  </section>`;
}

function moonTile({ hass, config }: TileData) {
  const phase = config.moon ? hass.states[config.moon]?.state : undefined;
  const m = moonInfo(new Date());
  const days = Math.round((m.nextFull.getTime() - Date.now()) / 86_400_000);
  const k = m.illumination;
  return html`<section class="card tile wide2 moont">${head("mdi:moon-waxing-gibbous", phase ? moonLabel(phase) : "Mond")}
    <div class="moon">
      <div>
        <div class="row"><span>Beleuchtung</span><b>${Math.round(k * 100)} %</b></div>
        <div class="row"><span>Nächster Vollmond</span><b>${days <= 0 ? "heute" : days === 1 ? "morgen" : `in ${days} Tg.`}</b></div>
      </div>
      ${moonSvg(k, m.age < 29.530588853 / 2)}
    </div></section>`;
}

/** Mond als NASA-Foto; unbeleuchteter Teil als weiche Schattenfläche darüber. */
function moonSvg(k: number, waxing: boolean) {
  const R = 20, C = 50;
  const rx = R * Math.abs(1 - 2 * k);
  // dunkle Seite = linke Hälfte (bei zunehmend) + Terminator-Bogen
  const dark = `M${C} ${C - R} A${R} ${R} 0 0 0 ${C} ${C + R} A${rx} ${R} 0 0 ${k > 0.5 ? 1 : 0} ${C} ${C - R}Z`;
  return svg`<svg class="moonimg" viewBox="28 28 44 44" aria-hidden="true">
    <defs>
      <filter id="ms" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6"/></filter>
      <clipPath id="mc"><circle cx=${C} cy=${C} r=${R}/></clipPath>
    </defs>
    <g clip-path="url(#mc)">
      <image href=${MOON_JPG} x=${C - R} y=${C - R} width=${2 * R} height=${2 * R}/>
      ${k < 0.995 ? svg`<path d=${dark} fill="#05070c" fill-opacity="0.88" filter="url(#ms)"
        transform=${waxing ? "" : `translate(${2 * C} 0) scale(-1 1)`}/>` : nothing}
    </g>
  </svg>`;
}

export const tileStyles = css`
  /* so viele Spalten wie passen (Handy 2, Tablet/PC 3–6) → keine riesigen, halbleeren Kacheln */
  /* min(…, 50 %): auch auf sehr schmalen Handys immer 2 Spalten — breite Kacheln (span 2) sprengen sonst das Raster */
  .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)); gap: 12px; }
  .tiles { grid-template-columns: repeat(auto-fill, minmax(min(165px, calc(50% - 6px)), 1fr)); } /* alte Browser ohne min(): Zeile davor */
  .tile { display: flex; flex-direction: column; }
  .tile.wide2 { grid-column: span 2; }
  .tile .val { font-size: 28px; font-weight: 500; line-height: 1.2; margin-top: 2px; }
  .tile .lbl { font-size: 14px; font-weight: 500; }
  .tile .txt { font-size: 13px; color: var(--wa-text2); margin-top: auto; padding-top: 8px; }
  .row { display: flex; justify-content: space-between; gap: 8px; padding: 6px 0; border-bottom: 1px solid var(--wa-divider); font-size: 14px; }
  .row:last-child { border-bottom: 0; }
  .row span { color: var(--wa-text2); }

  .wind { display: flex; align-items: center; gap: 12px; flex: 1; }
  .wind .rows { flex: 1; min-width: 0; }
  .compass { width: 120px; height: 120px; flex: none; }
  .tk { stroke: var(--wa-text2); stroke-width: 1; opacity: 0.5; }
  .tk.major { stroke-width: 2; opacity: 0.9; }
  .cl { fill: var(--wa-text2); font-size: 9px; font-weight: 500; text-anchor: middle; }
  .arrow { stroke: var(--wa-text); stroke-width: 2.5; }
  .arrowhead { fill: var(--wa-text); }
  .hub { fill: var(--ha-card-background, var(--card-background-color, #1c1c1c)); }
  .cv { fill: var(--wa-text); font-size: 15px; font-weight: 500; text-anchor: middle; }
  .cu { fill: var(--wa-text2); font-size: 7px; text-anchor: middle; }

  .gauge { width: 100%; max-width: 130px; margin: 4px auto 0; display: block; }
  .needle { stroke: var(--wa-text); stroke-width: 3.5; stroke-linecap: round; }
  .gv { fill: var(--wa-text); font-size: 18px; font-weight: 500; text-anchor: middle; }
  .gu { fill: var(--wa-text2); font-size: 9px; text-anchor: middle; }
  .ga { fill: var(--wa-text2); }

  .uvbar {
    position: relative; height: 5px; border-radius: 3px; margin-top: 10px;
    background: linear-gradient(90deg, #66bb6a, #ffee58, #ffa726, #ef5350, #ab47bc);
  }
  .uvbar i {
    position: absolute; top: 50%; width: 9px; height: 9px; margin: -4.5px 0 0 -4.5px; border-radius: 50%; box-sizing: border-box;
    background: var(--wa-text); border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
  }

  .fbar { position: relative; height: 18px; margin-top: 10px; }
  .fbar::before { content: ""; position: absolute; left: 0; right: 0; top: 7px; height: 4px; border-radius: 2px; background: var(--wa-track); }
  .fseg { position: absolute; top: 7px; height: 4px; }
  .fpill {
    position: absolute; top: 0; padding: 0 7px 0 4px; border-radius: 9px;
    display: inline-flex; align-items: center; gap: 1px; --mdc-icon-size: 13px;
    font-size: 12px; line-height: 18px; font-weight: 500; color: #10202c; white-space: nowrap;
  }
  .ftick { position: absolute; top: 2px; width: 3px; height: 14px; margin-left: -1.5px; border-radius: 2px; background: var(--wa-text); }
  /* Zeilen unten bündig wie der Text der Nachbarkacheln */
  .rows.bottom { margin-top: auto; padding-top: 8px; }
  .hbar { height: 5px; border-radius: 3px; margin-top: 10px; background: var(--wa-track); overflow: hidden; }
  .hbar i { display: block; height: 100%; border-radius: 3px; background: var(--wa-rain); }

  .sunarc { position: relative; height: 56px; margin-top: 6px; }
  .sunarc svg { width: 100%; height: 100%; display: block; }
  .sunpath { fill: none; stroke: var(--wa-text2); stroke-width: 1.5; vector-effect: non-scaling-stroke; opacity: 0.7; }
  .hz { stroke: var(--wa-text2); stroke-width: 1; vector-effect: non-scaling-stroke; opacity: 0.5; }
  .sundot { position: absolute; width: 10px; height: 10px; margin: -5px 0 0 -5px; border-radius: 50%; background: #ffd84d; }
  .sundot.down { background: var(--wa-text2); }

  .moon { display: flex; align-items: center; gap: 12px; flex: 1; }
  /* NASA-Foto ist für dunklen Grund belichtet → im hellen Theme aufhellen */
  .moon .moonimg { width: 92px; height: 92px; flex: none; filter: var(--wa-moonimg, none); }
  .moon > div { flex: 1; min-width: 0; }
`;
