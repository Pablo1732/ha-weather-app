import type { ForecastItem, StatValue } from "../types";

/**
 * Tagesvorhersage, heute aber mindestens so tief/hoch wie heute schon gemessen
 * (die Vorhersage für heute kennt die Nacht oft nicht mehr).
 * stats = Temperatur-Statistik (min/max) ab Mitternacht oder früher, nowTemp = aktueller Messwert.
 */
export function withMeasuredToday(fc: ForecastItem[] | undefined, stats: StatValue[] | undefined, nowTemp: number | undefined): ForecastItem[] | undefined {
  const d0 = fc?.[0];
  if (!d0) return fc;
  const midnight = new Date().setHours(0, 0, 0, 0);
  if (new Date(d0.datetime).setHours(0, 0, 0, 0) !== midnight) return fc;
  const seen = [nowTemp, ...(stats ?? []).filter((p) => p.end > midnight).flatMap((p) => [p.min, p.max])]
    .filter((v): v is number => typeof v === "number" && isFinite(v));
  if (!seen.length) return fc;
  const lo = Math.min(...seen, d0.templow ?? Infinity);
  const hi = Math.max(...seen, d0.temperature ?? -Infinity);
  if (lo === d0.templow && hi === d0.temperature) return fc;
  return [{ ...d0, templow: lo, temperature: hi }, ...fc!.slice(1)];
}
