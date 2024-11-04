const { toHTML } = require("@portabletext/to-html");

const serializers = {
  // For adding classes to a span element
  marks: {
    class: ({ children, value }) => {
      // Verarbeite die Klasse korrekt und rendere als <span> mit der CSS-Klasse
      return `<span class="${value.className || ""}">${children}</span>`;
    },

    // Serializer für Links mit Unterstützung für "In neuem Tab öffnen"
    link: ({ children, value }) => {
      const target = value.blank
        ? 'target="_blank" rel="noopener noreferrer"'
        : "";
      return `<a href="${value.href}" ${target}>${children}</a>`;
    },
  },

  // headings and other elements
  types: {
    block: (props) => {
      const { node } = props;
      const { style, children } = node;
      const className = node.className ? ` class="${node.className}"` : "";

      if (style === "h1") return `<h1${className}>${children}</h1>`;
      if (style === "h2") return `<h2${className}>${children}</h2>`;
      if (style === "h3") return `<h3${className}>${children}</h3>`;
      if (style === "h4") return `<h4${className}>${children}</h4>`;

      return BlockContent.defaultSerializers.types.block(props);
    },

    // to insert SVGs from URL
    svgIcon: ({ value }) => {
      const { url, alt, class: className } = value;
      if (!url) return ""; // No URL, no Icon
      return `<img src="${url}" alt="${alt || ""}" class="${
        className || ""
      }" />`;
    },

    // to insert SVG from disc
    svgCode: ({ value }) => {
      const { code, class: className } = value;
      if (!code) return ""; // Kein Code
      return `<div class="${className || ""}">${code}</div>`;
    },

    // Verarbeite den `imageWithClass`-Block, um das Bild korrekt zu rendern
    imageWithClass: ({ value }) => {
      const { asset, alt, className, customStyles } = value;

      if (!asset || !asset.url) return ""; // Kein Bild verfügbar, nichts rendern

      return `<img src="${asset.url}" alt="${alt || ""}" class="${
        className || ""
      }" style="${customStyles || ""}" />`;
    },
  },
};

module.exports = function (body) {
  return toHTML(body, { components: serializers });
};
