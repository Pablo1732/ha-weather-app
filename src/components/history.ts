import { LitElement, css, html, nothing } from "lit";
import { isPreset, type TimeRange } from "../data/range";
import { RangeController } from "../data/range-sync";
import { fetchStatistics } from "../data/statistics";
import type { HomeAssistant, StatPeriod, StatResult, StatValue, WetterConfig } from "../types";
import { num, rain, stateNum, temp } from "../util/format";
import type { ChartSeries, ChartTick } from "./chart";
import { rangeStyles, renderRangeSelector } from "./range-selector";
import { cardStyles, head, legend, legendStyles } from "./styles";
import { renderWindrose, windroseStyles } from "./windrose";
import { onOtherTip, tipOpened } from "../util/tip-bus";

// Historie: gemeinsamer Zeitraum für alle Diagramme, Daten aus der Langzeitstatistik.

type Extra = "pressure" | "humidity" | "solar" | "uv";
const EXTRAS: { id: Extra; label: string; unit: string; digits: number; color: string }[] = [
  { id: "pressure", label: "Luftdruck", unit: " hPa", digits: 1, color: "var(--wa-accent)" },
  { id: "humidity", label: "Feuchte", unit: " %", digits: 0, color: "#4dd0e1" },
  { id: "solar", label: "Sonne", unit: " W/m²", digits: 0, color: "#ffb300" },
  { id: "uv", label: "UV", unit: "", digits: 1, color: "#ab47bc" },
];

const MONTHS = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
const MONTHS_LONG = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const WD = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const DAY = 86_400_000;
/** DWD-Definition Niederschlagstag */
const RAIN_DAY = 0.1;

interface Data {
  main: StatResult; // Temperatur, Wind, Druck, Feuchte, Sonne, UV (mean/min/max)
  rain: StatResult; // Regen-Änderung
  dir: StatResult; // Windrichtung (+ ggf. eigene Windgeschwindigkeit für die Rose)
}

export class WetterHistory extends LitElement {
  static properties = {
    hass: { attribute: false },
    config: { attribute: false },
    wide: { type: Boolean, reflect: true },
    _data: { state: true },
    _err: { state: true },
    _extra: { state: true },
    _bft: { state: true },
  };

  hass?: HomeAssistant;
  config!: WetterConfig;
  wide = false;
  private _data?: Data;
  private _err?: string;
  private _key?: string;
  private _dataRange?: TimeRange; // Zeitraum, zu dem _data gehört (beim Blättern bis zum Laden der alte)
  private _extra: Extra = "pressure";
  private _bft?: number; // in der Windrose angetippte Beaufort-Stufe
  private _bftUp = false; // Detail nach oben öffnen (unten kein Platz)

  private range = new RangeController(
    this,
    () => this.config?.sync_group ?? "default",
    () => (isPreset(this.config?.default_range) ? this.config.default_range : "7d"),
  );

  // Auflösung je Zeitraum: Stunden bis 7 Tage, sonst Tage (Jahr wird clientseitig zu Monaten)
  private periods(r: TimeRange) {
    const main: StatPeriod = r.preset === "day" || r.preset === "7d" ? "hour" : "day";
    return {
      main,
      rain: (r.preset === "day" ? "hour" : "day") as StatPeriod,
      // Rose aus 5-Minuten-Werten, solange HA sie noch hat (Standard 10 Tage) — Stundenmittel glätten kurze
      // stärkere Phasen weg. Älteres aus Stundenwerten; Tagesmittel würden die Richtung verwischen.
      rose: (r.start.getTime() > Date.now() - 9 * DAY ? "5minute" : "hour") as StatPeriod,
    };
  }

  private _offTip?: () => void;

  connectedCallback(): void {
    super.connectedCallback();
    this._offTip = onOtherTip(this, () => (this._bft = undefined), () => this.renderRoot.querySelector(".bftbar"));
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._offTip?.();
  }

  protected updated(): void {
    this.load();
  }

  private async load(): Promise<void> {
    if (!this.hass || !this.config) return;
    const r = this.range.range;
    const s = this.config.sensors ?? {};
    const p = this.periods(r);
    const key = `${r.start.getTime()}|${r.end.getTime()}`;
    if (key === this._key) return;
    this._key = key;
    this._err = undefined;
    const ids = (xs: (string | undefined)[]) => xs.filter(Boolean) as string[];
    const q = (idList: string[], period: StatPeriod, types: any[]) =>
      fetchStatistics(this.hass!, { ids: idList, start: r.start, end: r.end, period, types });
    try {
      const [main, rainRes, dir] = await Promise.all([
        q(ids([s.temperature, s.humidity, s.pressure, s.solar, s.uv, s.wind_speed, s.wind_gust]), p.main, ["mean", "min", "max"]),
        q(ids([s.rain_total]), p.rain, ["change"]),
        q(ids([s.wind_direction, p.rose !== p.main ? s.wind_speed : undefined]), p.rose, ["mean", "min", "max"]),
      ]);
      if (key !== this._key) return;
      this._dataRange = r;
      this._data = { main, rain: rainRes, dir };
    } catch (err: any) {
      if (key !== this._key) return;
      this._err = err?.message ?? String(err);
      this._key = undefined;
    }
  }

  protected render() {
    if (!this.config) return nothing;
    const sel = this.range.range;
    const d = this._data;
    // bis der neue Zeitraum geladen ist, den alten (abgedunkelt) mit seinem eigenen Zeitraum zeigen
    const r = d && this._dataRange ? this._dataRange : sel;
    const stale = r !== sel && (r.start.getTime() !== sel.start.getTime() || r.end.getTime() !== sel.end.getTime());
    const s = this.config.sensors ?? {};
    const tempRows = (s.temperature && d?.main[s.temperature]) || [];
    const first = tempRows.find((x) => x.mean != null)?.start;
    const gapHint = !stale && first != null && first - r.start.getTime() > 2 * DAY
      ? html`<div class="hint-inline"><ha-icon icon="mdi:information-outline"></ha-icon>Daten erst ab ${new Date(first).toLocaleDateString("de-DE")}</div>`
      : nothing;

    return html`
      <section class="card">
        ${renderRangeSelector(this.range)}
      </section>
      ${this._err ? html`<div class="warn">Statistik nicht verfügbar: ${this._err}</div>` : nothing}
      ${!d ? html`<div class="loading">Lade Historie …</div>`
        : !tempRows.length && !(s.rain_total && d.rain[s.rain_total]?.length)
          ? html`<div class="hint">Keine Daten in diesem Zeitraum.</div>`
          : html`<div class="body ${stale ? "stale" : ""}">
            ${gapHint}
            ${this.renderSummary(r, d)}
            <div class="cols">
              ${this.renderTemp(r, d)}
              ${this.renderRain(r, d)}
            </div>
            ${r.preset === "year" ? this.renderYearTable(r, d) : nothing}
            <div class="cols">
              ${this.renderWind(r, d)}
              ${this.renderExtra(r, d)}
            </div></div>`}
    `;
  }

  // ---------- Helfer ----------

  private rows(res: StatResult | undefined, id: string | undefined, r: TimeRange): StatValue[] {
    const rows = (id && res?.[id]) || [];
    return r.preset === "year" ? byMonth(rows) : rows;
  }

  private ticks(r: TimeRange): ChartTick[] {
    const out: ChartTick[] = [];
    const s = r.start;
    if (r.preset === "day") {
      for (const h of [0, 6, 12, 18]) out.push({ t: new Date(s.getFullYear(), s.getMonth(), s.getDate(), h).getTime(), label: `${String(h).padStart(2, "0")} Uhr` });
    } else if (r.preset === "7d") {
      for (let i = 0; i < 7; i++) { const t = new Date(s.getFullYear(), s.getMonth(), s.getDate() + i); out.push({ t: t.getTime(), label: WD[t.getDay()] }); }
    } else if (r.preset === "30d") {
      for (let i = 0; i < 30; i += 7) { const t = new Date(s.getFullYear(), s.getMonth(), s.getDate() + i); out.push({ t: t.getTime(), label: `${t.getDate()}.${t.getMonth() + 1}.` }); }
    } else if (r.preset === "month") {
      for (const dd of [1, 8, 15, 22, 29]) out.push({ t: new Date(s.getFullYear(), s.getMonth(), dd).getTime(), label: `${dd}.` });
    } else {
      for (let m = 0; m < 12; m++) out.push({ t: new Date(s.getFullYear(), m, 1).getTime(), label: MONTHS[m] });
    }
    return out;
  }

  /** Tooltip-/Extremwert-Zeitangabe passend zur Auflösung */
  private fmt(r: TimeRange, period: StatPeriod) {
    return (t: number) => {
      const d = new Date(t);
      if (r.preset === "year" && period !== "hour") return `${MONTHS_LONG[d.getMonth()]}`;
      if (period === "hour") return `${WD[d.getDay()]} ${String(d.getHours()).padStart(2, "0")}:00`;
      return `${WD[d.getDay()]}, ${d.getDate()}.${d.getMonth() + 1}.`;
    };
  }

  private chart(r: TimeRange, series: ChartSeries[], opts: { yUnit?: string; yMin?: number; rightMax?: number; period: StatPeriod; height?: number }) {
    return html`<wetter-app-chart .start=${r.start.getTime()} .end=${r.end.getTime()} .series=${series}
      .ticks=${this.ticks(r)} .height=${opts.height ?? 200} .yUnit=${opts.yUnit ?? ""} .yMin=${opts.yMin}
      .rightMax=${opts.rightMax} .timeFormat=${this.fmt(r, r.preset === "year" ? "month" : opts.period)}></wetter-app-chart>`;
  }


  // ---------- Bausteine ----------

  private renderSummary(r: TimeRange, d: Data) {
    const s = this.config.sensors ?? {};
    const p = this.periods(r);
    const t = (s.temperature && d.main[s.temperature]) || [];
    const lo = extreme(t, "min", Math.min), hi = extreme(t, "max", Math.max);
    const mean = avg(t.map((x) => x.mean));
    const rainRows = (s.rain_total && d.rain[s.rain_total]) || [];
    const rainSum = rainRows.reduce((a, x) => a + (x.change ?? 0), 0);
    const wet = rainRows.filter((x) => (x.change ?? 0) >= RAIN_DAY).length;
    const gust = extreme((s.wind_gust && d.main[s.wind_gust]) || [], "max", Math.max);
    const wind = avg(((s.wind_speed && d.main[s.wind_speed]) || []).map((x) => x.mean));
    const hum = avg(((s.humidity && d.main[s.humidity]) || []).map((x) => x.mean));
    const when = this.fmt({ ...r, preset: r.preset === "year" ? "30d" : r.preset }, p.main);
    return html`<div class="grid">
      <section class="card kv">${head("mdi:thermometer", "Temperatur")}
        <div class="big">${temp(mean, 1)}</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>▲ ${temp(hi?.v, 1)}</span><small>${hi ? when(hi.t) : ""}</small></div>
        <div class="ext"><span>▼ ${temp(lo?.v, 1)}</span><small>${lo ? when(lo.t) : ""}</small></div>
      </section>
      <section class="card kv">${head("mdi:weather-pouring", "Niederschlag")}
        <div class="big">${rain(rainSum)}</div><div class="sub">Summe</div>
        <div class="ext"><span>${wet}</span><small>${p.rain === "hour" ? "Stunden mit Regen" : "Regentage (≥ 0,1 l/m²)"}</small></div>
      </section>
      <section class="card kv">${head("mdi:weather-windy", "Wind")}
        <div class="big">${num(wind, 1)} km/h</div><div class="sub">Durchschnitt</div>
        <div class="ext"><span>${num(gust?.v, 0)} km/h</span><small>stärkste Böe${gust ? ` · ${when(gust.t)}` : ""}</small></div>
      </section>
      <section class="card kv">${head("mdi:water-percent", "Luftfeuchte")}
        <div class="big">${num(hum, 0)} %</div><div class="sub">Durchschnitt</div>
      </section>
    </div>`;
  }

  private renderTemp(r: TimeRange, d: Data) {
    const s = this.config.sensors ?? {};
    const p = this.periods(r);
    const rows = this.rows(d.main, s.temperature, r);
    const series: ChartSeries[] = [];
    const center = (x: StatValue) => x.start + (x.end - x.start) / 2;
    if (p.main === "hour") {
      series.push({ type: "band", points: rows.map((x) => ({ t: center(x), v: x.min, v2: x.max })), color: "var(--wa-temp, #4fc3f7)", label: "", unit: "°", digits: 1 });
    } else {
      series.push({ type: "range", points: rows.map((x) => ({ t: x.start, t2: x.end, v: x.min, v2: x.max })), color: "rgba(79, 195, 247, 0.55)", label: "", unit: "°", digits: 1 });
    }
    series.push({ type: "line", points: rows.map((x) => ({ t: center(x), v: x.mean })), color: "var(--wa-temp-line, #ffb74d)", label: "Ø", unit: "°", digits: 1 });
    return html`<section class="card">${head("mdi:thermometer", "Temperatur")}
      ${this.chart(r, series, { yUnit: "°", period: p.main })}
      ${legend([{ color: "#4fc3f7", label: "Min–Max" }, { color: "#ffb74d", label: "Durchschnitt", kind: "line" }])}
    </section>`;
  }

  private renderRain(r: TimeRange, d: Data) {
    const s = this.config.sensors ?? {};
    if (!s.rain_total) return nothing;
    const p = this.periods(r);
    const rows = this.rows(d.rain, s.rain_total, r);
    const cumul = (list: StatValue[]) => {
      let acc = 0;
      // laufender Abschnitt endet in der Zukunft → Punkt aufs Zeitraum-Ende begrenzen
      return list.map((x) => ({ t: Math.min(x.end, r.end.getTime()), v: (acc += x.change ?? 0) }));
    };
    const series: ChartSeries[] = [
      { type: "bar", points: rows.map((x) => ({ t: x.start, t2: x.end, v: x.change ?? 0 })), color: "var(--wa-rain)", label: "Menge", unit: " l/m²", digits: 1 },
      { type: "line", axis: "right", points: [{ t: r.start.getTime(), v: 0 }, ...cumul(rows)], color: "var(--wa-prob, #90caf9)", label: "Summe", unit: " l/m²", digits: 1 },
    ];
    return html`<section class="card">${head("mdi:weather-pouring", "Niederschlag")}
      ${this.chart(r, series, { yMin: 0, period: p.rain })}
      ${legend([
        { color: "var(--wa-rain)", label: p.rain === "hour" ? "pro Stunde" : r.preset === "year" ? "pro Monat" : "pro Tag" },
        { color: "var(--wa-prob, #90caf9)", label: "Summe (blaue Skala links)", kind: "line" },
      ])}
    </section>`;
  }

  private renderWind(r: TimeRange, d: Data) {
    const s = this.config.sensors ?? {};
    if (!s.wind_speed) return nothing;
    const p = this.periods(r);
    const dirRows = (s.wind_direction && d.dir[s.wind_direction]) || [];
    const speedForRose = (p.rose === p.main ? d.main[s.wind_speed] : d.dir[s.wind_speed]) || [];
    const speed = this.rows(d.main, s.wind_speed, r);
    const gust = this.rows(d.main, s.wind_gust, r);
    const center = (x: StatValue) => x.start + (x.end - x.start) / 2;
    const series: ChartSeries[] = [
      { type: "line", points: speed.map((x) => ({ t: center(x), v: x.mean })), color: "var(--wa-wind, #81c784)", label: "Ø", unit: " km/h", digits: 1 },
      ...(gust.length ? [{ type: "line" as const, points: gust.map((x) => ({ t: center(x), v: x.max })), color: "var(--wa-gust, #ffb74d)", label: "Böe", unit: " km/h", digits: 0 }] : []),
    ];
    return html`<section class="card">${head("mdi:weather-windy", "Wind")}
      ${s.wind_direction ? renderWindrose(dirRows, speedForRose, {
        now: r.live ? { direction: stateNum(this.hass, s.wind_direction), speed: stateNum(this.hass, s.wind_speed) } : {},
        selected: this._bft,
        up: this._bftUp,
        onSelect: (i, up) => {
          if (i != null && this._bft == null) tipOpened(this);
          this._bft = i;
          this._bftUp = !!up;
        },
      }) : nothing}
      ${this.chart(r, series, { yMin: 0, period: p.main, height: 160 })}
      ${legend([{ color: "#81c784", label: "Durchschnitt", kind: "line" }, { color: "#ffb74d", label: "stärkste Böe", kind: "line" }])}
    </section>`;
  }

  private renderExtra(r: TimeRange, d: Data) {
    const s = this.config.sensors ?? {};
    const avail = EXTRAS.filter((e) => s[e.id]);
    if (!avail.length) return nothing;
    const cur = avail.find((e) => e.id === this._extra) ?? avail[0];
    const p = this.periods(r);
    const rows = this.rows(d.main, s[cur.id], r);
    const center = (x: StatValue) => x.start + (x.end - x.start) / 2;
    const series: ChartSeries[] = [
      { type: "band", points: rows.map((x) => ({ t: center(x), v: x.min, v2: x.max })), color: cur.color, unit: cur.unit, digits: cur.digits },
      { type: "line", points: rows.map((x) => ({ t: center(x), v: x.mean })), color: cur.color, label: "Ø", unit: cur.unit, digits: cur.digits },
    ];
    return html`<section class="card">${head("mdi:chart-bell-curve-cumulative", "Weitere Werte")}
      <div class="chips small">${avail.map((e) => html`<button class=${e === cur ? "on" : ""} @click=${() => (this._extra = e.id)}>${e.label}</button>`)}</div>
      ${this.chart(r, series, { period: p.main, yMin: cur.id === "pressure" ? undefined : 0 })}
      ${legend([{ color: cur.color, label: "Durchschnitt", kind: "line" }, { color: cur.color, label: "Min–Max", opacity: 0.3 }])}
    </section>`;
  }

  private renderYearTable(r: TimeRange, d: Data) {
    const s = this.config.sensors ?? {};
    const t = this.rows(d.main, s.temperature, r);
    const rn = this.rows(d.rain, s.rain_total, r);
    // laufendes Jahr: nur bis zum aktuellen Monat, sonst stünden im Januar elf leere Zeilen
    const months = [...Array(12)].map((_, m) => new Date(r.start.getFullYear(), m, 1).getTime()).filter((m) => m <= Date.now());
    const at = (rows: StatValue[], m: number) => rows.find((x) => x.start === m);
    const maxRain = Math.max(1, ...rn.map((x) => x.change ?? 0));
    return html`<section class="card">${head("mdi:table", `Monate ${r.start.getFullYear()}`)}
      <table class="months">
        <thead><tr><th></th><th>Ø</th><th>Min</th><th>Max</th><th class="rc">Niederschlag</th></tr></thead>
        <tbody>${months.map((m, i) => {
          const tm = at(t, m), rm = at(rn, m);
          if (!tm && !rm) return html`<tr class="empty"><td>${MONTHS[i]}</td><td colspan="4">–</td></tr>`;
          return html`<tr>
            <td>${MONTHS[i]}</td><td>${temp(tm?.mean, 1)}</td><td class="cold">${temp(tm?.min, 1)}</td><td class="warm">${temp(tm?.max, 1)}</td>
            <td class="rc"><div class="rcell"><div class="rbar"><i style="width:${((rm?.change ?? 0) / maxRain) * 100}%"></i></div>
              <span>${num(rm?.change, 0)}</span></div></td></tr>`;
        })}</tbody>
      </table>
    </section>`;
  }

  static styles = [
    cardStyles,
    legendStyles,
    rangeStyles,
    windroseStyles,
    css`
      :host { display: flex; flex-direction: column; gap: 12px; }
      .cols, .grid { display: grid; gap: 12px; }
      .body { display: flex; flex-direction: column; gap: 12px; transition: opacity 0.15s; }
      .body.stale { opacity: 0.45; pointer-events: none; }
      :host([wide]) .cols { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: start; }
      /* auto-fit: vorhandene Kacheln teilen sich die ganze Breite statt rechts eine Lücke zu lassen */
      .grid { grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); }
      .kv .big { font-size: 26px; font-weight: 600; margin-top: 4px; }
      .kv .sub { font-size: 12px; color: var(--wa-text2); margin-bottom: 6px; }
      .ext { display: flex; align-items: baseline; gap: 6px; font-size: 14px; flex-wrap: wrap; }
      .ext span { font-weight: 500; }
      .ext small { color: var(--wa-text2); font-size: 12px; }
      .chips.small button {
        display: flex; align-items: center; gap: 6px; border: 1px solid var(--wa-divider); background: none;
        color: var(--wa-text); font: inherit; font-size: 13px; padding: 5px 12px; border-radius: 16px; cursor: pointer;
      }
      .chips.small button.on {
        border-color: transparent; color: var(--wa-accent); font-weight: 500; background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
      }
      /* oben so viel Luft wie unten bis zum Diagramm (dessen Innenabstand oben) */
      .chips.small { display: flex; gap: 6px; flex-wrap: wrap; margin: 12px 0 2px; }
      .chips.small button { line-height: 18px; }
      .hint-inline { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--wa-text2); justify-content: center; }
      .hint-inline ha-icon { --mdc-icon-size: 16px; }
      .months { width: 100%; border-collapse: collapse; font-size: 14px; }
      .months th { font-size: 12px; font-weight: 500; color: var(--wa-text2); text-align: right; padding: 4px; }
      .months td { padding: 6px 4px; text-align: right; border-top: 1px solid var(--wa-divider); white-space: nowrap; }
      .months td:first-child, .months th:first-child { text-align: left; font-weight: 500; }
      .months .cold { color: #4fc3f7; }
      .months .warm { color: #ffb74d; }
      .months .rc { width: 40%; }
      .months th.rc { text-align: left; }
      .rcell { display: flex; align-items: center; gap: 8px; }
      .months tr.empty td { color: var(--wa-text2); }
      .rbar { position: relative; flex: 1; height: 8px; background: var(--wa-track); border-radius: 4px; }
      .rbar i { position: absolute; left: 0; top: 0; bottom: 0; background: var(--wa-rain); border-radius: 4px; }
      .rcell span { min-width: 30px; }
    `,
  ];
}

// ---------- reine Hilfsfunktionen ----------

function avg(vals: (number | null | undefined)[]): number | undefined {
  const v = vals.filter((x): x is number => x != null);
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : undefined;
}

function extreme(rows: StatValue[], f: "min" | "max", pick: (...n: number[]) => number) {
  let best: { t: number; v: number } | undefined;
  for (const r of rows) {
    const v = r[f];
    if (v == null) continue;
    if (!best || pick(v, best.v) === v && v !== best.v) best = { t: r.start, v };
  }
  return best;
}

/** Tageswerte zu Monaten zusammenfassen (Min der Mins, Max der Maxe, Ø der Mittel, Summe der Änderungen). */
function byMonth(rows: StatValue[]): StatValue[] {
  const out = new Map<number, StatValue & { _n: number; _sum: number }>();
  for (const r of rows) {
    const d = new Date(r.start);
    const key = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
    let m = out.get(key);
    if (!m) {
      m = { start: key, end: new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime(), min: null, max: null, mean: null, change: null, _n: 0, _sum: 0 };
      out.set(key, m);
    }
    if (r.min != null) m.min = m.min == null ? r.min : Math.min(m.min, r.min);
    if (r.max != null) m.max = m.max == null ? r.max : Math.max(m.max, r.max);
    if (r.mean != null) { m._sum += r.mean; m._n++; m.mean = m._sum / m._n; }
    if (r.change != null) m.change = (m.change ?? 0) + r.change;
  }
  return [...out.values()].sort((a, b) => a.start - b.start);
}
