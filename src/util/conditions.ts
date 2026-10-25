// HA-Wetterzustände und Mondphasen → deutsche Texte

const LABELS: Record<string, string> = {
  "clear-night": "Klar",
  cloudy: "Bewölkt",
  exceptional: "Unwetter",
  fog: "Nebel",
  hail: "Hagel",
  lightning: "Gewitter",
  "lightning-rainy": "Gewitter mit Regen",
  partlycloudy: "Teilweise bewölkt",
  pouring: "Starkregen",
  rainy: "Regnerisch",
  snowy: "Schnee",
  "snowy-rainy": "Schneeregen",
  sunny: "Sonnig",
  windy: "Windig",
  "windy-variant": "Windig und bewölkt",
};

export function conditionLabel(c: string | undefined): string {
  return (c && LABELS[c]) || "–";
}

// Farbton (RGB) je Wetterlage — nur halbtransparent über dem Theme-Hintergrund, daher dezent
const TINT_DAY: Record<string, string> = {
  sunny: "47,128,237", partlycloudy: "70,130,200", cloudy: "120,135,150", "windy-variant": "120,135,150",
  rainy: "75,110,155", pouring: "65,95,140", hail: "90,100,125", snowy: "160,180,205", "snowy-rainy": "130,150,175",
  fog: "150,155,160", lightning: "85,80,125", "lightning-rainy": "85,80,125", exceptional: "150,70,70", windy: "100,140,170",
};
const TINT_NIGHT = "35,50,100";

/** a = Deckkraft; ohne Angabe Standard für den oberen Verlauf */
export function tint(c: string | undefined, night: boolean, a = night ? 0.35 : 0.45): string {
  const rgb = night && (c === "sunny" || c === "clear-night" || c === "partlycloudy")
    ? TINT_NIGHT
    : (c && TINT_DAY[c]) || TINT_DAY.cloudy;
  return `rgba(${rgb},${a})`;
}

const MOON: Record<string, string> = {
  new_moon: "Neumond",
  waxing_crescent: "Zunehmende Sichel",
  first_quarter: "Erstes Viertel",
  waxing_gibbous: "Zunehmender Mond",
  full_moon: "Vollmond",
  waning_gibbous: "Abnehmender Mond",
  last_quarter: "Letztes Viertel",
  waning_crescent: "Abnehmende Sichel",
};

export function moonLabel(s: string | undefined): string {
  return (s && MOON[s]) || "–";
}
