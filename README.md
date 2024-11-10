# Webseiten Template Dokumentation

Dieses Template ist ein vollständig anpassbares Webprojekt, das mit Eleventy (11ty) und Nunjucks aufgebaut ist. Es ist darauf ausgelegt, dynamische Inhalte über die Eleventy Engine zu rendern und als statische Webseite bereitzustellen. Das Template ist vorbereitet, um Sanity CMS als Headless CMS zu integrieren und den Blog darüber zu betreiben.

### Inhaltsverzeichnis:

1. Projektübersicht
2. Verzeichnisstruktur
3. Funktionsweise des Projekts
4. Einrichtung und Installation
5. Sanity CMS Integration
6. Wichtige Befehle

## 1. Projektübersicht

Dieses Projekt ist ein Template für die Erstellung von Websites mit Eleventy und Nunjucks, wobei Sanity CMS für die Verwaltung dynamischer Inhalte genutzt wird. Es generiert statische Seiten, die performant und flexibel sind. Das Ziel ist es, die Grundlage für zukünftige Webentwicklungsprojekte bereitzustellen und die Implementierung für Kundenprojekte zu erleichtern.

## 2. Verzeichnisstruktur ohne Blog-Integration

```
project-template/
|
|── src/
│   ├── _data/
│   │   └── client.js
│   ├── _includes/
│   │   ├── components/
│   │   └── layouts/
│   ├── assets/
│   │   ├── css/
│   │   ├── favicons/
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── js/
│   │   ├── sass/
│   │   └── svgs/
│   ├── config/
│   └── content/
│       ├── blog/
│       ├── pages/
│       └── content.json
├── .eleventy.js
├── .gitignore
├── LICENSE.md
├── README.md
├── package.json
├── package-lock.json
└── index.html
```

**src:** Hauptordner für alle Quellcode-Dateien

**_data/client.js:** Enthält Daten, die global eingesetzt werden können

**_includes:** Enthält die Komponenten und Layout-Templates für das Generieren von Header, Footer, Blog-Posts etc.

**assets:** Enthält CSS-Dateien, Favicons, Bilder und JavaScript-Dateien

**config:** Enthält die Konfigurationsdateien für CSS- und JS-Minifier, Server-Einstellungen und die Sitemap-Generierung

**content:** Enthält das Blog-Template, die HTML-Seiten, die generiert werden, und ein Template für neue HTML-Seiten

**.eleventy.js:** Hauptkonfigurationsdatei im Projekt, mit Integration von Plugins, Navigation, Filtern und Shortcodes. Auskommentierter Bereich für die Sanity-Integration

**package.json:** Listet alle Abhängigkeiten und Skripte auf, die für die Entwicklung und den Build-Prozess notwendig sind

## 3. Funktionsweise des Projekts

- **Vorlagenbasierte Entwicklung:**  
  Mit Nunjucks lassen sich Layouts und wiederverwendbare Codebausteine erstellen, die zu einer effizienteren Projektentwicklung beitragen.

- **Globale Daten und zentrale Konfigurationen:**  
  Mithilfe des `src/_data/`-Ordners sind Daten für das gesamte Projekt zugänglich, was die Verwaltung und Anpassung erleichtert.

- **Medienoptimierung und Responsive Design:**  
  SASS sorgt für flexible und skalierbare Stile, die eine Anpassung an verschiedene Geräte ermöglichen.

- **Plug-in-Unterstützung:**  
  Das Kit umfasst Plugins zur HTML/CSS-Minifizierung und automatischen Sitemap-Generierung, was die SEO-Optimierung unterstützt und die Ladezeiten der Website verbessert.

- **Einfache Bereitstellung:**  
  Dank der vollständigen Vorstrukturierung der Verzeichnisse und Konfigurationsdateien ist eine problemlose Bereitstellung der fertigen Website möglich.

## 4. Einrichtung und Installation

### Installation der Abhängigkeiten
Führe den Befehl `npm install` aus, um alle benötigten Projektabhängigkeiten zu installieren und das Entwicklungsumfeld vorzubereiten.

### Start des Entwicklungsservers
Mit `npm start` wird der lokale Entwicklungsserver gestartet, wodurch du eine Live-Vorschau deiner Änderungen erhältst und effizient arbeiten kannst.

### Globale Kundendaten anpassen
In der Datei `admin/client.js` können die spezifischen Kundendaten eingetragen werden, die im gesamten Projekt global verfügbar sind.

### Globale Styles definieren
Passe die globalen Stile in der Datei `src/assets/sass/root.scss` an, um grundlegende Designmerkmale und Farbvariablen für dein Projekt festzulegen.

### Seitenbezogene SCSS-Dateien
Jede HTML-Seite verfügt über eine eigene zugehörige SCSS-Datei, die dir ermöglicht, spezifische Styles einfach zu erstellen und anzupassen.

### Neue HTML-Seiten erstellen
Um neue HTML-Seiten zu generieren (z. B. für eine Galerie-Seite), verwende die Vorlage `content/pages/_template.txt` als Ausgangspunkt und passe sie nach deinen Anforderungen an.

## 5. Integration von Sanity CMS

1. Erstelle auf [Sanity.com](https://sanity.com) ein Profil und ein neues Projekt.
2. Installiere Sanity mit `npm create sanity@latest`.
3. Folge den Anweisungen im Terminal, um deinen Account zu erstellen oder dich einzuloggen.
4. Wähle als Dataset "Default" und bestätige den vorgeschlagenen Output Path.
5. Wähle das Schema-Template "Clean", da eigene Templates hinzugefügt werden.
6. Entscheide dich gegen TypeScript.
7. Verwende npm als Package Manager.
8. Gehe in das erstellte Verzeichnis des Blogs und starte Sanity Studio mit `npm run dev`.
9. Melde dich im Sanity Studio mit deinem Sanity-Account an und erstelle Blogbeiträge.
10. Füge die Dateien `portableTextSerializer.js`, `SanityPosts.js`, `SanityClient.js` in deinen `src`-Ordner hinzu. [Dateien herunterladen](https://drive.google.com/drive/folders/11He3hRDpWARKGY6bHyg9QlcpS2Tq6k2t?usp=drive_link)
11. Passe in der `SanityClient.js` die `projectId`, das `dataset` und die `apiVersion` an.
12. Lasse die Dateien `SanityPosts.js` und `portableTextSerializer.js` unverändert.
13. Ergänze die Dateien in `src/schemas` mit den Schema-Dateien (`blockContent.js`, `post.js`, `author.js`, `category.js`, `index.js`). [Schema-Dateien herunterladen](https://drive.google.com/drive/folders/11SdPAd4boq3l2EyNmhJCQs22Dziclo3Q)
14. Installiere die notwendigen npm-Pakete: `npm install @sanity/image-url @portabletext/to-html moment`.
15. Entkommentiere den Sanity-Bereich in der Datei `.eleventy.js` und füge die erforderlichen Anforderungen hinzu.
16. Verwende `npx sanity deploy`, um das Studio online zugänglich zu machen.
17. Bearbeite `base.html`, um den Keyword-Bereich im `<head>` zu aktivieren.

## 6. Wichtige Befehle

Hier sind alle relevanten Befehle, die für die Arbeit mit diesem Template wichtig sind:

- **Installation der Abhängigkeiten:**  
  ```bash
  npm install
  ```
  Installiert alle Projektabhängigkeiten.

- **Start des Entwicklungsservers:**  
  ```bash
  npm start
  ```
  Startet den lokalen Entwicklungsserver für eine Live-Vorschau.

- **Sanity Studio starten (Im Sanity Verzeichnis):**  
  ```bash
  npm run dev
  ```
  Startet Sanity Studio lokal.

- **Sanity Studio bereitstellen:**  
  ```bash
  npx sanity deploy
  ```
  Veröffentlicht das Sanity Studio online.

- **Weitere npm-Pakete installieren:**  
  ```bash
  npm install @sanity/image-url @portabletext/to-html moment 
  ```
  Installiert zusätzliche npm-Pakete, die für Sanity-Funktionen benötigt werden.



---


