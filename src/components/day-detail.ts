import { LitElement, css, html, nothing, type PropertyValues } from "lit";
import { icon } from "../util/mdi";
import { fetchStatistics, fetchUntilNow } from "../data/statistics";
import type { ForecastItem, HomeAssistant, StatResult, StatType, WetterConfig } from "../types";
import { conditionLabel } from "../util/conditions";
import { compass, num, rain, stateNum, temp } from "../util/format";
import { weatherIcon } from "../util/icons";
import { temperatureBlender } from "../util/blend";
import type { ChartMarker, ChartSeries, ChartTick } from "./chart";
import { cardStyles, legend, legendStyles, type LegendItem } from "./styles";

export type Metric = "temp" | "rain" | "wind";

const METRICS: { id: Metric; label: string; icon: string }[] = [
  { id: "temp", label: "Temperatur", icon: "mdi:thermometer" },
  { id: "rain", label: "Niederschlag", icon: "mdi:weather-pouring" },
  { id: "wind", label: "Wind", icon: "mdi:weather-windy" },
];

const HOUR = 3_600_000;
const WD = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

function dayStart(iso: string): number {
  const d = new Date(iso);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}

/** Zuletzt angezeigter Tag eines offenen Tagesdetails (Index + Tagesbeginn) */
export interface ShownDay { index: number; day: number }

/**
 * Welcher Index soll das offene Tagesdetail jetzt zeigen?
 * Verschiebt sich die Tagesvorhersage (um Mitternacht fällt gestern raus), bleibt derselbe Tag offen;
 * gibt es den Tag bzw. Index nicht mehr → undefined (schließen, statt leer den Bildschirm zu sperren).
 */
export function keepDay(daily: ForecastItem[], index: number, shown?: ShownDay): number | undefined {
  if (shown && shown.index === index) {
    const i = daily.findIndex((d) => dayStart(d.datetime) === shown.day);
    return i >= 0 ? i : undefined;
  }
  return index >= 0 && index < daily.length ? index : undefined;
}

export const shownDay = (daily: ForecastItem[], index: number): ShownDay => ({ index, day: dayStart(daily[index].datetime) });

/** Linienstil: gemessen durchgezogen (nur heute), Vorhersage gestrichelt */
const lineStyles = (today: boolean): LegendItem[] => [
  today && { color: "var(--wa-text2)", label: "gemessen", kind: "line" as const },
  { color: "var(--wa-text2)", label: "Vorhersage", kind: "dash" as const },
].filter(Boolean) as LegendItem[];

/**
 * Tagesdetail als Vollbild-Ebene (mobil) bzw. Dialog (Desktop):
 * Tagesleiste, Zusammenfassung und Stundendiagramm für Temperatur, Niederschlag oder Wind.
 * Heute: vergangene Stunden aus der Stationsstatistik (durchgezogen), Vorhersage immer gestrichelt.
 */
export class WetterDayDetail extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    hourly: { attribute: false },
    daily: { attribute: false },
    index: { type: Number },
    metric: { type: String },
    _past: { state: true },
  };

  hass?: HomeAssistant;
  config!: WetterConfig;
  hourly: ForecastItem[] = [];
  daily: ForecastItem[] = [];
  index = 0;
  metric: Metric = "temp";
  private _past?: StatResult;
  /** 5-Minuten-Werte der laufenden Stunde (nur heute) — für Summen/Maxima, nicht fürs Stunden-Diagramm */
  private _pastNow?: StatResult;
  private _pastKey?: string;

  private readonly onKey = (e: KeyboardEvent) => e.key === "Escape" && this.close();
  // Drehen/Fenstergröße → Diagrammhöhe neu berechnen (chartHeight hängt an der Fensterhöhe)
  private readonly onResize = () => this.requestUpdate();

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("resize", this.onResize);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("resize", this.onResize);
  }

  private close(): void {
    this.dispatchEvent(new CustomEvent("close"));
  }

  protected willUpdate(changed: PropertyValues): void {
    if (changed.has("index") || changed.has("hass")) this.loadPast();
  }

  private loadPast(): void {
    const s = this.config?.sensors ?? {};
    const day = this.daily[this.index];
    if (!this.hass || !day) return;
    const start = dayStart(day.datetime);
    const now = Date.now();
    if (start > now) return;
    const end = Math.min(start + 24 * HOUR, Math.ceil(now / 300_000) * 300_000);
    const key = `${start}|${end}`;
    if (key === this._pastKey) return;
    this._pastKey = key;
    const ids = [s.temperature, s.rain_total, s.wind_speed, s.wind_gust, s.wind_direction].filter(Boolean) as string[];
    const types: StatType[] = ["mean", "max", "change"];
    const req = end < start + 24 * HOUR
      ? fetchUntilNow(this.hass, { ids, start: new Date(start), types })
      : fetchStatistics(this.hass, { ids, start: new Date(start), end: new Date(end), period: "hour", types }).then((hours) => ({ hours, current: {} }));
    req.then(
      (r) => key === this._pastKey && ((this._past = r.hours), (this._pastNow = r.current)),
      () => (this._pastKey = undefined), // Diagramm zeigt dann nur die Vorhersage
    );
  }

  protected render() {
    const day = this.daily[this.index];
    if (!day) return nothing;
    const start = dayStart(day.datetime);
    const end = start + 24 * HOUR;
    const now = Date.now();
    const isToday = now >= start && now < end;
    const hours = this.hourly.filter((h) => {
      const t = new Date(h.datetime).getTime();
      return t >= start && t <= end;
    });
    const date = new Date(start).toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });

    return html`
      <div class="backdrop" @click=${this.close}></div>
      <div class="sheet" role="dialog" aria-label="Tagesdetail">
        <div class="top">
          <button class="ib" aria-label="Schließen" @click=${this.close}>${icon("mdi:close")}</button>
          <div class="ttl">${METRICS.find((m) => m.id === this.metric)!.label}</div>
          <span style="width:40px"></span>
        </div>

        <div class="days">
          ${this.daily.map((d, i) => {
            const dt = new Date(d.datetime);
            return html`<button class=${i === this.index ? "on" : ""} @click=${() => this.select(i)}>
              <span class="l">${WD[dt.getDay()]}</span><span class="n">${dt.getDate()}</span></button>`;
          })}
        </div>
        <div class="date">${date}</div>

        <div class="chips">
          ${METRICS.map((m) => html`<button class=${m.id === this.metric ? "on" : ""}
            @click=${() => this.setMetric(m.id)}>${icon(m.icon)}${m.label}</button>`)}
        </div>

        <section class="card">
          ${this.renderSummary(day, hours, isToday)}
          ${hours.length
            ? this.renderChart(start, end, hours, isToday ? now : undefined)
            : html`<div class="hint">Für diesen Tag gibt es keine Stundenvorhersage.</div>`}
        </section>
      </div>
    `;
  }

  private select(i: number): void {
    this.dispatchEvent(new CustomEvent("select", { detail: { index: i } }));
  }

  private setMetric(m: Metric): void {
    this.dispatchEvent(new CustomEvent("metric", { detail: { metric: m } }));
  }

  private renderSummary(day: ForecastItem, hours: ForecastItem[], isToday: boolean) {
    const s = this.config.sensors ?? {};
    if (this.metric === "temp") {
      const cur = isToday ? stateNum(this.hass, s.temperature) : undefined;
      return html`<div class="sum">
        <div class="sum-ic">${weatherIcon(day.condition)}</div>
        <div>
          <div class="big">${cur != null ? temp(cur) : conditionLabel(day.condition)}</div>
          <div class="sub">H: ${temp(day.temperature)} · T: ${temp(day.templow)}${cur != null ? ` · ${conditionLabel(day.condition)}` : ""}</div>
        </div>
      </div>`;
    }
    if (this.metric === "rain") {
      const measured = isToday && s.rain_total ? this.allRows(s.rain_total).reduce((a, r) => a + (r.change ?? 0), 0) : undefined;
      const maxProb = Math.max(0, ...hours.map((h) => h.precipitation_probability ?? 0), day.precipitation_probability ?? 0);
      return html`<div class="sum">
        <div>
          <div class="big">${rain(day.precipitation ?? hours.reduce((a, h) => a + (h.precipitation ?? 0), 0))}</div>
          <div class="sub">erwartet · Wahrscheinlichkeit bis ${Math.round(maxProb)} %${measured != null ? ` · bisher gemessen ${rain(measured)}` : ""}</div>
        </div>
      </div>`;
    }
    const speeds = hours.map((h) => h.wind_speed).filter((v): v is number => v != null);
    const avg = speeds.length ? speeds.reduce((a, b) => a + b, 0) / speeds.length : day.wind_speed;
    // Tagesrichtung fehlt oft in der Tagesvorhersage → Vektormittel der Stundenwerte
    const bearings = hours.map((h) => h.wind_bearing).filter((v): v is number => v != null);
    const bearing = day.wind_bearing ?? (bearings.length
      ? (Math.atan2(bearings.reduce((a, d) => a + Math.sin((d * Math.PI) / 180), 0), bearings.reduce((a, d) => a + Math.cos((d * Math.PI) / 180), 0)) * 180) / Math.PI
      : undefined);
    const gust = s.wind_gust && isToday ? Math.max(...this.allRows(s.wind_gust).map((r) => r.max ?? 0), 0) : undefined;
    return html`<div class="sum">
      <div>
        <div class="big">${num(avg, 0)} km/h ${bearing != null ? html`<span class="dir">${compass(bearing)}</span>` : nothing}</div>
        <div class="sub">Ø Vorhersage · max ${num(speeds.length ? Math.max(...speeds) : undefined, 0)} km/h${gust ? ` · stärkste Böe heute ${num(gust, 0)} km/h` : ""}</div>
      </div>
    </div>`;
  }

  /** volle Stunden (Diagramm) */
  private pastRows(id: string) {
    return this._past?.[id] ?? [];
  }

  /** inkl. laufender Stunde (Summen, Maxima) */
  private allRows(id: string) {
    return [...this.pastRows(id), ...(this._pastNow?.[id] ?? [])];
  }

  /** Querformat mit wenig Höhe (Echo Show): Diagramm füllt den Platz rechts statt fester 220 px */
  private chartHeight(): number {
    const short = typeof matchMedia === "function" && matchMedia("(max-height: 600px) and (min-width: 700px)").matches;
    return short ? Math.max(180, Math.min(360, window.innerHeight - 215)) : 220;
  }

  private renderChart(start: number, end: number, hours: ForecastItem[], now?: number) {
    const s = this.config.sensors ?? {};
    const fc = hours.map((h) => ({ t: new Date(h.datetime).getTime(), h }));
    // Vorhersage nur ab der laufenden Stunde, davor zählt die Messung
    const future = now ? fc.filter((p) => p.t >= now - HOUR) : fc;
    const ticks: ChartTick[] = [0, 6, 12, 18].map((h) => ({ t: start + h * HOUR, label: `${String(h).padStart(2, "0")} Uhr` }));
    const series: ChartSeries[] = [];
    const markers: ChartMarker[] = [];
    let yUnit = "°", rightMax: number | undefined, rightUnit = "";
    let yMin: number | undefined;

    if (this.metric === "temp") {
      const past = s.temperature && now ? this.pastRows(s.temperature).map((r) => ({ t: r.start + HOUR / 2, v: r.mean })) : [];
      const cur = now ? stateNum(this.hass, s.temperature) : undefined;
      const blend = temperatureBlender(this.hourly, cur);
      const pts = [...past, ...(cur != null ? [{ t: now!, v: cur }] : []), ...future.filter((p) => !now || p.t > now).map((p) => ({ t: p.t, v: blend(p.t, p.h.temperature) }))];
      series.push({ type: "area", points: pts, color: "var(--wa-temp, #4fc3f7)", dashFrom: now ?? start, label: "Temperatur", unit: "°", digits: 1 });
      const valid = pts.filter((p) => p.v != null) as { t: number; v: number }[];
      if (valid.length) {
        const hi = valid.reduce((a, b) => (b.v > a.v ? b : a));
        const lo = valid.reduce((a, b) => (b.v < a.v ? b : a));
        markers.push({ t: hi.t, v: hi.v, label: "H" }, { t: lo.t, v: lo.v, label: "T" });
      }
    } else if (this.metric === "rain") {
      yUnit = "";
      yMin = 0;
      if (s.rain_total && now) {
        series.push({ type: "bar", points: this.pastRows(s.rain_total).map((r) => ({ t: r.start, v: r.change })), color: "var(--wa-rain-past, #1e6fb8)", barWidth: HOUR, label: "gemessen", unit: " l/m²", digits: 1 });
      }
      series.push({ type: "bar", points: future.map((p) => ({ t: p.t, v: p.h.precipitation ?? 0 })), color: "var(--wa-rain)", barWidth: HOUR, label: "Menge", unit: " l/m²", digits: 1 });
      series.push({ type: "line", axis: "right", points: future.map((p) => ({ t: p.t + HOUR / 2, v: p.h.precipitation_probability })), color: "var(--wa-prob, #90caf9)", label: "Wahrscheinl.", unit: " %", digits: 0 });
      rightMax = 100;
      rightUnit = " %";
    } else {
      yUnit = "";
      yMin = 0;
      const past = s.wind_speed && now ? this.pastRows(s.wind_speed).map((r) => ({ t: r.start + HOUR / 2, v: r.mean })) : [];
      const cur = now ? stateNum(this.hass, s.wind_speed) : undefined;
      const pts = [...past, ...(cur != null ? [{ t: now!, v: cur }] : []), ...future.filter((p) => !now || p.t > now).map((p) => ({ t: p.t, v: p.h.wind_speed }))];
      series.push({ type: "area", points: pts, color: "var(--wa-wind, #81c784)", dashFrom: now ?? start, label: "Wind", unit: " km/h", digits: 0 });
      if (s.wind_gust && now) {
        series.push({ type: "line", points: this.pastRows(s.wind_gust).map((r) => ({ t: r.start + HOUR / 2, v: r.max })), color: "var(--wa-gust, #ffb74d)", label: "Böe", unit: " km/h", digits: 0 });
      }
    }

    return html`
      <wetter-app-chart .start=${start} .end=${end} .series=${series} .ticks=${ticks} .markers=${markers}
        .now=${now} .height=${this.chartHeight()} .yUnit=${yUnit} .yMin=${yMin} .rightMax=${rightMax} .rightUnit=${rightUnit}
        .timeFormat=${(t: number) => new Date(t).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}
        .tipIcon=${(t: number) => {
          // Wettersymbol der Vorhersage-Stunde unter dem Mauszeiger (vergangene Stunden: keins)
          const f = fc.find((p) => p.t <= t && t < p.t + HOUR)?.h;
          return f?.condition ? weatherIcon(f.condition, f.is_daytime === false) : nothing;
        }}>
      </wetter-app-chart>
      ${this.metric === "temp" ? legend(lineStyles(!!now)) : nothing}
      ${this.metric === "wind" ? html`${this.renderWindDirs(start, future)}${legend([
        { color: "var(--wa-wind, #81c784)", label: "Wind", kind: "line" },
        series.length > 1 && { color: "var(--wa-gust, #ffb74d)", label: "Böen", kind: "line" },
        ...lineStyles(!!now),
      ])}` : nothing}
      ${this.metric === "rain" ? legend([
        { color: "var(--wa-rain)", label: "Menge pro Stunde" },
        { color: "var(--wa-prob, #90caf9)", label: "Wahrscheinlichkeit", kind: "line" },
        !!now && { color: "var(--wa-rain-past, #1e6fb8)", label: "gemessen" },
      ]) : nothing}
    `;
  }

  /** Richtung je 3-Std.-Block (mittlere Stunde): vergangene Stunden gemessen, sonst Vorhersage */
  private renderWindDirs(start: number, future: { t: number; h: ForecastItem }[]) {
    const id = this.config.sensors?.wind_direction;
    const measured = new Map((id ? this.pastRows(id) : []).map((r) => [r.start, r.mean]));
    // echte Stunden ab Tagesbeginn wie die Diagramm-Achse (am Tag der Zeitumstellung ≠ Uhrzeit)
    const hh = (t: number) => new Date(t).getHours();
    const step = [1, 4, 7, 10, 13, 16, 19, 22].map((k) => {
      const t = start + k * HOUR;
      const dir = measured.get(t) ?? future.find((p) => p.t === t)?.h.wind_bearing;
      return { t, dir, title: `${hh(t - HOUR)}–${hh(t + 2 * HOUR)} Uhr` };
    }).filter((p) => p.dir != null);
    // gleiche Ränder wie im Diagramm (links 6 px, rechts 38 px); Stundenmitte → Pfeile mittig in ihrem Block
    return html`<div class="dirs">
      ${step.map((p) => html`<div style="left:calc(6px + (100% - 44px) * ${(p.t + HOUR / 2 - start) / (24 * HOUR)})" title=${p.title}>
        ${icon("mdi:navigation", `transform:rotate(${p.dir! + 180}deg)`)}</div>`)}
    </div>`;
  }

  static styles = [
    cardStyles,
    legendStyles,
    css`
      /* hängt direkt an <body> → Schrift und Farben selbst setzen */
      :host {
        position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 9; display: flex; justify-content: center; align-items: stretch;
        font-family: var(--ha-font-family-body, var(--mdc-typography-font-family, Roboto, Noto, sans-serif));
        -webkit-font-smoothing: antialiased; line-height: 1.4;
      }
      :host(.dark) { --wa-cloud: #e6eaef; --wa-cloud2: #aab4bf; --wa-moon: #e9edf5; }
      .backdrop { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(0, 0, 0, 0.55); }
      .sheet {
        position: relative; width: 100%; max-width: 720px; overflow-y: auto; box-sizing: border-box;
        background: var(--primary-background-color, #111);
        /* iPhone: nicht unter Statusleiste/Home-Indikator rutschen */
        padding: calc(8px + env(safe-area-inset-top, 0px)) 12px calc(24px + env(safe-area-inset-bottom, 0px));
        display: flex; flex-direction: column; gap: 12px; -webkit-overflow-scrolling: touch;
      }
      @media (min-width: 760px) {
        :host { align-items: center; padding: 24px; box-sizing: border-box; }
        /* PC: Hintergrund deutlich abdunkeln und weichzeichnen, damit das Popup klar im Fokus steht */
        .backdrop { background: rgba(0, 0, 0, 0.6); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
        .sheet { max-height: 90vh; border-radius: var(--ha-border-radius-lg, 12px); }
      }
      .top { display: flex; align-items: center; justify-content: space-between; }
      .ttl { font-size: 18px; font-weight: 500; }
      .ib {
        border: 0; background: rgba(127, 127, 127, 0.18); color: var(--wa-text); width: 40px; height: 40px;
        border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;
      }
      .days { display: flex; justify-content: space-between; gap: 2px; }
      .days button {
        flex: 1; border: 0; background: none; color: var(--wa-text); cursor: pointer; font: inherit;
        display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 4px 0;
      }
      .days .l { font-size: 12px; color: var(--wa-text2); }
      .days .n {
        font-size: 17px; font-weight: 500; width: 36px; height: 36px; line-height: 36px; border-radius: 50%;
      }
      .days button.on .n { background: var(--wa-accent); color: var(--text-primary-color, #fff); }
      .date { text-align: center; font-size: 15px; font-weight: 500; }
      .chips { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; }
      .chips button {
        display: flex; align-items: center; gap: 6px; border: 1px solid var(--wa-divider); background: none;
        color: var(--wa-text); font: inherit; font-size: 13px; padding: 6px 12px; border-radius: 16px; cursor: pointer;
      }
      .chips .mdi { --mdc-icon-size: 16px; }
      .chips button.on {
        border-color: transparent; color: var(--wa-accent); font-weight: 500;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }
      .sum { display: flex; align-items: center; gap: 12px; padding: 4px 0 12px; }
      .sum-ic .wicon { width: 52px; height: 52px; }
      .big { font-size: 28px; font-weight: 500; }
      .dir { font-size: 18px; color: var(--wa-text2); font-weight: 500; }
      .sub { font-size: 13px; color: var(--wa-text2); }
      .dirs { position: relative; height: 18px; margin-top: 6px; }
      .dirs div {
        position: absolute; top: 0; transform: translateX(-50%); display: flex; flex-direction: column;
        align-items: center; font-size: 11px; color: var(--wa-text2); white-space: nowrap;
      }
      .dirs .mdi { --mdc-icon-size: 18px; color: var(--wa-text); }
      /* am Ende, damit es die Grundregeln oben überschreibt.
         Breit, aber niedrig (Echo Show 960×480, Handy quer): Vollbild, Tage + Werte-Auswahl links als Spalte,
         rechts Datum und Diagramm — nichts muss vertikal gescrollt werden */
      @media (max-height: 600px) and (min-width: 700px) {
        :host { padding: 0; align-items: stretch; }
        .sheet {
          max-width: none; max-height: none; height: 100%; border-radius: 0;
          display: grid; grid-template-columns: 210px minmax(0, 1fr); grid-template-rows: auto auto auto 1fr;
          grid-template-areas: "top date" "days card" "chips card" ". card"; gap: 10px 16px;
          padding: calc(8px + env(safe-area-inset-top, 0px)) calc(12px + env(safe-area-inset-right, 0px)) 8px calc(12px + env(safe-area-inset-left, 0px));
        }
        .top { grid-area: top; }
        .ttl, .top > span { display: none; }
        .date { grid-area: date; align-self: center; text-align: left; font-size: 17px; }
        .days { grid-area: days; display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
        .days button { flex-direction: row; justify-content: flex-start; gap: 8px; padding: 2px 4px; border-radius: 18px; }
        .days .l { width: 22px; font-size: 13px; }
        .days .n { width: 30px; height: 30px; line-height: 30px; font-size: 15px; }
        .chips { grid-area: chips; flex-direction: column; flex-wrap: nowrap; align-items: stretch; }
        .chips button { padding: 6px 12px; }
        .sheet > .card { grid-area: card; align-self: start; }
      }
    `,
  ];
}
