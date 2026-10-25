// Fake-hass für die lokale Testseite: echte Entity-IDs, plausible Beispieldaten.
import type { ForecastItem, HomeAssistant, StatValue } from "../src/types";

const P = "sensor.wetterstat_brotzeithutte_";

function st(id: string, state: string | number, attributes: Record<string, any> = {}) {
  return { entity_id: id, state: String(state), attributes, last_changed: "", last_updated: "" };
}

const states: HomeAssistant["states"] = {
  "weather.weather_fusion_ai_kresslingweg": st("weather.weather_fusion_ai_kresslingweg", "rainy", {
    temperature: 2.8, humidity: 86, pressure: 932.3, wind_speed: 5, wind_bearing: 144,
    latitude: 48.7067, longitude: 13.7744,
  }),
  "sun.sun": st("sun.sun", "above_horizon", {
    next_rising: "2026-10-26T05:38:11+00:00", next_setting: "2026-10-25T16:00:31+00:00",
  }),
  "sensor.moon_phase": st("sensor.moon_phase", "waxing_gibbous"),
  [P + "outdoor_temperature"]: st(P + "outdoor_temperature", 3.0),
  [P + "humidity"]: st(P + "humidity", 85),
  [P + "dewpoint"]: st(P + "dewpoint", 0.7),
  [P + "feels_like_temperature"]: st(P + "feels_like_temperature", 1.3),
  [P + "relative_pressure"]: st(P + "relative_pressure", 932.1),
  [P + "total_rain"]: st(P + "total_rain", 693.3),
  [P + "rain_rate"]: st(P + "rain_rate", 0),
  [P + "wind_speed"]: st(P + "wind_speed", 6.5),
  [P + "wind_gust"]: st(P + "wind_gust", 9.4),
  [P + "wind_direction"]: st(P + "wind_direction", 130),
  [P + "uv_index"]: st(P + "uv_index", 0),
  [P + "solar_radiation"]: st(P + "solar_radiation", 25.8),
};

const CONDS = ["sunny", "partlycloudy", "cloudy", "rainy", "pouring", "cloudy", "partlycloudy", "snowy", "fog", "lightning-rainy"];

function hourly(): ForecastItem[] {
  const start = new Date();
  start.setMinutes(0, 0, 0);
  return [...Array(72)].map((_, i) => {
    const d = new Date(start.getTime() + i * 3_600_000);
    const h = d.getHours();
    return {
      datetime: d.toISOString(),
      condition: i < 12 ? "rainy" : h < 7 || h > 18 ? "cloudy" : CONDS[(i >> 3) % 4],
      temperature: Math.round((5 + 4 * Math.sin(((h - 9) / 24) * 2 * Math.PI)) * 10) / 10,
      precipitation_probability: i < 12 ? 100 - i * 5 : (i * 37) % 60,
      precipitation: i < 12 ? 1.2 : 0.1,
      wind_speed: 4 + (i % 7),
      wind_bearing: 140,
      is_daytime: h >= 7 && h < 17,
    };
  });
}

const daily: ForecastItem[] = [
  [8.9, 5, "rainy", 100], [10.4, 2.5, "cloudy", 73], [14.1, 2, "sunny", 0], [10.5, 3.1, "rainy", 36],
  [9.6, 2.5, "partlycloudy", 16], [10.4, 3, "cloudy", 10], [9.2, 2.7, "partlycloudy", 4],
].map(([t, l, c, p], i) => {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + i);
  return { datetime: d.toISOString(), temperature: t as number, templow: l as number, condition: c as string, precipitation_probability: p as number };
});

const STEP: Record<string, number> = { "5minute": 300_000, hour: 3_600_000, day: 86_400_000, week: 604_800_000 };

function stats(msg: any): Record<string, StatValue[]> {
  const start = new Date(msg.start_time);
  const end = new Date(msg.end_time);
  const out: Record<string, StatValue[]> = {};
  for (const id of msg.statistic_ids as string[]) {
    const rows: StatValue[] = [];
    let t = new Date(start);
    while (t < end) {
      const next = msg.period === "month" ? new Date(t.getFullYear(), t.getMonth() + 1, 1) : new Date(t.getTime() + STEP[msg.period]);
      const doy = (t.getMonth() * 30 + t.getDate()) / 365;
      const season = -Math.cos(doy * 2 * Math.PI);
      let base = 0, spread = 1;
      if (id.endsWith("temperature")) { base = 9 + 10 * season; spread = 6; }
      else if (id.endsWith("humidity")) { base = 75 - 10 * season; spread = 15; }
      else if (id.endsWith("wind_speed")) { base = 6; spread = 4; }
      else if (id.endsWith("wind_gust")) { base = 12; spread = 10; }
      else if (id.endsWith("pressure")) { base = 935; spread = 6; }
      else if (id.endsWith("wind_direction")) { base = 200 + 90 * Math.sin(t.getTime() / 2e7); spread = 200; }
      const n = Math.sin(t.getTime() / 7e7) * 0.5;
      const days = (next.getTime() - t.getTime()) / 86_400_000;
      rows.push({
        start: t.getTime(), end: next.getTime(),
        mean: base + n * spread, min: base + (n - 0.8) * spread, max: base + (n + 0.8) * spread,
        change: Math.max(0, 2.2 * days * (0.6 + Math.sin(t.getTime() / 3e8))),
      });
      t = next;
    }
    out[id] = rows;
  }
  return out;
}

const delay = <T>(v: T, ms = 250) => new Promise<T>((r) => setTimeout(() => r(v), ms));

export const hass: HomeAssistant = {
  states,
  callWS: <T>(msg: any) => {
    console.debug("[mock] callWS", msg);
    if (msg.type === "recorder/statistics_during_period") return delay(stats(msg) as T);
    return Promise.reject(new Error(`mock: ${msg.type} unbekannt`));
  },
  connection: {
    subscribeMessage: async (cb: any, msg: any) => {
      setTimeout(() => cb({ type: msg.forecast_type, forecast: msg.forecast_type === "hourly" ? hourly() : daily }), 200);
      return async () => undefined;
    },
  },
};

(window as any).mockHass = hass;
