import { css, html } from "lit";
import { icon } from "../util/mdi";

// Gemeinsame Optik aller Karten — ausschließlich HA-Theme-Variablen, damit es wie ein Teil von HA aussieht
// und jedes Theme (hell/dunkel/eigene) automatisch passt.

export const head = (name: string, title: string) =>
  html`<div class="head">${icon(name)}<span>${title}</span></div>`;

/** Farben der Wettersymbole (Variablen kommen vom Karten-Host) — auch für Bausteine ohne cardStyles */
export const iconStyles = css`
  .wicon { display: block; }
  .wicon .c1 { fill: var(--wa-cloud); }
  .wicon .c2 { fill: var(--wa-cloud2); }
  .wicon .mo { fill: var(--wa-moon); }
  .wicon .ln { stroke: var(--wa-cloud2); }
  .wicon .fl { fill: var(--wa-cloud2); }
`;

export const cardStyles = css`
  :host {
    --wa-text: var(--primary-text-color);
    --wa-text2: var(--secondary-text-color);
    --wa-divider: var(--divider-color, rgba(127, 127, 127, 0.2));
    --wa-accent: var(--primary-color);
    --wa-rain: var(--blue-color, #2196f3);
    --wa-track: rgba(127, 127, 127, 0.22);
    /* Icon-Farben fürs helle Theme, .dark überschreibt */
    --wa-cloud: #a3afbb;
    --wa-cloud2: #7d8b98;
    --wa-moon: #8e9bb0;
    color: var(--wa-text);
  }
  .dark {
    --wa-cloud: #e6eaef;
    --wa-cloud2: #aab4bf;
    --wa-moon: #e9edf5;
  }

  /* nur zwei Schriftstärken wie in HA: 400 und 500 */
  b { font-weight: 500; }

  .card {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    border-radius: var(--ha-card-border-radius, 12px);
    border: var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--wa-divider));
    box-shadow: var(--ha-card-box-shadow, var(--wa-card-shadow, none));
    padding: 12px 14px;
    min-width: 0;
    box-sizing: border-box;
  }

  .head {
    display: flex; align-items: center; gap: 8px;
    font-size: 14px; font-weight: 500; color: var(--wa-text2);
    margin-bottom: 6px;
  }
  .head .mdi { --mdc-icon-size: 18px; color: var(--state-icon-color, var(--wa-text2)); flex: none; }
  /* lange Titel in schmalen Kacheln (z. B. „Sonnenuntergang“) kürzen statt über den Rand laufen */
  .head span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  ${iconStyles}

  .warn {
    background: rgba(var(--rgb-warning-color, 255, 166, 0), 0.15); color: var(--wa-text);
    border-radius: var(--ha-card-border-radius, 12px); padding: 10px 14px; font-size: 14px;
  }
  .loading, .hint { color: var(--wa-text2); text-align: center; padding: 16px; font-size: 14px; }
`;

export interface LegendItem { label: string; color?: string; kind?: "box" | "line" | "dash"; opacity?: number }

/** Legende unter Diagrammen; Farbmarke und Text bleiben beim Umbrechen zusammen. */
export function legend(items: (LegendItem | false | undefined)[]) {
  return html`<div class="legend">${(items.filter(Boolean) as LegendItem[]).map((it) => html`<span><i class=${it.kind ?? "box"}
    style="${it.kind === "dash" ? "color" : "background"}:${it.color};opacity:${it.opacity ?? 1}"></i>${it.label}</span>`)}</div>`;
}

export const legendStyles = css`
  .legend { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 14px; font-size: 12px; color: var(--wa-text2); margin-top: 8px;
    padding-left: 6px; /* bündig mit dem Diagramm (linker Rand 6 px) */ }
  .legend span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
  .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; flex: none; }
  .legend i.line { height: 3px; }
  .legend i.dash { width: 11px; height: 3px; border-radius: 0; background: repeating-linear-gradient(90deg, currentColor 0 4px, transparent 4px 7px); }
`;
