// HA-Wetterzustände → deutsche Texte und Hintergrundverlauf

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

export type Mood = "clear" | "cloudy" | "rain" | "snow" | "fog" | "storm";

export function mood(c: string | undefined): Mood {
  switch (c) {
    case "sunny":
    case "clear-night":
    case "partlycloudy":
      return "clear";
    case "rainy":
    case "pouring":
    case "hail":
      return "rain";
    case "snowy":
    case "snowy-rainy":
      return "snow";
    case "fog":
      return "fog";
    case "lightning":
    case "lightning-rainy":
    case "exceptional":
      return "storm";
    default:
      return "cloudy";
  }
}

const GRADIENTS: Record<Mood, [string, string]> = {
  clear: ["#2f6fc4", "#79b4f2"],
  cloudy: ["#56677a", "#8496a8"],
  rain: ["#3f4e5f", "#66788b"],
  snow: ["#7f93a8", "#b8c6d4"],
  fog: ["#7c8389", "#a9aeb2"],
  storm: ["#262a34", "#4a5060"],
};

const NIGHT: Record<Mood, [string, string]> = {
  clear: ["#0b1430", "#2a3a6a"],
  cloudy: ["#1c232d", "#3a4554"],
  rain: ["#18202a", "#323e4c"],
  snow: ["#2b3644", "#4f5e70"],
  fog: ["#262b30", "#474d53"],
  storm: ["#11131a", "#2c3040"],
};

export function background(c: string | undefined, night: boolean): string {
  const [a, b] = (night ? NIGHT : GRADIENTS)[mood(c)];
  return `linear-gradient(180deg, ${a} 0%, ${b} 100%)`;
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
