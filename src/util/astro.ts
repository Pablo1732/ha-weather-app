// Sonnenauf-/-untergang und Mondbeleuchtung lokal berechnen (NOAA-Näherung, ±1–2 min).
// sun.sun liefert nur die *nächsten* Zeiten — für den Tagesbogen brauchen wir die von heute.

const RAD = Math.PI / 180;

/** Sonnenauf- und -untergang für den Kalendertag von `date` (lokal). undefined bei Polartag/-nacht. */
export function sunTimes(date: Date, lat: number, lon: number): { rise: Date; set: Date; noon: Date } | undefined {
  const day = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  const n = Math.round((day.getTime() - Date.UTC(2000, 0, 1, 12)) / 86_400_000);
  const jStar = n - lon / 360;
  const m = (357.5291 + 0.98560028 * jStar) % 360;
  const c = 1.9148 * Math.sin(m * RAD) + 0.02 * Math.sin(2 * m * RAD) + 0.0003 * Math.sin(3 * m * RAD);
  const lambda = (m + c + 180 + 102.9372) % 360;
  const jTransit = jStar + 0.0053 * Math.sin(m * RAD) - 0.0069 * Math.sin(2 * lambda * RAD);
  const decl = Math.asin(Math.sin(lambda * RAD) * Math.sin(23.4397 * RAD));
  const cosW = (Math.sin(-0.833 * RAD) - Math.sin(lat * RAD) * Math.sin(decl)) / (Math.cos(lat * RAD) * Math.cos(decl));
  if (cosW < -1 || cosW > 1) return undefined;
  const w = Math.acos(cosW) / RAD / 360;
  const toDate = (j: number) => new Date(Date.UTC(2000, 0, 1, 12) + j * 86_400_000);
  return { rise: toDate(jTransit - w), set: toDate(jTransit + w), noon: toDate(jTransit) };
}

const SYNODIC = 29.530588853;
const NEW_MOON_REF = Date.UTC(2000, 0, 6, 18, 14);

/** Mondalter in Tagen (0 = Neumond) und beleuchteter Anteil 0…1. */
export function moonInfo(date: Date): { age: number; illumination: number; nextFull: Date } {
  const days = (date.getTime() - NEW_MOON_REF) / 86_400_000;
  const age = ((days % SYNODIC) + SYNODIC) % SYNODIC;
  const illumination = (1 - Math.cos((age / SYNODIC) * 2 * Math.PI)) / 2;
  const toFull = (SYNODIC / 2 - age + SYNODIC) % SYNODIC;
  return { age, illumination, nextFull: new Date(date.getTime() + toFull * 86_400_000) };
}
