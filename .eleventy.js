// Imports
const pluginEleventyNavigation = require("@11ty/eleventy-navigation");
const pluginMinifier = require("@sherby/eleventy-plugin-files-minifier");
const pluginSitemap = require("@quasibit/eleventy-plugin-sitemap");

// Configs
const configCss = require("./src/config/css");
const configJs = require("./src/config/javascript");
const configSitemap = require("./src/config/sitemap");
const configServer = require("./src/config/server");
const eleventyPluginSharpImages = require("@codestitchofficial/eleventy-plugin-sharp-images");

//Sanity
/*
const { client, urlFor } = require("./src/sanityClient");
const fetchSanityPosts = require("./src/sanityPosts");
const { toHTML } = require("@portabletext/to-html");
const moment = require("moment");
const portableTextSerializer = require("./src/portableTextSerializer");

const fs = require("fs");
const path = require("path");

// Funktion zum rekursiven Löschen eines Ordners
function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const currentPath = path.join(folderPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteFolderRecursive(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(folderPath);
  }
}
*/
// Other
const filterPostDate = require("./src/config/postDate");
const isProduction = configServer.isProduction;

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/images/");
  eleventyConfig.addWatchTarget("./src/assets/css/");
  /**=====================================================================
          EXTENSIONS - Recognising non-default languages as templates 
    =======================================================================*/
  /** https://www.11ty.dev/docs/languages/custom/ */

  /**
   *  CSS EXTENSION
   *  Setting up CSS files to be recognised as aN eleventy template language. This allows our minifier to read CSS files and minify them
   */
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", configCss);

  /**
   *  JS EXTENSION
   *  Sets up JS files as an eleventy template language, which are compiled by esbuild. Allows bundling and minification of JS
   */
  eleventyConfig.addTemplateFormats("js");
  eleventyConfig.addExtension("js", configJs);
  /**=====================================================================
                                END EXTENSIONS
    =======================================================================*/

  /**=====================================================================
                  PLUGINS - Adds additional eleventy functionality 
    =======================================================================*/
  /** https://www.11ty.dev/docs/plugins/ */

  /**
   *  ELEVENTY NAVIGATION
   *  Sets up the eleventy navigation plugin for a scalable navigation as used in _includes/components/header.html
   *  https://github.com/11ty/eleventy-navigation
   */
  eleventyConfig.addPlugin(pluginEleventyNavigation);

  /**
   *  AUTOMATIC SITEMAP GENERATION
   *  Automatically generate a sitemap, using the domain in _data/client.json
   *  https://www.npmjs.com/package/@quasibit/eleventy-plugin-sitemap
   */
  eleventyConfig.addPlugin(pluginSitemap, configSitemap);

  // SHARP IMAGES
  eleventyConfig.addPlugin(eleventyPluginSharpImages, {
    urlPath: "/assets/images/",
    outputDir: "./public/assets/images/",
    formats: ["webp", "jpeg"],
    createCommonJs: true,
  });

  /**
   *  MINIFIER
   *  When in production ("npm run build" is ran), minify all HTML, CSS, JSON, XML, XSL and webmanifest files.
   *  https://github.com/benjaminrancourt/eleventy-plugin-files-minifier
   */
  if (isProduction) {
    eleventyConfig.addPlugin(pluginMinifier);
  }
  /**=====================================================================
                                END PLUGINS
    =======================================================================*/

  /**======================================================================
       PASSTHROUGHS - Copy source files to /public with no 11ty processing
    ========================================================================*/
  /** https://www.11ty.dev/docs/copy/ */

  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/favicons");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/svgs");
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/_redirects");
  eleventyConfig.addPassthroughCopy("./src/_headers");
  eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "/robots.txt" });
  eleventyConfig.addPassthroughCopy("src/admin/");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  /**=====================================================================
                              END PASSTHROUGHS
    =======================================================================*/

  /**======================================================================
               FILTERS - Modify data in template files at build time
    ========================================================================*/
  /** https://www.11ty.dev/docs/filters/ */

  /**
   *  Converts dates from JSDate format (Fri Dec 02 18:00:00 GMT-0600) to a locale format.
   *  Use - {{ "DATE GOES HERE" | postDate }}
   *  https://moment.github.io/luxon/api-docs/index.html#datetime
   */
  eleventyConfig.addFilter("postDate", filterPostDate);
  eleventyConfig.addFilter("formatDate", (date) => {
    return moment(date).format("DD.MM.YYYY");
  });

  //Sanity

  /*
  eleventyConfig.addFilter("portableTextToHtml", (body) => {
    return portableTextSerializer(body);
  });

  // Sammlungen von Blogbeiträgen aus Sanity holen
  eleventyConfig.addCollection("sanityPosts", async () => {
    const posts = await fetchSanityPosts();
    return posts.map((post) => {
      post.url = `/blog/${post.slug.current}/`;
      return post;
    });
  });

  // Featured Posts von Sanity holen
  eleventyConfig.addCollection("featuredPosts", async () => {
    const posts = await fetchSanityPosts();
    return posts
      .filter((post) => post.featured === true)
      .map((post) => {
        post.url = `/blog/${post.slug.current}/`;
        return post;
      });
  });

  // Bilder mit bestimmter Breite laden
  eleventyConfig.addFilter("urlForWidth", (image, width) => {
    return urlFor(image).width(width).url();
  });

  // Shortcode für das aktuelle Jahr
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Vor dem Build-Prozess den Ordner "public" löschen
  eleventyConfig.on("beforeBuild", () => {
    const outputDir = path.resolve(__dirname, "public");
    deleteFolderRecursive(outputDir);
    console.log(outputDir);
  });

  */

  /**=====================================================================
                                    END FILTERS
    =======================================================================*/

  /**======================================================================
                  SHORTCODES - Output data using JS at build time
    ========================================================================*/
  /** https://www.11ty.dev/docs/shortcodes/ */

  /**
   *  Gets the current year, which can be outputted with {% year %}. Used for the footer copyright. Updates with every build.
   *  Use - {% year %}
   */
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  /**=====================================================================
                                END SHORTCODES
    =======================================================================*/

  /**=====================================================================
                                SERVER SETTINGS
    =======================================================================*/
  eleventyConfig.setServerOptions(configServer);

  /**=====================================================================
                              END SERVER SETTINGS
    =======================================================================*/

  eleventyConfig.addGlobalData("buildTime", () => Date.now());

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
  };
};
