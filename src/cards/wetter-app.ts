import { LitElement, css, html, nothing, type PropertyValues } from "lit";
import { ForecastController } from "../data/forecast";
import { isPreset, type TimeRange } from "../data/range";
import { RangeController } from "../data/range-sync";
import { fetchStatistics } from "../data/statistics";
import { rangeStyles, renderRangeSelector } from "../components/range-selector";
import type { ForecastItem, HomeAssistant, StatResult, WetterConfig } from "../types";
import { background, conditionLabel } from "../util/conditions";
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
  };

  hass?: HomeAssistant;
  private _config!: WetterConfig;
  private _tab: Tab = "forecast";
  private _stats?: StatResult;
  private _statsError?: string;
  private _statsKey?: string;
  private _wide = false;
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
    if (!w) return html`<div class="app"><div class="warn">Entität ${this._config.weather} nicht gefunden.</div></div>`;

    const night = this._config.sun ? this.hass.states[this._config.sun]?.state === "below_horizon" : false;
    const s = this._config.sensors ?? {};
    const nowTemp = stateNum(this.hass, s.temperature) ?? w.attributes.temperature;
    const today = this.daily.forecast?.[0];

    return html`
      <div class="app ${this._wide ? "wide" : ""}" style="background:${background(w.state, night)}">
        <header>
          ${this._config.name ? html`<div class="place">${this._config.name}</div>` : nothing}
          <div class="now">${temp(nowTemp)}</div>
          <div class="cond">${conditionLabel(w.state)}</div>
          ${today ? html`<div class="hl">H: ${temp(today.temperature)}  T: ${temp(today.templow)}</div>` : nothing}
        </header>

        <nav class="tabs" role="tablist">
          ${(["forecast", "history"] as Tab[]).map((t) => html`
            <button role="tab" aria-selected=${this._tab === t} class=${this._tab === t ? "on" : ""}
              @click=${() => (this._tab = t)}>${t === "forecast" ? "Vorhersage" : "Historie"}</button>`)}
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
        <section class="tile">${this.renderHourly(nowTemp, night)}</section>
        <section class="tile">${this.renderDaily(nowTemp)}</section>
      </div>
    `;
  }

  private renderHourly(nowTemp: number | undefined, night: boolean) {
    const fc = this.hourly.forecast;
    if (!fc) return html`<div class="loading">Lade Stundenvorhersage …</div>`;
    const from = Date.now() - 3_600_000;
    const items = fc.filter((f) => new Date(f.datetime).getTime() > from).slice(0, 25);
    return html`
      <div class="tile-h">Stündlich</div>
      <div class="hours">
        ${items.map((f, i) => html`
          <div class="hr">
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
      <div class="tile-h">${days.length}-Tage-Vorhersage</div>
      ${days.map((d: ForecastItem, i) => {
        const l = d.templow ?? d.temperature ?? lo;
        const h = d.temperature ?? l;
        // Verlauf über die ganze Spur strecken → gleiche Temperatur = gleiche Farbe in jeder Zeile
        const fw = Math.max(0.5, pct(h) - pct(l));
        const grad = `background-size:${(100 / fw) * 100}% 100%;background-position:${fw >= 100 ? 0 : (pct(l) / (100 - fw)) * 100}% 0`;
        return html`
          <div class="day">
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
      <section class="tile">${renderRangeSelector(this.range)}</section>
      ${this._statsError ? html`<div class="warn">Statistik nicht verfügbar: ${this._statsError}</div>` : nothing}
      ${!st ? html`<div class="loading">Lade Historie …</div>` : html`
        <div class="grid">
          <section class="tile kv">
            <div class="tile-h">Temperatur</div>
            <div class="big">${temp(agg(s.temperature, "mean"), 1)}</div>
            <div class="sub">Ø · min ${temp(agg(s.temperature, "min"), 1)} · max ${temp(agg(s.temperature, "max"), 1)}</div>
          </section>
          <section class="tile kv">
            <div class="tile-h">Regen</div>
            <div class="big">${rain(rainSum)}</div>
            <div class="sub">Summe im Zeitraum</div>
          </section>
          <section class="tile kv">
            <div class="tile-h">Wind</div>
            <div class="big">${num(agg(s.wind_speed, "mean"))} km/h</div>
            <div class="sub">Ø · stärkste Böe ${num(agg(s.wind_gust, "max"))} km/h</div>
          </section>
          <section class="tile kv">
            <div class="tile-h">Luftfeuchte</div>
            <div class="big">${num(agg(s.humidity, "mean"), 0)} %</div>
            <div class="sub">Ø · min ${num(agg(s.humidity, "min"), 0)} % · max ${num(agg(s.humidity, "max"), 0)} %</div>
          </section>
        </div>
        <div class="hint">Diagramme folgen in Schritt 3.</div>
      `}
    `;
  }

  static styles = [
    rangeStyles,
    css`
      :host { display: block; }
      .app {
        color: #fff; border-radius: var(--ha-card-border-radius, 16px); padding: 20px 16px 24px;
        min-height: 100%; box-sizing: border-box;
        font-family: var(--ha-font-family-body, -apple-system, "Segoe UI", Roboto, sans-serif);
      }
      header { text-align: center; padding: 8px 0 16px; text-shadow: 0 1px 6px rgba(0, 0, 0, 0.2); }
      .place { font-size: 26px; font-weight: 500; }
      .now { font-size: 84px; font-weight: 200; line-height: 1; margin: 2px 0 4px 18px; }
      .cond { font-size: 19px; font-weight: 500; }
      .hl { font-size: 17px; font-weight: 500; white-space: pre; }

      .tabs {
        display: flex; margin: 0 auto 14px; max-width: 360px; padding: 3px; gap: 2px;
        background: rgba(0, 0, 0, 0.22); border-radius: 12px;
      }
      .tabs button {
        flex: 1; border: 0; background: none; color: inherit; font: inherit; font-size: 15px;
        padding: 8px; border-radius: 9px; cursor: pointer; opacity: 0.8;
      }
      .tabs button.on { background: rgba(255, 255, 255, 0.24); opacity: 1; font-weight: 600; }

      main { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      .wide .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .wide .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }

      /* Kein backdrop-filter: auf schwachen Geräten (Echo Show) der größte Ruckel-Verursacher */
      .tile { background: rgba(255, 255, 255, 0.13); border-radius: 18px; padding: 12px 14px; min-width: 0; }
      .tile-h {
        font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;
        opacity: 0.7; padding-bottom: 8px; margin-bottom: 4px; border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      }
      .wicon { width: 30px; height: 30px; display: block; }

      .hours { display: flex; overflow-x: auto; gap: 4px; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
      .hours::-webkit-scrollbar { display: none; }
      .hr { flex: 0 0 52px; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 0; }
      .hr .t { font-size: 13px; font-weight: 600; white-space: nowrap; }
      .hr .p { font-size: 11px; color: #7fd0ff; font-weight: 600; min-height: 13px; }
      .hr .v { font-size: 18px; font-weight: 500; }

      .day {
        display: grid; grid-template-columns: 52px 44px 36px 1fr 36px; align-items: center; gap: 8px;
        padding: 8px 0; border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      }
      .day:last-child { border-bottom: 0; }
      .wd { font-size: 17px; font-weight: 500; }
      .ic { display: flex; flex-direction: column; align-items: center; }
      .ic .p { font-size: 11px; color: #7fd0ff; font-weight: 600; }
      .lo { opacity: 0.6; text-align: right; font-size: 17px; }
      .hi { text-align: right; font-size: 17px; font-weight: 500; }
      .bar { position: relative; height: 5px; background: rgba(0, 0, 0, 0.25); border-radius: 3px; }
      .fill {
        position: absolute; top: 0; bottom: 0; border-radius: 3px;
        background: linear-gradient(90deg, #5ac8fa, #8fd694, #ffd54a, #ff9f43);
      }
      .dot {
        position: absolute; top: 50%; width: 9px; height: 9px; margin: -4.5px 0 0 -4.5px;
        background: #fff; border: 2px solid rgba(0, 0, 0, 0.35); border-radius: 50%; box-sizing: border-box;
      }

      .kv .big { font-size: 30px; font-weight: 500; margin-top: 4px; }
      .kv .sub { font-size: 13px; opacity: 0.75; }
      .loading, .hint { opacity: 0.7; text-align: center; padding: 16px; font-size: 14px; }
      .warn { background: rgba(255, 120, 80, 0.25); border-radius: 12px; padding: 10px 14px; font-size: 14px; }
    `,
  ];
}
