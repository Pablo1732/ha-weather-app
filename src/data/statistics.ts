import type { HomeAssistant, StatPeriod, StatResult, StatType } from "../types";

export interface StatQuery {
  ids: string[];
  start: Date;
  end: Date;
  period: StatPeriod;
  types: StatType[];
}

const LIVE_TTL = 5 * 60_000;
const MAX_ENTRIES = 60;

interface CacheEntry {
  promise: Promise<StatResult>;
  expires: number; // Infinity = abgeschlossener Zeitraum, ändert sich nicht mehr
}

const cache = new Map<string, CacheEntry>();

/**
 * Langzeitstatistik über `recorder/statistics_during_period` (offizielle WS-API).
 * Liefert vorab aggregierte Werte (Stunde/Tag/Monat) — ein Jahr sind 12 statt ~100 000 Punkte.
 * Gleiche Anfragen mehrerer Karten werden zusammengelegt und zwischengespeichert.
 */
export function fetchStatistics(hass: HomeAssistant, q: StatQuery): Promise<StatResult> {
  const ids = q.ids.filter(Boolean);
  if (!ids.length) return Promise.resolve({});
  const key = JSON.stringify([ids, q.start.getTime(), q.end.getTime(), q.period, q.types]);
  const now = Date.now();
  const hit = cache.get(key);
  if (hit && hit.expires > now) return hit.promise;

  const promise = hass
    .callWS<StatResult>({
      type: "recorder/statistics_during_period",
      start_time: q.start.toISOString(),
      end_time: q.end.toISOString(),
      statistic_ids: ids,
      period: q.period,
      types: q.types,
    })
    .then(normalize);

  const entry: CacheEntry = { promise, expires: q.end.getTime() < now ? Infinity : now + LIVE_TTL };
  cache.set(key, entry);
  // Fehler nicht cachen, sonst bleibt die Karte bis zum Reload leer
  promise.catch(() => cache.get(key) === entry && cache.delete(key));
  if (cache.size > MAX_ENTRIES) cache.delete(cache.keys().next().value!);
  return promise;
}

// Ältere HA-Versionen liefern start/end als ISO-String, neuere als ms.
function normalize(res: StatResult): StatResult {
  for (const rows of Object.values(res)) {
    for (const r of rows) {
      if (typeof r.start !== "number") r.start = new Date(r.start as any).getTime();
      if (typeof r.end !== "number") r.end = new Date(r.end as any).getTime();
    }
  }
  return res;
}
