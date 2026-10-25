// Minimale HA-Typen — nur was wir wirklich nutzen, damit HA-Updates uns nicht berühren.

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, any>;
  last_changed: string;
  last_updated: string;
}

export interface HassConnection {
  subscribeMessage<T>(
    callback: (msg: T) => void,
    message: Record<string, unknown>,
  ): Promise<() => Promise<void>>;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callWS<T>(msg: Record<string, unknown>): Promise<T>;
  connection: HassConnection;
  locale?: { language: string };
  themes?: { darkMode?: boolean };
}

export interface ForecastItem {
  datetime: string;
  condition?: string;
  temperature?: number;
  templow?: number;
  precipitation?: number;
  precipitation_probability?: number;
  wind_speed?: number;
  wind_bearing?: number;
  wind_gust_speed?: number;
  humidity?: number;
  pressure?: number;
  cloud_coverage?: number;
  uv_index?: number;
  is_daytime?: boolean;
}

export type ForecastType = "daily" | "hourly" | "twice_daily";

export type StatPeriod = "5minute" | "hour" | "day" | "week" | "month";
export type StatType = "mean" | "min" | "max" | "change" | "state" | "sum";

export interface StatValue {
  start: number; // ms
  end: number; // ms
  mean?: number | null;
  min?: number | null;
  max?: number | null;
  change?: number | null;
  state?: number | null;
  sum?: number | null;
}

export type StatResult = Record<string, StatValue[]>;

/** Sensor-Zuordnung — alle optional, fehlende Bausteine werden ausgeblendet. */
export interface SensorConfig {
  temperature?: string;
  humidity?: string;
  dewpoint?: string;
  feels_like?: string;
  pressure?: string;
  rain_total?: string;
  rain_rate?: string;
  wind_speed?: string;
  wind_gust?: string;
  wind_direction?: string;
  uv?: string;
  solar?: string;
}

export interface WetterConfig {
  type: string;
  weather: string;
  name?: string;
  sensors?: SensorConfig;
  sun?: string;
  moon?: string;
  /** Karten mit gleicher Gruppe teilen sich den Historie-Zeitraum. */
  sync_group?: string;
  default_range?: string;
  /** Regen-/Schnee-Animation im Hintergrund */
  animations?: boolean;
}
