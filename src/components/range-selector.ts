import { css, html } from "lit";
import { icon } from "../util/mdi";
import { PRESETS } from "../data/range";
import type { RangeController } from "../data/range-sync";

/** Zeitraum-Leiste: Presets als Chips + ‹ Label › zum Blättern. */
export function renderRangeSelector(ctrl: RangeController) {
  const r = ctrl.range;
  return html`
    <div class="range">
      <div class="chips" role="tablist">
        ${PRESETS.map(
          (p) => html`<button role="tab" aria-selected=${p.id === r.preset}
            class=${p.id === r.preset ? "on" : ""}
            @click=${() => ctrl.set({ preset: p.id, offset: 0 })}>${p.label}</button>`,
        )}
      </div>
      <div class="nav">
        <button class="ib" aria-label="Zurück" @click=${() => ctrl.set({ preset: r.preset, offset: r.offset - 1 })}>
          ${icon("mdi:chevron-left")}
        </button>
        <span>${r.label}</span>
        <button class="ib" aria-label="Vor" ?disabled=${r.offset >= 0}
          @click=${() => ctrl.set({ preset: r.preset, offset: r.offset + 1 })}>
          ${icon("mdi:chevron-right")}
        </button>
      </div>
    </div>
  `;
}

export const rangeStyles = css`
  .range { display: flex; flex-direction: column; gap: 8px; }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
  .chips button {
    border: 1px solid var(--wa-divider); background: none; color: var(--wa-text); font: inherit; font-size: 13px;
    padding: 6px 11px; border-radius: 16px; cursor: pointer; white-space: nowrap;
  }
  .chips button.on {
    border-color: transparent; color: var(--wa-accent); font-weight: 500;
    background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.18);
  }
  .nav { display: flex; align-items: center; justify-content: space-between; }
  .nav span { font-weight: 500; font-size: 16px; }
  .ib {
    border: 0; background: none; color: var(--wa-text); width: 40px; height: 40px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
  }
  .ib:hover { background: rgba(127, 127, 127, 0.15); }
  .ib[disabled] { opacity: 0.3; cursor: default; background: none; }
`;
