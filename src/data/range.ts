import type { StatPeriod } from "../types";

export type RangePreset = "day" | "7d" | "30d" | "month" | "year";

export const PRESETS: { id: RangePreset; label: string }[] = [
  { id: "day", label: "Tag" },
  { id: "7d", label: "7 Tage" },
  { id: "30d", label: "30 Tage" },
  { id: "month", label: "Monat" },
  { id: "year", label: "Jahr" },
];

export interface RangeState {
  preset: RangePreset;
  /** 0 = aktueller Zeitraum, -1 = einer zurück, … */
  offset: number;
}

export interface TimeRange extends RangeState {
  start: Date;
  end: Date;
  /** Standard-Auflösung für Diagramme in diesem Zeitraum */
  period: StatPeriod;
  label: string;
  /** true, wenn der Zeitraum bis jetzt reicht (Daten ändern sich noch) */
  live: boolean;
}

const DAY = 86_400_000;
const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function addDays(d: Date, n: number): Date {
  // über Kalendertage statt ms → korrekt bei Sommer-/Winterzeit
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
}

function fmtDate(d: Date, withYear = false): string {
  return d.toLocaleDateString("de-DE", withYear
    ? { day: "2-digit", month: "2-digit", year: "numeric" }
    : { day: "2-digit", month: "2-digit" });
}

export function isPreset(v: unknown): v is RangePreset {
  return PRESETS.some((p) => p.id === v);
}

export function resolveRange(state: RangeState, now = new Date()): TimeRange {
  const today = startOfDay(now);
  const o = Math.min(0, Math.round(state.offset));
  let start: Date;
  let end: Date;
  let period: StatPeriod;
  let label: string;

  switch (state.preset) {
    case "day": {
      start = addDays(today, o);
      end = addDays(start, 1);
      period = "hour";
      label = o === 0 ? "Heute" : o === -1 ? "Gestern"
        : start.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit" });
      break;
    }
    case "7d":
    case "30d": {
      const n = state.preset === "7d" ? 7 : 30;
      end = addDays(today, 1 + o * n);
      start = addDays(end, -n);
      period = n === 7 ? "hour" : "day";
      label = o === 0 ? `Letzte ${n} Tage` : `${fmtDate(start)} – ${fmtDate(addDays(end, -1), true)}`;
      break;
    }
    case "month": {
      start = new Date(now.getFullYear(), now.getMonth() + o, 1);
      end = new Date(start.getFullYear(), start.getMonth() + 1, 1);
      period = "day";
      label = `${MONTHS[start.getMonth()]} ${start.getFullYear()}`;
      break;
    }
    case "year":
    default: {
      start = new Date(now.getFullYear() + o, 0, 1);
      end = new Date(start.getFullYear() + 1, 0, 1);
      period = "month";
      label = String(start.getFullYear());
      break;
    }
  }

  const live = end.getTime() > now.getTime();
  // Statistik-Abfrage nie in die Zukunft, sonst cached HA nichts Sinnvolles
  if (live) end = new Date(Math.ceil(now.getTime() / 300_000) * 300_000);
  return { preset: state.preset, offset: o, start, end, period, label, live };
}

/** Anzahl Tage im Zeitraum (für Durchschnittswerte). */
export function rangeDays(r: TimeRange): number {
  return Math.max(1, (r.end.getTime() - r.start.getTime()) / DAY);
}
