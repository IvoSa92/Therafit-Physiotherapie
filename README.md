BlackForest Webcraft Template – Dokumentation

Dieses Template ist ein vollständig anpassbares Webprojekt, das mit Eleventy (11ty) und Nunjucks aufgebaut ist. Es ist darauf ausgelegt, dynamischen Inhalt mit Sanity CMS zu integrieren und wird als statische Website bereitgestellt.

Inhaltsverzeichnis

    1.	Projektübersicht
    2.	Verzeichnisstruktur
    3.	Funktionsweise des Projekts
    4.	Einrichtung und Installation
    5.	Sanity CMS Integration
    6.	Wichtige Befehle
    7.	Anleitung zur Nutzung als Template

1. Projektübersicht

Dieses Projekt ist ein Template für die Erstellung von Websites mit Eleventy und Nunjucks, wobei Sanity CMS für die Verwaltung dynamischer Inhalte genutzt wird. Es generiert statische Seiten, die performant und flexibel sind. Das Ziel ist es, die Grundlage für zukünftige Webentwicklungsprojekte bereitzustellen und die Implementierung für Kundenprojekte zu erleichtern.

2. Verzeichnisstruktur

Eine Übersicht über die wichtigsten Ordner und Dateien im Projekt:

    •	src: Der Hauptordner für alle Quellcode-Dateien.
    •	_data: Enthält globale Daten, die in allen Templates verfügbar sind (z.B. Website-Informationen und Sanity-Daten).
    •	admin: Dashboard für die CMS-Integration (wird hauptsächlich für Sanity CMS verwendet).
    •	assets: Enthält statische Dateien wie CSS, JavaScript, Bilder und Schriften.
    •	css: Alle CSS-Dateien und Stylesheets.
    •	images: Bilder, Icons und andere Medienelemente.
    •	js: JavaScript-Dateien für Interaktionen und Funktionen.
    •	fonts: Schriftdateien, die auf der Website verwendet werden.
    •	layouts: Nunjucks-Layouts, die für verschiedene Seitentypen verwendet werden.
    •	base.html: Das Hauptlayout, das als Grundlage für alle Seiten dient.
    •	content: Hier sind alle Inhaltsseiten als Nunjucks-Templates gespeichert (z.B. Startseite, Blog, Kontaktseite).
    	•	components: Wiederverwendbare Nunjucks-Komponenten, wie Header, Footer, usw.
    •	.eleventy.js: Die Konfigurationsdatei für Eleventy. Hier werden Sammlungen definiert und globale Filter und Shortcodes registriert.
    •	package.json: Listet alle Abhängigkeiten und Skripte auf, die für die Entwicklung und den Build-Prozess notwendig sind.
    •	sanityClient.js: Konfigurationsdatei für die Anbindung an Sanity CMS.

3. Funktionsweise des Projekts

   • Eleventy: Ein statischer Site-Generator, der die Inhalte aus den Templates und den Datenquellen in HTML-Dateien rendert.
   • Nunjucks: Eine Template-Engine, die für die Erstellung der Seitenstruktur verwendet wird.
   • Sanity CMS: Dient zur Verwaltung dynamischer Inhalte wie Blogposts oder Projekte.
   • CSS und JavaScript: Statische Dateien für das Styling und die Interaktivität der Website.
   • Bilder und Assets: Alle Bild- und Medienressourcen werden im assets-Ordner gespeichert und optimiert ausgegeben.

4. Einrichtung und Installation

Führe die folgenden Schritte aus, um das Projekt lokal zu installieren und zum Laufen zu bringen:

    1.	Repository klonen:
    git clone <URL deines Repos>
    cd <Projektordner>

2.  Abhängigkeiten installieren:
    Stelle sicher, dass Node.js installiert ist, und führe dann folgenden Befehl aus:
    npm install

        3.	Entwicklungsserver starten:
        npm start

        Dies startet den Eleventy-Entwicklungsserver und kompiliert die Dateien automatisch bei Änderungen.

        4.	Sanity-Projekt einrichten:
        •	Gehe zu Sanity.io und erstelle ein neues Projekt.
        •	Kopiere die Projekt-ID und andere relevante Konfigurationsdaten in deine .env-Datei.
        5.	Sanity-Daten abrufen:

    Erstelle eine JavaScript-Datei im \_data-Ordner, um die Inhalte aus Sanity zu laden.

3.  Sanity CMS Integration

    • Projekt-ID: Diese ist erforderlich, um die Inhalte aus deinem Sanity-Projekt abzurufen. Du kannst die Projekt-ID in der Sanity-Dashboard-Ansicht finden.
    • sanityClient.js: Diese Datei konfiguriert die Verbindung zu Sanity. Die API-Details werden hier festgelegt.
    • Datenstruktur: Stelle sicher, dass die Datenmodelle in Sanity mit den in Eleventy erwarteten Strukturen übereinstimmen.

4.  Wichtige Befehle

    • Starten des Entwicklerservers: npm start
    • Build für die Produktion: npm run build
    • Sanity Studio starten: sanity start (im Sanity-Projektverzeichnis)
    • Sanity-Daten deployen: sanity deploy

5.  Anleitung zur Nutzung als Template

        1.	Als Template verwenden:

    Wenn du dieses Projekt als Template für neue Projekte verwenden möchtest, kannst du es auf GitHub als “Template Repository” markieren. 2. Anpassung für Kundenprojekte:
    • Aktualisiere die globalen Daten in \_data.
    • Passe die Layouts und Stylesheets an die Bedürfnisse des Kunden an.
    • Integriere spezielle Inhalte über Sanity CMS oder ersetze Dummy-Inhalte durch echte Daten.

Besondere Hinweise

    •	Caching und Performance: Verwende Caching-Strategien und minimiere CSS und JavaScript für die bestmögliche Performance.
    •	SEO-Optimierung: Achte darauf, dass Metatags und beschreibende Inhalte für eine gute Sichtbarkeit in Suchmaschinen gepflegt sind.
    •	Responsive Design: Stelle sicher, dass die Website auf allen Geräten gut aussieht.
