require("dotenv").config();
const { createClient } = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");

// Sanity client initialisieren
const client = createClient({
  projectId: "hj51die0",
  dataset: "production",
  apiVersion: "2024-08-25", // oder dein bevorzugtes Datum
  useCdn: false, // Optional: CDN für schnellere Ladezeiten
});

const builder = imageUrlBuilder(client);

// Funktion, um URLs für Bilder zu erstellen
function urlFor(source) {
  return builder.image(source);
}

module.exports = { client, urlFor };
