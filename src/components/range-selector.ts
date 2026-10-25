import { css, html } from "lit";
import { PRESETS } from "../data/range";
import type { RangeController } from "../data/range-sync";

/** Zeitraum-Leiste: Presets + ‹ Label › zum Blättern. */
export function renderRangeSelector(ctrl: RangeController) {
  const r = ctrl.range;
  return html`
    <div class="range">
      <div class="seg" role="tablist">
        ${PRESETS.map(
          (p) => html`<button role="tab" aria-selected=${p.id === r.preset}
            class=${p.id === r.preset ? "on" : ""}
            @click=${() => ctrl.set({ preset: p.id, offset: 0 })}>${p.label}</button>`,
        )}
      </div>
      <div class="nav">
        <button aria-label="Zurück" @click=${() => ctrl.set({ preset: r.preset, offset: r.offset - 1 })}>‹</button>
        <span>${r.label}</span>
        <button aria-label="Vor" ?disabled=${r.offset >= 0}
          @click=${() => ctrl.set({ preset: r.preset, offset: r.offset + 1 })}>›</button>
      </div>
    </div>
  `;
}

export const rangeStyles = css`
  .range { display: flex; flex-direction: column; gap: 10px; align-items: stretch; }
  .seg {
    display: flex; background: rgba(0, 0, 0, 0.22); border-radius: 12px; padding: 3px; gap: 2px;
  }
  .seg button {
    flex: 1; border: 0; background: none; color: inherit; font: inherit; font-size: 14px;
    padding: 7px 4px; border-radius: 9px; cursor: pointer; opacity: 0.8; white-space: nowrap;
  }
  .seg button.on { background: rgba(255, 255, 255, 0.22); opacity: 1; font-weight: 600; }
  .nav { display: flex; align-items: center; justify-content: space-between; }
  .nav span { font-weight: 600; font-size: 16px; }
  .nav button {
    border: 0; background: rgba(255, 255, 255, 0.14); color: inherit; font-size: 22px; line-height: 1;
    width: 36px; height: 36px; border-radius: 50%; cursor: pointer;
  }
  .nav button[disabled] { opacity: 0.3; cursor: default; }
`;
