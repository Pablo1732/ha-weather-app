import type { ReactiveController, ReactiveControllerHost } from "lit";
import { isPreset, resolveRange, type RangePreset, type RangeState, type TimeRange } from "./range";

/**
 * Gemeinsamer Historie-Zeitraum: alle Karten mit gleicher `sync_group` sehen denselben Zeitraum.
 * Das gewählte Preset wird pro Gerät gemerkt (localStorage), der Versatz (‹ ›) nicht.
 */
const states = new Map<string, RangeState>();
const bus = new EventTarget();
const STORE_KEY = "wetter-app:range:";

function load(group: string, fallback: RangePreset): RangeState {
  let preset: RangePreset = fallback;
  try {
    const v = localStorage.getItem(STORE_KEY + group);
    if (isPreset(v)) preset = v;
  } catch {
    /* privater Modus o. Ä. — dann eben Standard */
  }
  return { preset, offset: 0 };
}

export function getRangeState(group: string, fallback: RangePreset = "7d"): RangeState {
  let s = states.get(group);
  if (!s) {
    s = load(group, fallback);
    states.set(group, s);
  }
  return s;
}

export function setRangeState(group: string, next: RangeState): void {
  const prev = states.get(group);
  states.set(group, next);
  if (prev?.preset !== next.preset) {
    try {
      localStorage.setItem(STORE_KEY + group, next.preset);
    } catch {
      /* egal */
    }
  }
  bus.dispatchEvent(new CustomEvent(group));
}

export class RangeController implements ReactiveController {
  private readonly onChange = () => this.host.requestUpdate();
  private group?: string;

  constructor(
    private host: ReactiveControllerHost,
    private groupOf: () => string,
    private fallback: () => RangePreset = () => "7d",
  ) {
    host.addController(this);
  }

  get state(): RangeState {
    return getRangeState(this.groupOf(), this.fallback());
  }

  get range(): TimeRange {
    return resolveRange(this.state);
  }

  set(next: RangeState): void {
    setRangeState(this.groupOf(), next);
  }

  hostConnected(): void {
    this.listen();
  }

  hostUpdated(): void {
    // Gruppe kann sich per Config-Änderung im Editor ändern
    if (this.group !== this.groupOf()) this.listen();
  }

  hostDisconnected(): void {
    if (this.group) bus.removeEventListener(this.group, this.onChange);
    this.group = undefined;
  }

  private listen(): void {
    this.hostDisconnected();
    this.group = this.groupOf();
    bus.addEventListener(this.group, this.onChange);
  }
}
