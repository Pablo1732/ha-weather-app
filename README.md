# Wetter-App für Home Assistant

Wetter-App als Lovelace-Karte, angelehnt an Apple Wetter: aktuelle Werte der eigenen Wetterstation, Vorhersage aus einer `weather.*`-Entität und Historie mit gemeinsamem Zeitraum-Wähler. Dazu eine kompakte Dashboard-Karte, die per Antippen direkt an die passende Stelle der App springt. Schlank gebaut, damit alles auch auf schwachen Geräten (z. B. Echo Show 5) flüssig läuft.

## Features
- **Wetter-App** (`custom:wetter-app`)
  - Tabs **Vorhersage** / **Historie**
  - Stundenleiste und Tagesliste mit Temperaturbalken
  - Tagesdetail per Antippen: Stundendiagramm für Temperatur, Niederschlag, Wind (Tooltip mit Wettersymbol) — heute inkl. gemessener Stationswerte
  - Kacheln: Wind-Kompass, gefühlte Temperatur, Niederschlag (24 h gemessen/erwartet), Luftdruck-Tendenz, Feuchte/Taupunkt, UV, Sonnenbogen, Mondphase
  - Historie: Tag · 7 Tage · 30 Tage · Monat · Jahr, mit ‹ › blättern; Kennzahlen mit Rekorden, Temperatur, Niederschlag mit Summenlinie, Windrose, Luftdruck/Feuchte/Sonne/UV, Monatstabelle im Jahr
  - Vorhersage der nächsten Stunden an die gemessene Temperatur angeglichen (kein Sprung bei „Jetzt“); Tages-Min/Max von heute berücksichtigt bereits Gemessenes
  - Hintergrund und Animation passend zu Wetter und Tag/Nacht, helles und dunkles Theme
  - Querformat mit wenig Höhe (Echo Show 960×480, Handy quer): kompakter Kopf, Tabs in der Kopfzeile, Tagesdetail im Vollbild
- **Wetter-App kompakt** (`custom:wetter-app-kompakt`)
  - Jetzt-Wert, H/T, gefühlt; Vormittag/Nachmittag/Abend/Nacht (oder Stunden); nächste 3 Tage
  - Regen heute (seit 0 Uhr), Regen 7 Tage, Wind mit stärkster Böe heute
  - Antippen: Tag/Abschnitt öffnet das Tagesdetail direkt auf dem Dashboard, Rest springt in die Wetter-App (Historie-Zeitraum passend vorgewählt)
- Nur offizielle HA-Schnittstellen (`weather/subscribe_forecast`, `recorder/statistics_during_period`) → robust bei HA-Updates
- Historie aus der Langzeitstatistik → auch Jahresansichten laden schnell; zustandslos, nichts zu sichern

## Voraussetzungen
- Home Assistant 2025.1 oder neuer
- `weather.*`-Entität mit Stunden- und Tagesvorhersage
- Optional: Wetterstations-Sensoren mit `state_class` (für Historie und Messwerte)

## Installation (HACS)
1. HACS → ⋮ → **Benutzerdefinierte Repositories** → `https://github.com/Pablo1732/ha-weather-app`, Typ **Dashboard**
2. „Wetter-App“ herunterladen, Browser bzw. App neu laden (bei altem Stand: Cache leeren)
3. Wetter-App in eine eigene Ansicht (am besten **Panel**, `layout: page`), Kompakt-Karte aufs Dashboard

## Konfiguration

### Wetter-App
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
| `layout` | nein | `page` = ganze Fläche ohne Rundung (Panel-Ansicht), Standard `card` |
| `sun` | nein | `sun.sun` für Tag/Nacht |
| `moon` | nein | Mondphasen-Sensor |
| `sensors.*` | nein | Stationssensoren; fehlende Bausteine werden ausgeblendet |
| `sensors.rain_total` | nein | Gesamtregen-Zähler (`total_increasing`) — alle Regenmengen werden daraus berechnet |
| `animations` | nein | `false` = keine Hintergrund-Animation (Standard an) |
| `sync_group` | nein | Karten mit gleicher Gruppe teilen den Historie-Zeitraum (Standard `default`) |
| `default_range` | nein | Start-Zeitraum: `day`, `7d`, `30d`, `month`, `year` (Standard `7d`) |

### Wetter-App kompakt
Gleiche Optionen wie oben (`weather`, `name`, `sun`, `sensors` — am einfachsten kopieren), zusätzlich:

```yaml
type: custom:wetter-app-kompakt
weather: weather.weather_fusion_ai_kresslingweg
name: Kresslingweg
sun: sun.sun
navigation_path: /dashboard-handy/wetter
sensors:
  temperature: sensor.wetterstat_brotzeithutte_outdoor_temperature
  feels_like: sensor.wetterstat_brotzeithutte_feels_like_temperature
  rain_total: sensor.wetterstat_brotzeithutte_total_rain
  rain_rate: sensor.wetterstat_brotzeithutte_rain_rate
  wind_speed: sensor.wetterstat_brotzeithutte_wind_speed
  wind_gust: sensor.wetterstat_brotzeithutte_wind_gust
  wind_direction: sensor.wetterstat_brotzeithutte_wind_direction
```

| Option | Standard | Bedeutung |
|---|---|---|
| `navigation_path` | – | Ansicht mit der Wetter-App; ohne ist die Karte nicht antippbar |
| `open_button` | `false` | `true` = Knopf „Wetter-App öffnen“ statt antippbarer Bereiche |
| `forecast` | `periods` | `periods` = Vormittag/Nachmittag/Abend/Nacht, `hours` = einzelne Stunden |

| Antippen | Ergebnis |
|---|---|
| Kopfzeile | Wetter-App, Vorhersage |
| Tagesabschnitt / Stunde / Tag | Tagesdetail als Popup über dem Dashboard |
| Regen heute, Wind | Wetter-App, Historie „Tag“ |
| Regen 7 Tage | Wetter-App, Historie „7 Tage“ |

### Sprung-Links
Die Wetter-App wertet `?wetter=…` in der Adresse aus (auch für eigene Buttons nutzbar):

| Link | Öffnet |
|---|---|
| `?wetter=forecast` | Vorhersage |
| `?wetter=day:1:rain` | Tagesdetail morgen, Niederschlag (`temp`, `rain`, `wind`; `0` = heute) |
| `?wetter=history:30d` | Historie, Zeitraum `day`/`7d`/`30d`/`month`/`year` |

## FAQ
- **Änderungen nach Update nicht sichtbar?** Browser-Cache leeren; Version steht in der Browser-Konsole (`WETTER-APP <Version> (<Build-Zeit>)`).
- **Grauer Streifen neben der navbar-card?** navbar-card hält rechts/links pauschal 100 px frei → `layout: auto_padding: desktop_px:` auf die Navbar-Breite setzen (z. B. `88`).
- **„Regen heute“** zählt ab 0 Uhr, „Niederschlag“-Kachel der App die letzten 24 Std.
- **„Daten erst ab …“ in der Historie:** Statistik reicht nicht so weit zurück (Aufzeichnungsbeginn).
- **„Vorhersage nicht verfügbar“:** Entität liefert keine Stunden- oder Tagesvorhersage; die Karte versucht es automatisch erneut (10 s bis 5 min Abstand).

## Entwicklung
- `npm install`, dann `npm run dev` → Testseite mit Beispieldaten auf http://localhost:5173 (`?kompakt` für die Kompakt-Karte, Hell/Dunkel und Tag/Nacht umschaltbar)
- `npm run build` → `dist/wetter-app.js` (wird mit eingecheckt, HACS lädt diese Datei)
- Build-Ziel ES2019/Chrome 70 wegen älterer Android-WebViews

## Bekannte Grenzen
- Nur Deutsch, Regen in l/m²
- Kein visueller Editor (nur YAML)
- Windrose nur in der Historie der App, nicht in der Kompakt-Karte
