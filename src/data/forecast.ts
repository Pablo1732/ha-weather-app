import type { ReactiveController, ReactiveControllerHost } from "lit";
import type { ForecastItem, ForecastType, HomeAssistant } from "../types";

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
    this.error = undefined;
    this.unsub = hass.connection.subscribeMessage<{ forecast: ForecastItem[] | null }>(
      (msg) => {
        this.forecast = msg.forecast ?? [];
        this.host.requestUpdate();
      },
      { type: "weather/subscribe_forecast", forecast_type: this.type, entity_id: entity },
    );
    this.unsub.catch((err) => {
      this.error = err?.message ?? String(err);
      this.subscribedKey = undefined;
      this.host.requestUpdate();
    });
  }

  private stop(): void {
    const unsub = this.unsub;
    this.unsub = undefined;
    this.subscribedKey = undefined;
    unsub?.then((fn) => fn()).catch(() => undefined);
  }
}
