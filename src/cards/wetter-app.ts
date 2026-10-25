import { LitElement, css, html, nothing, type PropertyValues } from "lit";
import { ForecastController } from "../data/forecast";
import { fetchStatistics } from "../data/statistics";
import { cardStyles, head } from "../components/styles";
import { renderTiles, tileStyles } from "../components/tiles";
import type { Metric } from "../components/day-detail";
import type { ForecastItem, HomeAssistant, StatResult, WetterConfig } from "../types";
import { conditionLabel, tint } from "../util/conditions";
import { hour, stateNum, temp, weekday } from "../util/format";
import { weatherIcon } from "../util/icons";
import { temperatureBlender } from "../util/blend";

type Tab = "forecast" | "history";

export class WetterApp extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _tab: { state: true },
    _wide: { state: true },
    _detail: { state: true },
    _metric: { state: true },
    _recent: { state: true },
  };

  hass?: HomeAssistant;
  private _config!: WetterConfig;
  private _tab: Tab = "forecast";
  private _wide = false;
  /** geöffnetes Tagesdetail (Index in der Tagesvorhersage) */
  private _detail?: number;
  private _metric: Metric = "temp";
  private _recent?: StatResult;
  private _recentKey?: string;
  private _ro?: ResizeObserver;

  private hourly = new ForecastController(this, "hourly", () => this._config?.weather);
  private daily = new ForecastController(this, "daily", () => this._config?.weather);

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
    this.syncDetail();
  }

  /**
   * Tagesdetail hängt direkt an <body>: innerhalb der Karte würde es von HA-Containern (Ebenen, Transforms)
   * eingesperrt — am iPhone unter der HA-Kopfleiste, am PC nur über dem Kartenbereich statt mittig.
   */
  private _detailEl?: HTMLElement & Record<string, unknown>;
  private syncDetail(): void {
    const open = this.isConnected && this._tab === "forecast" && this._detail != null && !!this.daily.forecast;
    if (!open) {
      this._detailEl?.remove();
      this._detailEl = undefined;
      return;
    }
    let el = this._detailEl;
    if (!el) {
      el = document.createElement("wetter-app-day-detail") as HTMLElement & Record<string, unknown>;
      el.addEventListener("close", () => (this._detail = undefined));
      el.addEventListener("select", (e) => (this._detail = (e as CustomEvent).detail.index));
      el.addEventListener("metric", (e) => (this._metric = (e as CustomEvent).detail.metric));
      document.body.appendChild(el);
      this._detailEl = el;
    }
    Object.assign(el, {
      hass: this.hass, config: this._config, hourly: this.hourly.forecast ?? [],
      daily: this.dailyForecast(stateNum(this.hass, this._config.sensors?.temperature) ?? this.hass?.states[this._config.weather]?.attributes.temperature), index: this._detail, metric: this._metric,
    });
    el.classList.toggle("dark", !!this.hass?.themes?.darkMode);
  }

  // Nur neu rendern, wenn sich eine relevante Entität geändert hat — hass ändert sich bei jedem State im Haus.
  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size > 1 || !changed.has("hass")) return true;
    const old = changed.get("hass") as HomeAssistant | undefined;
    if (!old || !this.hass || !this._config) return true;
    if (old.themes?.darkMode !== this.hass.themes?.darkMode) return true;
    return this.watchedIds().some((id) => old.states[id] !== this.hass!.states[id]);
  }

  private watchedIds(): string[] {
    const c = this._config;
    return [c.weather, c.sun, c.moon, ...Object.values(c.sensors ?? {})].filter(Boolean) as string[];
  }

  protected updated(): void {
    if (this._tab === "forecast") this.loadRecent();
    this.syncDetail();
  }

  /** Letzte 24 h stündlich: Regen gemessen + Luftdruck-Tendenz für die Kacheln. */
  private loadRecent(): void {
    const s = this._config.sensors ?? {};
    const ids = [s.rain_total, s.pressure, s.temperature].filter(Boolean) as string[];
    if (!this.hass || !ids.length) return;
    const end = Math.ceil(Date.now() / 300_000) * 300_000;
    const key = String(end);
    if (key === this._recentKey) return;
    this._recentKey = key;
    fetchStatistics(this.hass, {
      ids, start: new Date(end - 86_400_000), end: new Date(end), period: "hour", types: ["mean", "min", "max", "change"],
    }).then(
      (r) => key === this._recentKey && (this._recent = r),
      () => (this._recentKey = undefined),
    );
  }

  /**
   * Tagesvorhersage, heute aber mindestens so tief/hoch wie heute schon gemessen
   * (die Vorhersage für heute kennt die Nacht oft nicht mehr).
   */
  private dailyForecast(nowTemp: number | undefined): ForecastItem[] | undefined {
    const fc = this.daily.forecast;
    const d0 = fc?.[0];
    if (!d0) return fc;
    const midnight = new Date().setHours(0, 0, 0, 0);
    if (new Date(d0.datetime).setHours(0, 0, 0, 0) !== midnight) return fc;
    const id = this._config.sensors?.temperature;
    const pts = (id && this._recent?.[id]) || [];
    const seen = [nowTemp, ...pts.filter((p) => p.end > midnight).flatMap((p) => [p.min, p.max])]
      .filter((v): v is number => typeof v === "number" && isFinite(v));
    if (!seen.length) return fc;
    const lo = Math.min(...seen, d0.templow ?? Infinity);
    const hi = Math.max(...seen, d0.temperature ?? -Infinity);
    if (lo === d0.templow && hi === d0.temperature) return fc;
    return [{ ...d0, templow: lo, temperature: hi }, ...fc!.slice(1)];
  }

  private openDetail(index: number, metric: Metric = this._metric): void {
    this._metric = metric;
    this._detail = index;
  }

  protected render() {
    if (!this._config || !this.hass) return nothing;
    const w = this.hass.states[this._config.weather];
    if (!w) return html`<div class="warn">Entität ${this._config.weather} nicht gefunden.</div>`;

    const night = this._config.sun ? this.hass.states[this._config.sun]?.state === "below_horizon" : false;
    const s = this._config.sensors ?? {};
    const nowTemp = stateNum(this.hass, s.temperature) ?? w.attributes.temperature;
    const daily = this.dailyForecast(nowTemp);
    const today = daily?.[0];
    const dark = !!this.hass.themes?.darkMode;

    return html`
      <div class="app ${this._wide ? "wide" : ""} ${dark ? "dark" : ""} ${this._config.layout === "page" ? "page" : ""}"
        style="--wa-tint:${dark ? tint(w.state, night) : tint(w.state, night, 0.62)};--wa-tint2:${dark ? "transparent" : tint(w.state, night, 0.1)}">
        ${this._config.animations !== false ? html`<wetter-app-sky class="sky" .condition=${w.state} .night=${night}></wetter-app-sky>` : nothing}
        <header>
          ${this._config.name ? html`<div class="place">${this._config.name}</div>` : nothing}
          <div class="now">${temp(nowTemp)}</div>
          <div class="cond">${conditionLabel(w.state)}</div>
          ${today ? html`<div class="hl">H: ${temp(today.temperature)}  T: ${temp(today.templow)}</div>` : nothing}
        </header>

        <nav class="tabs" role="tablist">
          ${(["forecast", "history"] as Tab[]).map((t) => html`
            <button role="tab" aria-selected=${this._tab === t} class=${this._tab === t ? "on" : ""}
              @click=${() => { this._tab = t; this._detail = undefined; }}>
              <ha-icon icon=${t === "forecast" ? "mdi:calendar-arrow-right" : "mdi:chart-line"}></ha-icon>
              ${t === "forecast" ? "Vorhersage" : "Historie"}
            </button>`)}
        </nav>

        <main>${this._tab === "forecast" ? this.renderForecast(daily, nowTemp, night) : html`<wetter-app-history .hass=${this.hass} .config=${this._config} .wide=${this._wide}></wetter-app-history>`}</main>
      </div>
    `;
  }

  private renderForecast(daily: ForecastItem[] | undefined, nowTemp: number | undefined, night: boolean) {
    const err = this.hourly.error ?? this.daily.error;
    return html`
      ${err ? html`<div class="warn">Vorhersage nicht verfügbar: ${err}</div>` : nothing}
      <div class="cols">
        <div class="left">
          <section class="card hourly">${this.renderHourly(nowTemp, night)}</section>
          ${renderTiles({ hass: this.hass!, config: this._config, hourly: this.hourly.forecast, recent: this._recent })}
        </div>
        <section class="card daily">${this.renderDaily(daily, nowTemp)}</section>
      </div>
    `;
  }

  private renderHourly(nowTemp: number | undefined, night: boolean) {
    const fc = this.hourly.forecast;
    if (!fc) return html`<div class="loading">Lade Stundenvorhersage …</div>`;
    const from = Date.now() - 3_600_000;
    const items = fc.filter((f) => new Date(f.datetime).getTime() > from).slice(0, 25);
    const blend = temperatureBlender(fc, nowTemp);
    return html`
      ${head("mdi:clock-outline", "Stündlich")}
      <div class="hours">
        ${items.map((f, i) => html`
          <div class="hr" @click=${() => this.openDetail(0, "temp")}>
            <div class="t">${i === 0 ? "Jetzt" : hour(new Date(f.datetime))}</div>
            ${weatherIcon(f.condition, i === 0 ? night : f.is_daytime === false)}
            <div class="p">${(f.precipitation_probability ?? 0) >= 20 ? `${Math.round(f.precipitation_probability!)} %` : ""}</div>
            <div class="v">${temp(i === 0 ? nowTemp ?? f.temperature : blend(new Date(f.datetime).getTime(), f.temperature))}</div>
          </div>`)}
      </div>
    `;
  }

  private renderDaily(fc: ForecastItem[] | undefined, nowTemp: number | undefined) {
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

  static styles = [
    cardStyles,
    tileStyles,
    css`
      :host { display: block; }
      /* Dezenter Wetter-Farbton oben, läuft in den Theme-Hintergrund aus */
      .app {
        box-sizing: border-box; padding: 16px 12px; display: flex; flex-direction: column; gap: 12px;
        border-radius: var(--ha-card-border-radius, 12px);
        /* unten wieder in den reinen Theme-Hintergrund → keine Kante zum HA-Hintergrund darunter */
        background: linear-gradient(180deg, var(--wa-tint) 0, var(--wa-tint2, transparent) 520px, var(--wa-tint2, transparent) calc(100% - 320px), transparent 100%),
          var(--primary-background-color, #111);
      }
      .app { position: relative; --wa-card-shadow: 0 1px 4px rgba(0, 0, 0, 0.08); /* Helles Theme: weiße Wolken/Flocken mit feiner Kante statt Grau — Grau verschwindet auf hellem Grund */
        --wa-drop: rgba(30, 60, 100, 0.45); --wa-flake: #fff; --wa-flake-edge: rgba(40, 55, 80, 0.35); --wa-cloudbg: rgba(255, 255, 255, 0.85); --wa-rays: 0.55;
        --wa-moonimg: brightness(1.35) contrast(0.95) saturate(0.7) drop-shadow(0 1px 3px rgba(0, 0, 0, 0.25)); }
      .app.dark { --wa-card-shadow: none; --wa-drop: rgba(255, 255, 255, 0.3); --wa-flake: rgba(255, 255, 255, 0.75); --wa-cloudbg: rgba(255, 255, 255, 0.11); --wa-flake-edge: transparent; --wa-rays: 0.22; --wa-moonimg: none; }
      .app > header, .app > nav, .app > main { position: relative; z-index: 1; }
      .app > :not(.sky) { width: 100%; max-width: 1200px; margin-left: auto; margin-right: auto; box-sizing: border-box; }
      /* Ganzseiten-Modus (Panel-Ansicht): ganze Fläche, keine Rundung */
      /* Panel-Ansicht setzt --ha-card-border-radius: 0 → innere Karten bekommen den HA-Standardradius */
      .app.page {
        border-radius: 0; min-height: calc(100vh - var(--header-height, 56px)); padding: 20px 10px;
        /* direkt die HA-Variable setzen → gilt auch in Historie/Detail (eigene Shadow-Roots) */
        --ha-card-border-radius: var(--ha-border-radius-lg, 12px);
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
      .cols { display: grid; gap: 12px; }
      /* Handy: Stündlich, 7 Tage, Kacheln untereinander. PC: links Stündlich + Kacheln, rechts 7 Tage */
      .left { display: contents; }
      .hourly { order: 0; } .daily { order: 1; } .cols .tiles { order: 2; }
      .wide .cols { grid-template-columns: minmax(0, 3fr) minmax(300px, 2fr); align-items: start; }
      .wide .left { display: flex; flex-direction: column; gap: 12px; }
      .wide .tiles { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .wide .tile.moont { grid-column: auto; }
      .wide .moont .moon { flex-direction: column-reverse; align-items: stretch; }
      .wide .moont .moonimg { align-self: center; }

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
      .day, .hr { cursor: pointer; }
      .hr { border-radius: 8px; }
      .day:hover, .hr:hover { background: rgba(127, 127, 127, 0.08); }
      .wd { font-size: 15px; font-weight: 500; }
      /* feste Höhe → alle Tageszeilen gleich hoch, egal ob Regen-% darunter steht */
      /* feste Höhe → gleich hohe Zeilen; ohne % sitzt das Icon mittig */
      .ic { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 42px; }
      .ic .wicon { width: 28px; height: 28px; }
      .ic .p { font-size: 11px; line-height: 13px; height: 13px; color: var(--wa-rain); font-weight: 500; }
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

    `,
  ];
}
