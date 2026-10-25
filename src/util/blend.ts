import type { ForecastItem } from "../types";

const HOUR = 3_600_000;
/** Über diese Zeit klingt die Korrektur linear auf 0 ab — danach gilt die reine Vorhersage. */
const FADE_HOURS = 3;

/**
 * Gleicht die Temperatur-Vorhersage der nächsten Stunden an den Messwert der Station an,
 * damit die Kurve bei „Jetzt“ nicht springt. Liefert eine Funktion t → angeglichene Temperatur.
 */
export function temperatureBlender(hourly: ForecastItem[] | undefined, measured: number | undefined, now = Date.now()) {
  const pts = (hourly ?? [])
    .filter((h) => h.temperature != null)
    .map((h) => ({ t: new Date(h.datetime).getTime(), v: h.temperature! }));
  const atNow = interpolate(pts, now);
  const offset = measured != null && atNow != null ? measured - atNow : 0;
  return (t: number, v: number | undefined): number | undefined => {
    if (v == null || !offset || t <= now) return v;
    const w = 1 - (t - now) / (FADE_HOURS * HOUR);
    return w > 0 ? v + offset * w : v;
  };
}

function interpolate(pts: { t: number; v: number }[], t: number): number | undefined {
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    if (a.t <= t && t <= b.t) return a.v + ((b.v - a.v) * (t - a.t)) / (b.t - a.t || 1);
  }
  // „Jetzt“ vor dem ersten Punkt (laufende Stunde fehlt): ersten Punkt nehmen, wenn nah genug
  if (pts.length && pts[0].t > t && pts[0].t - t <= HOUR) return pts[0].v;
  return undefined;
}
