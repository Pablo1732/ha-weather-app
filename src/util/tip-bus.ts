// Immer nur ein Detail-Fenster offen: wer eins öffnet, meldet sich; alle anderen schließen ihres.
const EVENT = "wetter-app-tip";

export function tipOpened(source: object): void {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: source }));
}

/** Ruft close() auf, sobald irgendwo anders ein Detail-Fenster aufgeht. Liefert die Abmeldung. */
export function onOtherTip(self: object, close: () => void): () => void {
  const fn = (e: Event) => { if ((e as CustomEvent).detail !== self) close(); };
  window.addEventListener(EVENT, fn);
  return () => window.removeEventListener(EVENT, fn);
}
