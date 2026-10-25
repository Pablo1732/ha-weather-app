# Wetter-App für Home Assistant

Wetter-App als Lovelace-Karte, angelehnt an Apple Wetter: aktuelle Werte der eigenen Wetterstation, Vorhersage aus einer `weather.*`-Entität und Historie mit einem gemeinsamen Zeitraum-Wähler. Schlank gebaut, damit sie auch auf schwachen Geräten (z. B. Echo Show) flüssig läuft.

> **Status:** in Entwicklung (Schritt 2 von 5). Historie-Diagramme und Einzelkarten folgen.

## Features
- Tabs **Vorhersage** / **Historie**
- Stundenleiste und Tagesliste mit Temperaturbalken
- Tagesdetail per Klick: Stundendiagramm für Temperatur, Niederschlag, Wind — heute inkl. gemessener Werte der Station
- Kacheln: Wind-Kompass, gefühlte Temperatur, Niederschlag (24 h gemessen/erwartet), Luftdruck-Tendenz, Feuchte/Taupunkt, UV, Sonnenbogen, Mondphase
- Gemeinsamer Zeitraum: Tag · 7 Tage · 30 Tage · Monat · Jahr, mit ‹ › blättern
- Dezenter Hintergrund passend zu Wetter und Tag/Nacht, sonst HA-Theme-Farben
- Nur offizielle HA-Schnittstellen (`weather/subscribe_forecast`, `recorder/statistics_during_period`) → robust bei HA-Updates
- Historie über Langzeitstatistik → auch Jahresansichten laden schnell

## Voraussetzungen
- Home Assistant 2025.1 oder neuer
- Eine `weather.*`-Entität mit Stunden- und Tagesvorhersage
- Optional: Sensoren einer Wetterstation mit `state_class` (für die Historie)

## Installation (HACS)
1. HACS → ⋮ → **Benutzerdefinierte Repositories** → `https://github.com/Pablo1732/ha-weather-app`, Typ **Dashboard**
2. „Wetter-App" installieren, Browser-Cache leeren / App neu laden
3. Karte per YAML einfügen (siehe unten), am besten in einer **Panel**-Ansicht

## Konfiguration
```yaml
type: custom:wetter-app
weather: weather.weather_fusion_ai_kresslingweg
name: Kresslingweg
layout: page
sun: sun.sun
moon: sensor.moon_phase
sensors:
  temperature: sensor.wetterstat_brotzeithutte_outdoor_temperature
  humidity: sensor.wetterstat_brotzeithutte_humidity
  dewpoint: sensor.wetterstat_brotzeithutte_dewpoint
  feels_like: sensor.wetterstat_brotzeithutte_feels_like_temperature
  pressure: sensor.wetterstat_brotzeithutte_relative_pressure
  rain_total: sensor.wetterstat_brotzeithutte_total_rain
  rain_rate: sensor.wetterstat_brotzeithutte_rain_rate
  wind_speed: sensor.wetterstat_brotzeithutte_wind_speed
  wind_gust: sensor.wetterstat_brotzeithutte_wind_gust
  wind_direction: sensor.wetterstat_brotzeithutte_wind_direction
  uv: sensor.wetterstat_brotzeithutte_uv_index
  solar: sensor.wetterstat_brotzeithutte_solar_radiation
```

| Option | Pflicht | Bedeutung |
|---|---|---|
| `weather` | ja | Vorhersage-Entität |
| `name` | nein | Ortsname im Kopf |
| `layout` | nein | `page` = ganze Fläche ohne Rundung (für Panel-Ansicht), Standard `card` |
| `sun` | nein | `sun.sun` für Tag/Nacht-Hintergrund |
| `moon` | nein | Mondphasen-Sensor |
| `sensors.*` | nein | Stationssensoren; fehlende Werte werden ausgeblendet |
| `sensors.rain_total` | nein | Gesamtregen-Zähler (`total_increasing`) — Regenmengen werden daraus berechnet |
| `sync_group` | nein | Karten mit gleicher Gruppe teilen den Historie-Zeitraum (Standard: `default`) |
| `default_range` | nein | Start-Zeitraum: `day`, `7d`, `30d`, `month`, `year` (Standard: `7d`) |

## Entwicklung
- `npm install`, dann `npm run dev` → Testseite mit Beispieldaten auf http://localhost:5173
- `npm run build` → `dist/wetter-app.js`
- Build-Ziel ES2019/Chrome 70 wegen älterer Android-WebViews

## Bekannte Grenzen
- Nur Deutsch, Regen in l/m²
- Kein visueller Editor (nur YAML)
