import type { ReactiveController, ReactiveControllerHost } from "lit";
import type { ForecastItem, ForecastType, HomeAssistant } from "../types";

/** Wartezeit nach fehlgeschlagenem Abo: 10 s, verdoppelt bis höchstens 5 min */
const RETRY_MIN = 10_000;
const RETRY_MAX = 300_000;

interface Host extends ReactiveControllerHost {
  hass?: HomeAssistant;
}

/**
 * Abonniert `weather/subscribe_forecast` (offizielle WS-API) solange die Karte im DOM ist.
 * HA pusht neue Vorhersagen selbst — kein Polling nötig.
 */
export class ForecastController implements ReactiveController {
  forecast?: ForecastItem[];
  error?: string;

  private unsub?: Promise<() => Promise<void>>;
  private subscribedKey?: string;
  private connected = false;
  private retryTimer?: number;
  private retryDelay = RETRY_MIN;

  constructor(
    private host: Host,
    private type: ForecastType,
    private entity: () => string | undefined,
  ) {
    host.addController(this);
  }

  hostConnected(): void {
    this.connected = true;
    this.sync();
  }

  hostDisconnected(): void {
    this.connected = false;
    this.stop();
  }

  /** Lit ruft das nach jedem Render auf — startet das Abo, sobald hass da ist. */
  hostUpdated(): void {
    this.sync();
  }

  private sync(): void {
    const hass = this.host.hass;
    const entity = this.entity();
    if (!this.connected || !hass || !entity) return;
    const key = `${entity}|${this.type}`;
    if (key === this.subscribedKey) return;
    this.stop();
    this.subscribedKey = key;
    const unsub = hass.connection.subscribeMessage<{ forecast: ForecastItem[] | null }>(
      (msg) => {
        this.forecast = msg.forecast ?? [];
        this.error = undefined;
        this.retryDelay = RETRY_MIN;
        this.host.requestUpdate();
      },
      { type: "weather/subscribe_forecast", forecast_type: this.type, entity_id: entity },
    );
    this.unsub = unsub;
    unsub.catch((err) => {
      if (this.unsub !== unsub) return; // altes Abo, inzwischen ersetzt
      this.error = err?.message ?? String(err);
      this.host.requestUpdate();
      // nicht sofort neu versuchen (sonst Endlosschleife), sondern mit wachsender Pause
      this.retryTimer = window.setTimeout(() => {
        if (this.unsub !== unsub) return;
        this.unsub = undefined;
        this.subscribedKey = undefined;
        this.sync();
      }, this.retryDelay);
      this.retryDelay = Math.min(RETRY_MAX, this.retryDelay * 2);
    });
  }

  private stop(): void {
    clearTimeout(this.retryTimer);
    const unsub = this.unsub;
    this.unsub = undefined;
    this.subscribedKey = undefined;
    unsub?.then((fn) => fn()).catch(() => undefined);
  }
}
