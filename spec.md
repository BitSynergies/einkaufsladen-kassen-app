# Einkaufsladen Kassen-App — Spec

## Zielgruppe

Kinder im Alter von 3–5 Jahren. Das Kind bedient die Kasse gemeinsam mit einem Erwachsenen oder Geschwisterkind.

---

## Tech-Stack

- **Framework:** React
- **UI-Library:** MUI (Material UI)
- **Offline:** PWA (installierbar auf Tablet-Homescreen)
- **Hosting:** Railway.com
- **Sprache:** Deutsch

---

## Layout

Tablet-first (Querformat empfohlen). Zweigeteilte Ansicht:

| Bereich | Breite | Inhalt |
|---|---|---|
| Links | 70% | Produktraster (scrollbar) |
| Rechts | 30% | Einkaufsliste + Gesamtsumme + Bezahlen-Button |

---

## Produkte

- Quelle: JSON-Config-Datei (`products.json`)
- Darstellung: Emoji + Name (kein Preis auf dem Button)
- Buttongröße: ca. 1/9 des Bildschirms (3×3 Raster sichtbar, Rest scrollbar)
- Startinhalt: Obst und Gemüse mit verfügbaren Emojis

### Beispiel `products.json`

```json
[
  { "id": "apfel", "name": "Apfel", "emoji": "🍎", "preis": 1 },
  { "id": "banane", "name": "Banane", "emoji": "🍌", "preis": 1 },
  { "id": "karotte", "name": "Karotte", "emoji": "🥕", "preis": 2 },
  { "id": "tomate", "name": "Tomate", "emoji": "🍅", "preis": 1 },
  { "id": "brokkoli", "name": "Brokkoli", "emoji": "🥦", "preis": 2 },
  { "id": "erdbeere", "name": "Erdbeere", "emoji": "🍓", "preis": 3 },
  { "id": "zitrone", "name": "Zitrone", "emoji": "🍋", "preis": 1 },
  { "id": "paprika", "name": "Paprika", "emoji": "🫑", "preis": 2 },
  { "id": "trauben", "name": "Trauben", "emoji": "🍇", "preis": 3 }
]
```

Preise sind ganzzahlige Euro-Beträge (z.B. 1, 2, 3).

---

## Produktauswahl & Mengeneingabe

Beim Antippen eines Produkts:
1. Das Produkt wird ausgewählt (visuelles Feedback)
2. Mengenfeld erscheint (oder ist dauerhaft sichtbar) mit:
   - **−** Button links
   - Zahlenfeld (nur positive ganze Zahlen)
   - **+** Button rechts
3. **"Hinzufügen"**-Button fügt Artikel zur Einkaufsliste hinzu

---

## Einkaufsliste (rechte Seite)

- Listet alle hinzugefügten Artikel:
  - Emoji + Name | Anzahl × Preis = Teilsumme
  - **Entfernen**-Button pro Artikel
- Unten: **Gesamtsumme** in EUR
- Unten: **"Bezahlen"**-Button

---

## Bezahlen-Flow

1. Kind drückt **"Bezahlen"**
2. Kassenpiep-Sound wird abgespielt
3. Popup erscheint: _"Danke für den Kauf! 🎉"_
4. Nach ca. 2 Sekunden: Popup schließt sich, Einkaufsliste wird automatisch zurückgesetzt

---

## Design

- **Stil:** Spielerisch, bunt, kindgerecht
- **Hintergrund:** Warmes Creme (`#FFF8F0`)
- **Buttons:** Dicke, deutlich sichtbare Ränder, mittlere Rundung (`borderRadius: 12px`)
- **Icons/Emojis:** Groß, gut erkennbar
- **Typografie:** Nunito (Google Fonts), rund und kindgerecht
- **Farbwelt:**

| Rolle | Farbe | Hex |
|---|---|---|
| Primary (Akzent) | Warmes Grün | `#5B8C5A` |
| Secondary (Highlights) | Frisches Orange | `#F4845F` |
| Hintergrund | Creme | `#FFF8F0` |
| Surface/Cards | Helles Creme-Weiß | `#FFFDF7` |
| Text | Dunkelbraun | `#3B2F2F` |

### MUI Theme (`createTheme`)

- **Font:** Nunito (via Google Fonts import)
- **`borderRadius`:** 12 (MUI shape override)
- **AppBar:** Creme-Hintergrund (`#FFF8F0`), Höhe Standard (64px)
- **Buttons:** Dicke Outline-Variante für Produkte, `contained` für Hauptaktionen
- **Kaufen-Button:** `variant="contained"`, Primary-Farbe, größer (`size="large"`), volle Breite, hervorgehoben mit leichtem `boxShadow`

---

## AppBar

- Standard MUI AppBar (64px), Hintergrundfarbe Creme (`#FFF8F0`)
- Links: App-Logo (Platzhalter) + App-Titel
- Rechts: Settings-Icon (`SettingsIcon`) öffnet einen **Drawer von rechts** (schmal, ~280px)
- Drawer-Inhalt: Navigation zu **Settings** und **About**
- Settings und About öffnen sich jeweils als **Dialog (80% Bildschirmbreite)**

---

## Settings

- Erreichbar über AppBar → Drawer → "Einstellungen"
- Öffnet als Dialog (80% Bildschirmbreite)
- Zeigt einen einfachen JSON-Editor zum Bearbeiten von Produkten und Preisen
- Änderungen werden lokal gespeichert (localStorage) und überschreiben die Standard-Config
- Reset-Option: "Standardprodukte wiederherstellen"

---

## About

- Erreichbar über AppBar → Drawer → "Über die App"
- Öffnet als Dialog (80% Bildschirmbreite)
- Inhalt:
  - App-Name und Version
  - Kurzbeschreibung: Was ist diese App, wofür ist sie gedacht?
  - Entstehungsgeschichte: "Erstellt für meinen Sohn, inspiriert vom Kindermuseum München"
  - Credits / BitSynergies-Hinweis

---

## PWA

- `manifest.json` mit App-Name, Icon, Display-Mode `standalone`
- Service Worker für Offline-Funktionalität (alle Assets gecacht)
- Installierbar auf Tablet-Homescreen

---

## Footer

- Sichtbar nur auf der Hauptseite, unterhalb des Layouts
- Text: "Mit Liebe erstellt für unsere Kinder von [BitSynergies-Logo Platzhalter]"
- Logo/Text ist ein Link zu `https://bitsynergies.de`
- Dezent gestaltet, klein, nicht ablenkend

---

## Scrollverhalten

- **Linke Seite (Produkte):** Scrollbar, Raster bleibt innerhalb der Spalte
- **Rechte Seite (Einkaufsliste):** Artikelliste ist scrollbar, **Kaufen-Button bleibt immer am unteren Rand fixiert** (sticky)

---

## Dateistruktur (geplant)

```
/
├── public/
│   ├── manifest.json
│   ├── sounds/
│   │   └── beep.mp3
│   └── products.json        ← Standard-Config
├── src/
│   ├── components/
│   │   ├── AppBar.jsx
│   │   ├── NavigationDrawer.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── ProductButton.jsx
│   │   ├── ShoppingList.jsx
│   │   ├── ShoppingListItem.jsx
│   │   ├── QuantityInput.jsx
│   │   ├── PayButton.jsx
│   │   ├── ThankYouDialog.jsx
│   │   ├── SettingsDialog.jsx
│   │   ├── AboutDialog.jsx
│   │   └── Footer.jsx
│   ├── theme.js               ← MUI createTheme (Nunito, Farben, borderRadius)
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```
