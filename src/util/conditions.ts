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
