import { svg, type SVGTemplateResult } from "lit";

// Eigene, farbige Wetter-Icons (inline SVG): kein Icon-Font, keine HA-Interna, kein Nachladen.

const CLOUD = "M18 46a10 10 0 0 1 0-20a14 14 0 0 1 27-3a11.5 11.5 0 0 1 1 23z";

const sun = (cx = 32, cy = 32, r = 11) => svg`
  <g class="sun">
    <circle cx=${cx} cy=${cy} r=${r} fill="#FFD84D"/>
    ${[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
      const rad = (a * Math.PI) / 180;
      const x1 = cx + Math.cos(rad) * (r + 4), y1 = cy + Math.sin(rad) * (r + 4);
      const x2 = cx + Math.cos(rad) * (r + 9), y2 = cy + Math.sin(rad) * (r + 9);
      return svg`<line x1=${x1} y1=${y1} x2=${x2} y2=${y2} stroke="#FFD84D" stroke-width="3.5" stroke-linecap="round"/>`;
    })}
  </g>`;

const moon = (dx = 0, dy = 0, s = 1) => svg`
  <path transform="translate(${dx} ${dy}) scale(${s})" fill="#F2F4FA"
    d="M40 10a20 20 0 1 0 14 34A17 17 0 0 1 40 10z"/>`;

const cloud = (dx = 0, dy = 0, s = 1, fill = "#F4F6F9") => svg`
  <path transform="translate(${dx} ${dy}) scale(${s})" d=${CLOUD} fill=${fill}/>`;

const drops = (n: number) => svg`
  ${[...Array(n)].map((_, i) => {
    const x = 22 + i * (20 / Math.max(1, n - 1));
    return svg`<line x1=${x} y1="50" x2=${x - 3} y2="58" stroke="#4FB3FF" stroke-width="3" stroke-linecap="round"/>`;
  })}`;

const flakes = svg`${[22, 32, 42].map((x, i) => svg`<circle cx=${x} cy=${i % 2 ? 57 : 53} r="2.6" fill="#FFFFFF"/>`)}`;

const bolt = svg`<path d="M34 44l-7 10h6l-3 9l10-13h-6l3-6z" fill="#FFD84D"/>`;

const fog = svg`${[40, 47, 54].map((y, i) => svg`<line x1=${12 + i * 3} y1=${y} x2=${52 - i * 2} y2=${y} stroke="#E6E9EE" stroke-width="3.5" stroke-linecap="round"/>`)}`;

export function weatherIcon(condition: string | undefined, night = false): SVGTemplateResult {
  let body: SVGTemplateResult;
  switch (condition) {
    case "sunny":
      body = night ? moon(2, 6, 0.95) : sun();
      break;
    case "clear-night":
      body = moon(2, 6, 0.95);
      break;
    case "partlycloudy":
      body = svg`${night ? moon(10, -2, 0.7) : sun(42, 22, 9)}${cloud(-4, 6, 1)}`;
      break;
    case "cloudy":
    case "windy-variant":
      body = svg`${cloud(10, -4, 0.75, "#BFC6CF")}${cloud(-4, 6)}`;
      break;
    case "fog":
      body = svg`${cloud(0, -8, 0.95, "#D5DAE0")}${fog}`;
      break;
    case "rainy":
      body = svg`${cloud(0, -6)}${drops(3)}`;
      break;
    case "pouring":
      body = svg`${cloud(0, -6, 1, "#C9D0D8")}${drops(5)}`;
      break;
    case "hail":
      body = svg`${cloud(0, -6, 1, "#C9D0D8")}${flakes}`;
      break;
    case "snowy":
      body = svg`${cloud(0, -6)}${flakes}`;
      break;
    case "snowy-rainy":
      body = svg`${cloud(0, -6)}${drops(2)}<circle cx="32" cy="55" r="2.6" fill="#fff"/>`;
      break;
    case "lightning":
      body = svg`${cloud(0, -8, 1, "#9BA4AF")}${bolt}`;
      break;
    case "lightning-rainy":
    case "exceptional":
      body = svg`${cloud(0, -8, 1, "#9BA4AF")}${bolt}${drops(2)}`;
      break;
    case "windy":
      body = svg`${[24, 32, 40].map((y, i) => svg`<path d="M10 ${y}h${30 - i * 6}a6 6 0 1 0-6-6" fill="none" stroke="#E6E9EE" stroke-width="3.5" stroke-linecap="round"/>`)}`;
      break;
    default:
      body = cloud(0, 0, 1, "#BFC6CF");
  }
  return svg`<svg class="wicon" viewBox="0 0 64 64" aria-hidden="true">${body}</svg>`;
}
