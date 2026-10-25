import type { HassEntity, HomeAssistant } from "../types";

const nf = new Map<number, Intl.NumberFormat>();

export function num(v: number | null | undefined, digits = 1): string {
  if (v == null || !isFinite(v)) return "–";
  let f = nf.get(digits);
  if (!f) {
    f = new Intl.NumberFormat("de-DE", { minimumFractionDigits: digits, maximumFractionDigits: digits });
    nf.set(digits, f);
  }
  return f.format(v);
}

export const temp = (v: number | null | undefined, digits = 0) => (v == null ? "–" : `${num(v, digits)}°`);
export const rain = (v: number | null | undefined, digits = 1) => `${num(v, digits)} l/m²`;

/** Zahlenwert einer Entität oder undefined (unavailable/unknown/fehlt). */
export function stateNum(hass: HomeAssistant | undefined, id: string | undefined): number | undefined {
  const e: HassEntity | undefined = id ? hass?.states[id] : undefined;
  if (!e) return undefined;
  const v = parseFloat(e.state);
  return isFinite(v) ? v : undefined;
}

const WEEKDAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

export function weekday(d: Date, now = new Date()): string {
  return d.toDateString() === now.toDateString() ? "Heute" : WEEKDAYS[d.getDay()];
}

export function hour(d: Date): string {
  return `${String(d.getHours()).padStart(2, "0")} Uhr`;
}

export function clock(d: Date): string {
  return d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
}

const DIRS = ["N", "NO", "O", "SO", "S", "SW", "W", "NW"];
export function compass(deg: number | undefined): string {
  if (deg == null || !isFinite(deg)) return "–";
  return DIRS[Math.round((((deg % 360) + 360) % 360) / 45) % 8];
}
