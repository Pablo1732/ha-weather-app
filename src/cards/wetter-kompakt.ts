import { LitElement, css, html, nothing, type PropertyValues } from "lit";
import { ForecastController } from "../data/forecast";
import { fetchStatistics } from "../data/statistics";
import { cardStyles } from "../components/styles";
import { keepDay, shownDay, type ShownDay } from "../components/day-detail";
import type { ForecastItem, HomeAssistant, StatResult, StatValue, WetterConfig } from "../types";
import { conditionLabel } from "../util/conditions";
import { compass, hour, num, stateNum, temp, weekday } from "../util/format";
import { weatherIcon } from "../util/icons";
import { temperatureBlender } from "../util/blend";
import { withMeasuredToday } from "../util/today";

const HOUR = 3_600_000;
const DAY = 24 * HOUR;

export interface KompaktConfig extends WetterConfig {
  /** Unteransicht mit der kompletten Wetter-App, z. B. /dashboard-handy/wetter-app — ohne: Karte nicht antippbar */
  navigation_path?: string;
  /** true = Knopf „Wetter-App öffnen“ statt antippbarer Bereiche (die springen direkt an die passende Stelle) */
  open_button?: boolean;
  /** periods (Standard) = Vormittag/Nachmittag/Abend/Nacht, hours = einzelne Stunden */
  forecast?: "periods" | "hours";
}

/** Messwerte für die Kachelzeile: Regen heute / 7 Tage, stärkste Böe heute, Temperatur-Min/Max heute */
interface Measured { rainToday?: number; rain7?: number; gustMax?: number; temp?: StatValue[] }

/**
 * Kompakte Dashboard-Karte: das Wichtigste aus Vorhersage und Historie auf einen Blick,
 * Knopf öffnet die komplette Wetter-App (Unteransicht).
 */
export class WetterKompakt extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _m: { state: true },
    _cols: { state: true },
    _detail: { state: true },
  };

  hass?: HomeAssistant;
  private _config!: KompaktConfig;
  private _m: Measured = {};
  private _key?: string;
  /** so viele Stunden, wie nebeneinander passen */
  private _cols = 6;
  private _ro?: ResizeObserver;
  /** offenes Tages-Popup (Index in der Tagesvorhersage) */
  private _detail?: number;
  private _detailEl?: HTMLElement & Record<string, unknown>;
  private _shown?: ShownDay;

  private hourly = new ForecastController(this, "hourly", () => this._config?.weather);
  private daily = new ForecastController(this, "daily", () => this._config?.weather);

  setConfig(config: KompaktConfig): void {
    if (!config?.weather) throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");
    this._config = { ...config, sensors: { ...config.sensors } };
  }

  static getStubConfig(hass: HomeAssistant): Partial<KompaktConfig> {
    return { weather: Object.keys(hass.states).find((id) => id.startsWith("weather.")) ?? "" };
  }

  getCardSize(): number {
    return 6;
  }

  getGridOptions() {
    return { columns: 12, rows: "auto", min_columns: 6 };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._ro ??= new ResizeObserver((e) => {
      const n = Math.max(5, Math.min(10, Math.floor(e[0].contentRect.width / 58)));
      if (n !== this._cols) this._cols = n;
    });
    this._ro.observe(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._ro?.disconnect();
    this.syncDetail();
    // Ansicht verlassen → Popup zu, sonst geht es bei der Rückkehr von selbst wieder auf
    // (nur kurz umgehängt, z. B. beim Umsortieren durch HA → bleibt offen)
    setTimeout(() => { if (!this.isConnected) this._detail = undefined; });
  }

  // nur neu rendern, wenn sich eine relevante Entität geändert hat
  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size > 1 || !changed.has("hass")) return true;
    const old = changed.get("hass") as HomeAssistant | undefined;
    if (!old || !this.hass || !this._config) return true;
    if (old.themes?.darkMode !== this.hass.themes?.darkMode) return true;
    const c = this._config;
    return [c.weather, c.sun, ...Object.values(c.sensors ?? {})].some((id) => id && old.states[id] !== this.hass!.states[id]);
  }

  protected updated(): void {
    this.load();
    this.syncDetail();
  }

  /** Tages-Popup wie in der Wetter-App, direkt über dem Dashboard (Schließen bleibt auf dem Dashboard) */
  private syncDetail(): void {
    const nowTemp = stateNum(this.hass, this._config?.sensors?.temperature) ?? this.hass?.states[this._config?.weather]?.attributes.temperature;
    const daily = this._detail != null && this.hass ? withMeasuredToday(this.daily.forecast, this._m.temp, nowTemp) : undefined;
    if (this.isConnected && daily) {
      const i = keepDay(daily, this._detail!, this._shown);
      if (i == null || i !== this._detail) { this._detail = i; return; } // anderer Tag-Index bzw. schließen → neu zeichnen
      this._shown = shownDay(daily, i);
    } else {
      this._shown = undefined;
      this._detailEl?.remove();
      this._detailEl = undefined;
      return;
    }
    let el = this._detailEl;
    if (!el) {
      el = document.createElement("wetter-app-day-detail") as HTMLElement & Record<string, unknown>;
      el.addEventListener("close", () => (this._detail = undefined));
      el.addEventListener("select", (e) => (this._detail = (e as CustomEvent).detail.index));
      el.addEventListener("metric", (e) => ((this._detailEl as Record<string, unknown>).metric = (e as CustomEvent).detail.metric));
      el.metric = "temp";
      document.body.appendChild(el);
      this._detailEl = el;
    }
    Object.assign(el, { hass: this.hass, config: this._config, hourly: this.hourly.forecast ?? [], daily, index: this._detail });
    el.classList.toggle("dark", !!this.hass?.themes?.darkMode);
  }

  /**
   * Alle 5 min: Stundenwerte der letzten 7 Tage + 5-Minuten-Werte der laufenden Stunde
   * (Stundenwerte schreibt HA erst am Stundenende).
   */
  private load(): void {
    if (!this._config) return;
    const s = this._config.sensors ?? {};
    const ids = [s.rain_total, s.temperature, s.wind_gust].filter(Boolean) as string[];
    if (!this.hass || !ids.length) return;
    const now = Math.ceil(Date.now() / 300_000) * 300_000;
    const key = String(now);
    if (key === this._key) return;
    this._key = key;
    const midnight = new Date().setHours(0, 0, 0, 0);
    const from = midnight - 6 * DAY;
    const hourStart = Math.floor(Date.now() / HOUR) * HOUR;
    const types = ["change", "min", "max"] as const;
    Promise.all([
      fetchStatistics(this.hass, { ids, start: new Date(from), end: new Date(hourStart), period: "hour", types: [...types] }),
      fetchStatistics(this.hass, { ids, start: new Date(hourStart), end: new Date(now), period: "5minute", types: [...types] }),
    ]).then(
      ([h, m]) => key === this._key && (this._m = this.measure(h, m, midnight)),
      () => (this._key = undefined),
    );
  }

  private measure(h: StatResult, m: StatResult, midnight: number): Measured {
    const s = this._config.sensors ?? {};
    const rows = (id?: string) => (id ? [...(h[id] ?? []), ...(m[id] ?? [])] : []);
    const sum = (list: StatValue[]) => list.reduce((a, x) => a + (x.change ?? 0), 0);
    const rain = rows(s.rain_total);
    const gust = rows(s.wind_gust).filter((x) => x.end > midnight).map((x) => x.max).filter((v): v is number => v != null);
    return {
      rainToday: s.rain_total ? sum(rain.filter((x) => x.start >= midnight)) : undefined,
      rain7: s.rain_total ? sum(rain) : undefined,
      gustMax: gust.length ? Math.max(...gust) : undefined,
      temp: rows(s.temperature),
    };
  }

  /** Wetter-App öffnen, optional direkt an einer Stelle (siehe applyLink in der App) */
  private open(link?: string): void {
    const path = this._config.navigation_path;
    if (!path) return;
    history.pushState(null, "", link ? `${path}${path.includes("?") ? "&" : "?"}wetter=${link}` : path);
    window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: false } }));
  }

  /** Antippbare Bereiche: nur mit navigation_path und ohne open_button; Tage öffnen nur das Popup */
  private tap(link: string) {
    if (!this._config.navigation_path || this._config.open_button) return undefined;
    const day = /^day:(\d+)/.exec(link);
    return day ? () => (this._detail = Number(day[1])) : () => this.open(link);
  }

  protected render() {
    if (!this._config || !this.hass) return nothing;
    const w = this.hass.states[this._config.weather];
    if (!w) return html`<div class="card warn">Entität ${this._config.weather} nicht gefunden.</div>`;
    const s = this._config.sensors ?? {};
    const night = this._config.sun ? this.hass.states[this._config.sun]?.state === "below_horizon" : false;
    const nowTemp = stateNum(this.hass, s.temperature) ?? w.attributes.temperature;
    const feels = stateNum(this.hass, s.feels_like);
    const daily = withMeasuredToday(this.daily.forecast, this._m.temp, nowTemp);
    const today = daily?.[0];
    const taps = !!this._config.navigation_path && !this._config.open_button;

    return html`
      <div class="card ${this.hass.themes?.darkMode ? "dark" : ""} ${taps ? "taps" : ""}">
        <div class="now t-able" @click=${this.tap("forecast")}>
          <div class="ic">${weatherIcon(w.state, night)}</div>
          <div class="t">${temp(nowTemp)}</div>
          <div class="info">
            <b>${conditionLabel(w.state)}</b>
            <span>${this._config.name ?? ""}</span>
          </div>
          <div class="hl">
            ${today ? html`<div>H: ${temp(today.temperature)}  T: ${temp(today.templow)}</div>` : nothing}
            ${feels != null ? html`<div class="sub">Gefühlt ${temp(feels)}</div>` : nothing}
          </div>
        </div>
        ${this._config.forecast === "hours" ? this.renderHours(nowTemp, night) : this.renderPeriods(daily)}
        ${daily ? this.renderDays(daily.slice(1, 4)) : nothing}
        ${this.renderStats()}
        ${this._config.navigation_path && this._config.open_button ? html`<button class="open" @click=${() => this.open()}>
          <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>Wetter-App öffnen<ha-icon icon="mdi:chevron-right"></ha-icon></button>` : nothing}
      </div>
    `;
  }

  /** Index des Tages in der Tagesvorhersage zu Zeitpunkt t (für den Sprung ins Tagesdetail) */
  private dayOf(t: number): number {
    const day = new Date(t).setHours(0, 0, 0, 0);
    return Math.max(0, (this.daily.forecast ?? []).findIndex((d) => new Date(d.datetime).setHours(0, 0, 0, 0) === day));
  }

  private renderHours(nowTemp: number | undefined, night: boolean) {
    const fc = this.hourly.forecast;
    if (!fc) return html`<div class="loading">Lade Vorhersage …</div>`;
    const from = Date.now() - HOUR;
    const items = fc.filter((f) => new Date(f.datetime).getTime() > from).slice(0, this._cols);
    const blend = temperatureBlender(fc, nowTemp);
    return html`<div class="hours" style="grid-template-columns:repeat(${items.length}, minmax(0, 1fr))">
      ${items.map((f, i) => html`<div class="hr t-able" @click=${this.tap(`day:${this.dayOf(new Date(f.datetime).getTime())}:temp`)}>
        <div class="lab">${i === 0 ? "Jetzt" : hour(new Date(f.datetime)).replace(" Uhr", "")}</div>
        ${weatherIcon(f.condition, i === 0 ? night : f.is_daytime === false)}
        <div class="p">${prob(f.precipitation_probability)}</div>
        <div class="v">${temp(i === 0 ? nowTemp ?? f.temperature : blend(new Date(f.datetime).getTime(), f.temperature))}</div>
      </div>`)}
    </div>`;
  }

  /** Nächste vier Tagesabschnitte (Vormittag/Nachmittag/Abend/Nacht) statt einzelner Stunden */
  private renderPeriods(daily: ForecastItem[] | undefined) {
    const fc = this.hourly.forecast;
    if (!fc) return html`<div class="loading">Lade Vorhersage …</div>`;
    const list = periods(fc, Date.now(), daily);
    if (!list.length) return nothing;
    return html`<div class="hours" style="grid-template-columns:repeat(${list.length}, minmax(0, 1fr))">
      ${list.map((p) => html`<div class="hr t-able" @click=${this.tap(`day:${this.dayOf(p.start)}:temp`)}>
        <div class="lab">${p.label}<small>${p.sub ?? " "}</small></div>
        ${weatherIcon(p.condition, p.night)}
        <div class="p">${prob(p.prob)}</div>
        <div class="v">${p.lo == null ? "–" : Math.round(p.lo) === Math.round(p.hi!) ? temp(p.hi) : `${num(p.lo, 0)}–${temp(p.hi)}`}</div>
      </div>`)}
    </div>`;
  }

  private renderDays(days: ForecastItem[]) {
    if (!days.length) return nothing;
    return html`<div class="days">
      ${days.map((d, i) => html`<div class="day t-able" @click=${this.tap(`day:${i + 1}:temp`)}>
        <div class="top"><span class="wd">${weekday(new Date(d.datetime))}</span>${weatherIcon(d.condition)}
          <span class="p">${prob(d.precipitation_probability)}</span></div>
        <div class="tt"><span class="lo">${temp(d.templow)}</span> / <span class="hi">${temp(d.temperature)}</span></div>
      </div>`)}
    </div>`;
  }

  private renderStats() {
    const s = this._config.sensors ?? {};
    const m = this._m;
    const rate = stateNum(this.hass, s.rain_rate);
    const wind = stateNum(this.hass, s.wind_speed);
    const dir = stateNum(this.hass, s.wind_direction);
    const tiles = [
      s.rain_total && html`<div class="st t-able" @click=${this.tap("history:day")}><span>Regen heute</span><b>${num(m.rainToday, 1)} l/m²</b>
        <small>${rate ? `jetzt ${num(rate, 1)} l/m²/h` : "seit 0 Uhr"}</small></div>`,
      s.rain_total && html`<div class="st t-able" @click=${this.tap("history:7d")}><span>Regen 7 Tage</span><b>${num(m.rain7, 1)} l/m²</b>
        <small>seit ${weekday(new Date(Date.now() - 6 * DAY))} 0 Uhr</small></div>`,
      s.wind_speed && html`<div class="st t-able" @click=${this.tap("history:day")}><span>Wind</span><b>${num(wind, 0)} km/h ${dir != null ? compass(dir) : ""}</b>
        <small>${m.gustMax != null ? `Böen ${num(m.gustMax, 0)} km/h` : ""}</small></div>`,
    ].filter(Boolean);
    return tiles.length ? html`<div class="stats">${tiles}</div>` : nothing;
  }

  static styles = [
    cardStyles,
    css`
      :host { display: block; }
      .card { display: flex; flex-direction: column; gap: 10px; }
      .warn, .loading { color: var(--wa-text2); font-size: 14px; padding: 8px 0; }
      .now { display: flex; align-items: center; gap: 10px; }
      /* antippbare Bereiche: Zeiger + kurzes Abdunkeln beim Tippen */
      .taps .t-able { cursor: pointer; border-radius: 10px; -webkit-tap-highlight-color: transparent; }
      .taps .t-able:active { background: rgba(127, 127, 127, 0.18); }
      .taps .st.t-able:active, .taps .day.t-able:active { background: rgba(127, 127, 127, 0.22); }
      .now .ic .wicon { width: 48px; height: 48px; }
      .now .t { font-size: 40px; font-weight: 600; line-height: 1; }
      .info { display: flex; flex-direction: column; min-width: 0; flex: 1; }
      .info b { font-size: 16px; font-weight: 500; }
      .info span, .sub { font-size: 13px; color: var(--wa-text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .hl { text-align: right; font-size: 14px; font-weight: 500; white-space: nowrap; }

      .hours { display: grid; gap: 2px; border-top: 1px solid var(--wa-divider); padding-top: 8px; }
      .hr { display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0; }
      .hr .lab { font-size: 12px; color: var(--wa-text2); text-align: center; line-height: 1.25; white-space: nowrap; }
      .hr .lab small { display: block; font-size: 11px; opacity: 0.8; }
      .hr .wicon { width: 28px; height: 28px; }
      .p { font-size: 11px; color: var(--wa-rain); font-weight: 500; min-height: 13px; line-height: 13px; }
      .hr .v { font-size: 15px; font-weight: 500; }

      .days { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px; }
      .day {
        display: flex; flex-direction: column; align-items: center; gap: 2px; min-width: 0;
        padding: 6px 4px; border-radius: 10px; background: rgba(127, 127, 127, 0.1); font-size: 14px;
      }
      .day .top { display: flex; align-items: center; gap: 6px; }
      .day .wd { font-weight: 500; }
      .day .wicon { width: 24px; height: 24px; }
      .day .p { min-height: 0; white-space: nowrap; }
      .day .tt { color: var(--wa-text2); white-space: nowrap; }
      .day .hi { color: var(--wa-text); font-weight: 500; }

      .stats { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(0, 1fr); gap: 4px; }
      .st { display: flex; flex-direction: column; padding: 6px 6px 6px 8px; border-radius: 10px; background: rgba(127, 127, 127, 0.1); min-width: 0; }
      .st span, .st small { font-size: 12px; color: var(--wa-text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .st b { font-size: 15px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

      .open {
        display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;
        border: 0; border-radius: 10px; padding: 10px; cursor: pointer; font: inherit; font-size: 14px; font-weight: 500;
        color: var(--wa-accent); background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
      }
      .open ha-icon { --mdc-icon-size: 18px; }
    `,
  ];
}

const prob = (p: number | undefined) => ((p ?? 0) >= 20 ? `${Math.round(p!)} %` : "");

interface Period { start: number; label: string; sub?: string; condition?: string; night: boolean; prob?: number; lo?: number; hi?: number }

const BLOCKS: Record<number, string> = { 0: "Nacht", 6: "Vormittag", 12: "Nachmittag", 18: "Abend" };
// je weiter vorne, desto „wichtiger“ fürs Symbol eines Abschnitts
const SEVERITY = ["lightning-rainy", "lightning", "hail", "pouring", "snowy-rainy", "snowy", "rainy", "fog", "cloudy", "windy-variant", "partlycloudy", "windy", "sunny", "clear-night"];

/**
 * Stundenvorhersage → die nächsten vier 6-Stunden-Abschnitte ab dem laufenden.
 * Symbol: das „schlimmste“ Wetter, das mind. ein Drittel des Abschnitts ausmacht, sonst das häufigste.
 * Laufender Abschnitt nur ab jetzt; Temperatur als Spanne, Regen als höchste Wahrscheinlichkeit.
 */
function periods(fc: ForecastItem[], now: number, daily: ForecastItem[] | undefined): Period[] {
  const d = new Date(now);
  const first = new Date(d.getFullYear(), d.getMonth(), d.getDate(), Math.floor(d.getHours() / 6) * 6).getTime();
  const today = new Date(now).setHours(0, 0, 0, 0);
  const out: Period[] = [];
  for (let k = 0; k < 4; k++) {
    // über Zeitumstellungen hinweg sauber: Stunde per Date setzen statt +6 h rechnen
    const s = new Date(first); s.setHours(s.getHours() + k * 6);
    const e = new Date(first); e.setHours(e.getHours() + (k + 1) * 6);
    const from = k === 0 ? now - HOUR : s.getTime() - 1;
    const hrs = fc.filter((f) => { const t = new Date(f.datetime).getTime(); return t > from && t < e.getTime(); });
    if (!hrs.length) continue;
    const count = new Map<string, number>();
    hrs.forEach((h) => h.condition && count.set(h.condition, (count.get(h.condition) ?? 0) + 1));
    const severe = SEVERITY.find((c) => (count.get(c) ?? 0) >= Math.max(1, hrs.length / 3));
    const common = [...count.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    const temps = hrs.map((h) => h.temperature).filter((v): v is number => v != null);
    const h0 = s.getHours();
    // Nacht 0–6 Uhr gehört zum Abend davor → „morgen“ erst ab dem Vormittag des nächsten Tages
    const tomorrow = new Date(s).setHours(0, 0, 0, 0) > today && h0 !== 0;
    out.push({
      start: s.getTime(),
      label: BLOCKS[h0] ?? `${h0} Uhr`,
      sub: k === 0 ? "jetzt" : tomorrow ? "morgen" : undefined,
      condition: severe ?? common ?? daily?.[0]?.condition,
      night: hrs.filter((h) => h.is_daytime === false).length > hrs.length / 2,
      prob: Math.max(0, ...hrs.map((h) => h.precipitation_probability ?? 0)),
      lo: temps.length ? Math.min(...temps) : undefined,
      hi: temps.length ? Math.max(...temps) : undefined,
    });
  }
  return out;
}
