// Immer nur ein Detail-Fenster offen: wer eins öffnet, meldet sich; alle anderen schließen ihres.
const EVENT = "wetter-app-tip";

export function tipOpened(source: object): void {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: source }));
}

/**
 * Ruft close() auf, sobald irgendwo anders ein Detail-Fenster aufgeht — mit inside() auch bei
 * Tippen/Klicken außerhalb dieses Elements (Touch hat kein „Maus verlässt“). Liefert die Abmeldung.
 */
export function onOtherTip(self: object, close: () => void, inside?: () => Element | null | undefined): () => void {
  const fn = (e: Event) => { if ((e as CustomEvent).detail !== self) close(); };
  const tap = (e: Event) => { const el = inside?.(); if (el && !e.composedPath().includes(el)) close(); };
  window.addEventListener(EVENT, fn);
  if (inside) window.addEventListener("pointerdown", tap, true);
  return () => {
    window.removeEventListener(EVENT, fn);
    window.removeEventListener("pointerdown", tap, true);
  };
}
