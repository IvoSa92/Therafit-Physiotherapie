const fs = require("fs");
const path = require("path");

const fontsDir = path.join(__dirname, "../src/assets/fonts");

// Konvertiere alle TTF Dateien
async function convertFonts() {
  const ttf2woff2 = await import("ttf2woff2");

  fs.readdirSync(fontsDir)
    .filter((file) => file.endsWith(".ttf"))
    .forEach((file) => {
      const input = fs.readFileSync(path.join(fontsDir, file));
      const output = ttf2woff2.default(input);
      const outputPath = path.join(fontsDir, file.replace(".ttf", ".woff2"));

      fs.writeFileSync(outputPath, output);
    });
}
