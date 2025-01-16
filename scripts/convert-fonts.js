const fs = require("fs");
const path = require("path");
const ttf2woff2 = require("ttf2woff2");

const fontsDir = path.join(__dirname, "../src/assets/fonts");

// Konvertiere alle TTF Dateien
fs.readdirSync(fontsDir)
  .filter((file) => file.endsWith(".ttf"))
  .forEach((file) => {
    const input = fs.readFileSync(path.join(fontsDir, file));
    const output = ttf2woff2(input);
    const outputPath = path.join(fontsDir, file.replace(".ttf", ".woff2"));

    fs.writeFileSync(outputPath, output);
    console.log(`Converted ${file} to ${file.replace(".ttf", ".woff2")}`);
  });
