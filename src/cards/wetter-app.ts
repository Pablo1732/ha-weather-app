import { LitElement, css, html, nothing, type PropertyValues } from "lit";
import { ForecastController } from "../data/forecast";
import { isPreset, type TimeRange } from "../data/range";
import { RangeController } from "../data/range-sync";
import { fetchStatistics } from "../data/statistics";
import { rangeStyles, renderRangeSelector } from "../components/range-selector";
import { cardStyles, head } from "../components/styles";
import { renderTiles, tileStyles } from "../components/tiles";
import type { Metric } from "../components/day-detail";
import type { ForecastItem, HomeAssistant, StatResult, WetterConfig } from "../types";
import { conditionLabel, tint } from "../util/conditions";
import { hour, num, rain, stateNum, temp, weekday } from "../util/format";
import { weatherIcon } from "../util/icons";

type Tab = "forecast" | "history";

export class WetterApp extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _tab: { state: true },
    _stats: { state: true },
    _statsError: { state: true },
    _wide: { state: true },
    _detail: { state: true },
    _metric: { state: true },
    _recent: { state: true },
  };

  hass?: HomeAssistant;
  private _config!: WetterConfig;
  private _tab: Tab = "forecast";
  private _stats?: StatResult;
  private _statsError?: string;
  private _statsKey?: string;
  private _wide = false;
  /** geöffnetes Tagesdetail (Index in der Tagesvorhersage) */
  private _detail?: number;
  private _metric: Metric = "temp";
  private _recent?: StatResult;
  private _recentKey?: string;
  private _ro?: ResizeObserver;

  private hourly = new ForecastController(this, "hourly", () => this._config?.weather);
  private daily = new ForecastController(this, "daily", () => this._config?.weather);
  private range = new RangeController(
    this,
    () => this._config?.sync_group ?? "default",
    () => (isPreset(this._config?.default_range) ? this._config.default_range : "7d"),
  );

  setConfig(config: WetterConfig): void {
    if (!config?.weather) throw new Error("`weather:` fehlt (z. B. weather.weather_fusion_ai_kresslingweg)");
    this._config = { ...config, sensors: { ...config.sensors } };
  }

  static getStubConfig(hass: HomeAssistant): Partial<WetterConfig> {
    return { weather: Object.keys(hass.states).find((id) => id.startsWith("weather.")) ?? "" };
  }

  getCardSize(): number {
    return 12;
  }

  getGridOptions() {
    return { columns: "full", rows: "auto" };
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Breite der Karte statt des Viewports → passt auch in Sections/Spalten
    this._ro ??= new ResizeObserver((e) => {
      const wide = e[0].contentRect.width >= 820;
      if (wide !== this._wide) this._wide = wide;
    });
    this._ro.observe(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._ro?.disconnect();
  }

  // Nur neu rendern, wenn sich eine relevante Entität geändert hat — hass ändert sich bei jedem State im Haus.
  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size > 1 || !changed.has("hass")) return true;
    const old = changed.get("hass") as HomeAssistant | undefined;
    if (!old || !this.hass || !this._config) return true;
    return this.watchedIds().some((id) => old.states[id] !== this.hass!.states[id]);
  }

  private watchedIds(): string[] {
    const c = this._config;
    return [c.weather, c.sun, c.moon, ...Object.values(c.sensors ?? {})].filter(Boolean) as string[];
  }

  protected updated(): void {
    if (this._tab === "history") this.loadStats(this.range.range);
    else this.loadRecent();
  }

  /** Letzte 24 h stündlich: Regen gemessen + Luftdruck-Tendenz für die Kacheln. */
  private loadRecent(): void {
    const s = this._config.sensors ?? {};
    const ids = [s.rain_total, s.pressure].filter(Boolean) as string[];
    if (!this.hass || !ids.length) return;
    const end = Math.ceil(Date.now() / 300_000) * 300_000;
    const key = String(end);
    if (key === this._recentKey) return;
    this._recentKey = key;
    fetchStatistics(this.hass, {
      ids, start: new Date(end - 86_400_000), end: new Date(end), period: "hour", types: ["mean", "change"],
    }).then(
      (r) => key === this._recentKey && (this._recent = r),
      () => (this._recentKey = undefined),
    );
  }

  private openDetail(index: number, metric: Metric = this._metric): void {
    this._metric = metric;
    this._detail = index;
  }

  private async loadStats(r: TimeRange): Promise<void> {
    const s = this._config.sensors ?? {};
    const key = `${r.start.getTime()}|${r.end.getTime()}|${r.period}`;
    if (!this.hass || key === this._statsKey) return;
    this._statsKey = key;
    this._statsError = undefined;
    try {
      const [means, rainStats] = await Promise.all([
        fetchStatistics(this.hass, {
          ids: [s.temperature, s.wind_speed, s.wind_gust, s.humidity, s.pressure].filter(Boolean) as string[],
          start: r.start, end: r.end, period: r.period, types: ["mean", "min", "max"],
        }),
        fetchStatistics(this.hass, {
          ids: s.rain_total ? [s.rain_total] : [],
          start: r.start, end: r.end, period: r.period, types: ["change"],
        }),
      ]);
      if (key === this._statsKey) this._stats = { ...means, ...rainStats };
    } catch (err: any) {
      if (key === this._statsKey) {
        this._statsError = err?.message ?? String(err);
        this._statsKey = undefined;
      }
    }
  }

  protected render() {
    if (!this._config || !this.hass) return nothing;
    const w = this.hass.states[this._config.weather];
    if (!w) return html`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;

    const night = this._config.sun ? this.hass.states[this._config.sun]?.state === "below_horizon" : false;
    const s = this._config.sensors ?? {};
    const nowTemp = stateNum(this.hass, s.temperature) ?? w.attributes.temperature;
    const today = this.daily.forecast?.[0];

    return html`
      <div class="app ${this._wide ? "wide" : ""} ${this.hass.themes?.darkMode ? "dark" : ""} ${this._config.layout === "page" ? "page" : ""}"
        style="--wa-tint:${tint(w.state, night)}">
        <header>
          ${this._config.name ? html`<div class="place">${this._config.name}</div>` : nothing}
          <div class="now">${temp(nowTemp)}</div>
          <div class="cond">${conditionLabel(w.state)}</div>
          ${today ? html`<div class="hl">H: ${temp(today.temperature)}  T: ${temp(today.templow)}</div>` : nothing}
        </header>

        <nav class="tabs" role="tablist">
          ${(["forecast", "history"] as Tab[]).map((t) => html`
            <button role="tab" aria-selected=${this._tab === t} class=${this._tab === t ? "on" : ""}
              @click=${() => (this._tab = t)}>
              <ha-icon icon=${t === "forecast" ? "mdi:calendar-arrow-right" : "mdi:chart-line"}></ha-icon>
              ${t === "forecast" ? "Vorhersage" : "Historie"}
            </button>`)}
        </nav>

        <main>${this._tab === "forecast" ? this.renderForecast(nowTemp, night) : this.renderHistory()}</main>
      </div>
    `;
  }

  private renderForecast(nowTemp: number | undefined, night: boolean) {
    const err = this.hourly.error ?? this.daily.error;
    return html`
      ${err ? html`<div class="warn">Vorhersage nicht verfügbar: ${err}</div>` : nothing}
      <div class="cols">
        <section class="card">${this.renderHourly(nowTemp, night)}</section>
        <section class="card">${this.renderDaily(nowTemp)}</section>
      </div>
      ${renderTiles({ hass: this.hass!, config: this._config, hourly: this.hourly.forecast, recent: this._recent })}
      ${this._detail != null && this.daily.forecast
        ? html`<wetter-app-day-detail .hass=${this.hass} .config=${this._config} .hourly=${this.hourly.forecast ?? []}
            .daily=${this.daily.forecast} .index=${this._detail} .metric=${this._metric}
            @close=${() => (this._detail = undefined)}
            @select=${(e: CustomEvent) => (this._detail = e.detail.index)}
            @metric=${(e: CustomEvent) => (this._metric = e.detail.metric)}></wetter-app-day-detail>`
        : nothing}
    `;
  }

  private renderHourly(nowTemp: number | undefined, night: boolean) {
    const fc = this.hourly.forecast;
    if (!fc) return html`<div class="loading">Lade Stundenvorhersage …</div>`;
    const from = Date.now() - 3_600_000;
    const items = fc.filter((f) => new Date(f.datetime).getTime() > from).slice(0, 25);
    return html`
      ${head("mdi:clock-outline", "Stündlich")}
      <div class="hours">
        ${items.map((f, i) => html`
          <div class="hr" @click=${() => this.openDetail(0, "temp")}>
            <div class="t">${i === 0 ? "Jetzt" : hour(new Date(f.datetime))}</div>
            ${weatherIcon(f.condition, i === 0 ? night : f.is_daytime === false)}
            <div class="p">${(f.precipitation_probability ?? 0) >= 20 ? `${Math.round(f.precipitation_probability!)} %` : ""}</div>
            <div class="v">${temp(i === 0 ? nowTemp ?? f.temperature : f.temperature)}</div>
          </div>`)}
      </div>
    `;
  }

  private renderDaily(nowTemp: number | undefined) {
    const fc = this.daily.forecast;
    if (!fc) return html`<div class="loading">Lade Tagesvorhersage …</div>`;
    const days = fc.slice(0, 10);
    const lo = Math.min(...days.map((d) => d.templow ?? d.temperature ?? 99));
    const hi = Math.max(...days.map((d) => d.temperature ?? -99));
    const span = Math.max(1, hi - lo);
    const pct = (v: number) => ((v - lo) / span) * 100;
    return html`
      ${head("mdi:calendar-week", `${days.length}-Tage-Vorhersage`)}
      ${days.map((d: ForecastItem, i) => {
        const l = d.templow ?? d.temperature ?? lo;
        const h = d.temperature ?? l;
        // Verlauf über die ganze Spur strecken → gleiche Temperatur = gleiche Farbe in jeder Zeile
        const fw = Math.max(0.5, pct(h) - pct(l));
        const grad = `background-size:${(100 / fw) * 100}% 100%;background-position:${fw >= 100 ? 0 : (pct(l) / (100 - fw)) * 100}% 0`;
        return html`
          <div class="day" role="button" tabindex="0" @click=${() => this.openDetail(i)}
            @keydown=${(e: KeyboardEvent) => e.key === "Enter" && this.openDetail(i)}>
            <div class="wd">${weekday(new Date(d.datetime))}</div>
            <div class="ic">
              ${weatherIcon(d.condition)}
              ${(d.precipitation_probability ?? 0) >= 20 ? html`<span class="p">${Math.round(d.precipitation_probability!)} %</span>` : nothing}
            </div>
            <div class="lo">${temp(l)}</div>
            <div class="bar">
              <div class="fill" style="left:${pct(l)}%;right:${100 - pct(h)}%;${grad}"></div>
              ${i === 0 && nowTemp != null
                ? html`<div class="dot" style="left:${Math.min(100, Math.max(0, pct(nowTemp)))}%"></div>`
                : nothing}
            </div>
            <div class="hi">${temp(h)}</div>
          </div>`;
      })}
    `;
  }

  private renderHistory() {
    const s = this._config.sensors ?? {};
    const st = this._stats;
    const agg = (id: string | undefined, f: "min" | "max" | "mean") => {
      const rows = id ? st?.[id] : undefined;
      const vals = rows?.map((r) => r[f]).filter((v): v is number => v != null) ?? [];
      if (!vals.length) return undefined;
      if (f === "min") return Math.min(...vals);
      if (f === "max") return Math.max(...vals);
      return vals.reduce((a, b) => a + b, 0) / vals.length;
    };
    const rainSum = s.rain_total
      ? st?.[s.rain_total]?.reduce((a, r) => a + (r.change ?? 0), 0)
      : undefined;

    return html`
      <section class="card">${renderRangeSelector(this.range)}</section>
      ${this._statsError ? html`<div class="warn">Statistik nicht verfügbar: ${this._statsError}</div>` : nothing}
      ${!st ? html`<div class="loading">Lade Historie …</div>` : html`
        <div class="grid">
          <section class="card kv">
            ${head("mdi:thermometer", "Temperatur")}
            <div class="big">${temp(agg(s.temperature, "mean"), 1)}</div>
            <div class="sub">Ø · min ${temp(agg(s.temperature, "min"), 1)} · max ${temp(agg(s.temperature, "max"), 1)}</div>
          </section>
          <section class="card kv">
            ${head("mdi:weather-pouring", "Regen")}
            <div class="big">${rain(rainSum)}</div>
            <div class="sub">Summe im Zeitraum</div>
          </section>
          <section class="card kv">
            ${head("mdi:weather-windy", "Wind")}
            <div class="big">${num(agg(s.wind_speed, "mean"))} km/h</div>
            <div class="sub">Ø · stärkste Böe ${num(agg(s.wind_gust, "max"))} km/h</div>
          </section>
          <section class="card kv">
            ${head("mdi:water-percent", "Luftfeuchte")}
            <div class="big">${num(agg(s.humidity, "mean"), 0)} %</div>
            <div class="sub">Ø · min ${num(agg(s.humidity, "min"), 0)} % · max ${num(agg(s.humidity, "max"), 0)} %</div>
          </section>
        </div>
        <div class="hint">Diagramme folgen in Schritt 3.</div>
      `}
    `;
  }

  static styles = [
    cardStyles,
    rangeStyles,
    tileStyles,
    css`
      :host { display: block; }
      /* Dezenter Wetter-Farbton oben, läuft in den Theme-Hintergrund aus */
      .app {
        box-sizing: border-box; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px;
        border-radius: var(--ha-card-border-radius, 12px);
        background: linear-gradient(180deg, var(--wa-tint) 0, transparent 520px), var(--primary-background-color, #111);
      }
      .app > * { width: 100%; max-width: 1100px; margin-left: auto; margin-right: auto; box-sizing: border-box; }
      /* Ganzseiten-Modus (Panel-Ansicht): ganze Fläche, keine Rundung */
      /* Panel-Ansicht setzt --ha-card-border-radius: 0 → innere Karten bekommen den HA-Standardradius */
      .app.page {
        border-radius: 0; min-height: calc(100vh - var(--header-height, 56px)); padding: 20px 10px;
        --wa-radius: var(--ha-border-radius-lg, 12px);
      }

      header { text-align: center; padding: 8px 0 12px; }
      .place { font-size: 28px; font-weight: 500; }
      .now { font-size: 88px; font-weight: 600; line-height: 1; margin: 2px 0 4px 20px; }
      .cond { font-size: 20px; font-weight: 500; }
      .hl { font-size: 17px; font-weight: 500; white-space: pre; }

      /* Tabs im Stil der HA-Oberfläche: Text + Unterstrich in Primärfarbe */
      .tabs { display: flex; border-bottom: 1px solid var(--wa-divider); }
      .tabs button {
        flex: 1; display: flex; align-items: center; justify-content: center; gap: 8px;
        border: 0; background: none; color: var(--wa-text2); font: inherit; font-size: 14px; font-weight: 500;
        padding: 12px 8px; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px;
      }
      .tabs button ha-icon { --mdc-icon-size: 20px; }
      .tabs button.on { color: var(--wa-accent); border-bottom-color: var(--wa-accent); }

      main { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      .wide .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .wide .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }

      .hours { display: flex; overflow-x: auto; gap: 4px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      .hours::-webkit-scrollbar { display: none; }
      .hr { flex: 1 0 54px; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 0; }
      .hr .t { font-size: 12px; color: var(--wa-text2); white-space: nowrap; }
      .hr .wicon { width: 30px; height: 30px; }
      .hr .p { font-size: 11px; color: var(--wa-rain); font-weight: 500; min-height: 13px; }
      .hr .v { font-size: 16px; font-weight: 500; }

      .day {
        display: grid; grid-template-columns: 48px 40px 34px 1fr 34px; align-items: center; gap: 8px;
        padding: 6px 0; border-bottom: 1px solid var(--wa-divider);
      }
      .day:last-child { border-bottom: 0; }
      .day, .hr { cursor: pointer; border-radius: 8px; }
      .day:hover, .hr:hover { background: rgba(127, 127, 127, 0.08); }
      .wd { font-size: 15px; font-weight: 500; }
      .ic { display: flex; flex-direction: column; align-items: center; }
      .ic .wicon { width: 28px; height: 28px; }
      .ic .p { font-size: 11px; color: var(--wa-rain); font-weight: 500; }
      .lo { color: var(--wa-text2); text-align: right; font-size: 15px; }
      .hi { text-align: right; font-size: 15px; font-weight: 500; }
      .bar { position: relative; height: 5px; background: var(--wa-track); border-radius: 3px; }
      .fill {
        position: absolute; top: 0; bottom: 0; border-radius: 3px;
        background: linear-gradient(90deg, #42a5f5, #66bb6a, #ffca28, #ff7043);
      }
      .dot {
        position: absolute; top: 50%; width: 9px; height: 9px; margin: -4.5px 0 0 -4.5px; box-sizing: border-box;
        background: var(--wa-text); border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
        border-radius: 50%;
      }

      .kv .big { font-size: 26px; font-weight: 400; margin-top: 4px; }
      .kv .sub { font-size: 13px; color: var(--wa-text2); }
    `,
  ];
}
