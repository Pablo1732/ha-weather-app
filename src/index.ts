import { WetterApp } from "./cards/wetter-app";
import { WetterKompakt } from "./cards/wetter-kompakt";
import { WetterChart } from "./components/chart";
import { WetterDayDetail } from "./components/day-detail";
import { WetterHistory } from "./components/history";
import { WetterSky } from "./components/sky";

declare const __VERSION__: string;

const cards: [string, CustomElementConstructor, string, string][] = [
  ["wetter-app", WetterApp, "Wetter-App", "Komplette Wetter-App mit Vorhersage und Historie"],
  ["wetter-app-kompakt", WetterKompakt, "Wetter-App kompakt", "Das Wichtigste aus Vorhersage und Historie, antippen öffnet die Wetter-App"],
];

// interne Bausteine (nicht im Kartenwähler)
const parts: [string, CustomElementConstructor][] = [
  ["wetter-app-chart", WetterChart],
  ["wetter-app-day-detail", WetterDayDetail],
  ["wetter-app-history", WetterHistory],
  ["wetter-app-sky", WetterSky],
];

for (const [tag, cls] of [...parts, ...cards]) {
  // Doppelt geladene Ressource (z. B. alte + neue URL) darf nicht crashen
  if (!customElements.get(tag)) customElements.define(tag, cls);
}

const w = window as any;
w.customCards = w.customCards || [];
for (const [type, , name, description] of cards) {
  if (!w.customCards.some((c: any) => c.type === type)) {
    w.customCards.push({ type, name, description, preview: false });
  }
}

console.info(`%c WETTER-APP %c ${__VERSION__} `, "background:#2f6fc4;color:#fff;border-radius:3px 0 0 3px", "background:#555;color:#fff;border-radius:0 3px 3px 0");
