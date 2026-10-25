import { html } from "lit";
import {
  mdiCalendarArrowRight, mdiCalendarWeek, mdiChartBellCurveCumulative, mdiChartLine, mdiChevronLeft, mdiChevronRight,
  mdiArrowDownThin, mdiArrowUpThin, mdiClockOutline, mdiClose, mdiGauge, mdiMoonWaxingGibbous, mdiNavigation, mdiSunWireless, mdiTable, mdiThermometer,
  mdiThermometerLines, mdiWater, mdiWaterPercent, mdiWeatherPartlyCloudy, mdiWeatherPouring, mdiWeatherSunsetDown,
  mdiWeatherSunsetUp, mdiWeatherWindy,
} from "@mdi/js";

// MDI-Icons direkt als SVG statt <ha-icon>: das lädt HA erst nach, wenn eine eingebaute Karte es braucht
// → in einer Ansicht nur mit der Wetter-App blieben die Icons leer
const PATHS: Record<string, string> = {
  "mdi:arrow-down-thin": mdiArrowDownThin,
  "mdi:arrow-up-thin": mdiArrowUpThin,
  "mdi:calendar-arrow-right": mdiCalendarArrowRight,
  "mdi:calendar-week": mdiCalendarWeek,
  "mdi:chart-bell-curve-cumulative": mdiChartBellCurveCumulative,
  "mdi:chart-line": mdiChartLine,
  "mdi:chevron-left": mdiChevronLeft,
  "mdi:chevron-right": mdiChevronRight,
  "mdi:clock-outline": mdiClockOutline,
  "mdi:close": mdiClose,
  "mdi:gauge": mdiGauge,
  "mdi:moon-waxing-gibbous": mdiMoonWaxingGibbous,
  "mdi:navigation": mdiNavigation,
  "mdi:sun-wireless": mdiSunWireless,
  "mdi:table": mdiTable,
  "mdi:thermometer": mdiThermometer,
  "mdi:thermometer-lines": mdiThermometerLines,
  "mdi:water": mdiWater,
  "mdi:water-percent": mdiWaterPercent,
  "mdi:weather-partly-cloudy": mdiWeatherPartlyCloudy,
  "mdi:weather-pouring": mdiWeatherPouring,
  "mdi:weather-sunset-down": mdiWeatherSunsetDown,
  "mdi:weather-sunset-up": mdiWeatherSunsetUp,
  "mdi:weather-windy": mdiWeatherWindy,
};

/** nur der Pfad, für Icons innerhalb eines eigenen SVG */
export const mdiPath = (name: string) => PATHS[name] ?? "";

/** Größe wie bei ha-icon über --mdc-icon-size, Farbe = Textfarbe */
export const icon = (name: string, style = "") =>
  html`<svg class="mdi" viewBox="0 0 24 24" aria-hidden="true" style="width:var(--mdc-icon-size,24px);height:var(--mdc-icon-size,24px);fill:currentColor;flex:none;${style}"><path d=${PATHS[name] ?? ""}></path></svg>`;
