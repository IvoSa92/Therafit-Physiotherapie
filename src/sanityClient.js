require("dotenv").config();
const { createClient } = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");

// Sanity client initialisieren
const client = createClient({
  projectId: "", // Dein Sanity-Projekt-ID
  dataset: "", // Dein Sanity-Datensatz
  apiVersion: "", // oder dein bevorzugtes Datum (Im Format: YYYY-MM-DD)
  useCdn: false, // Optional: CDN für schnellere Ladezeiten (auf true=schneller)
});

const builder = imageUrlBuilder(client);

// Funktion, um URLs für Bilder zu erstellen
function urlFor(source) {
  return builder.image(source);
}

module.exports = { client, urlFor };
