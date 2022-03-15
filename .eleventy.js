const fs = require("fs/promises");
const path = require("path");
const htmlterser = require("html-minifier-terser");

const INPUT_DIR = "src";

const PATH_PREFIX = "/";
/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("assets");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addNunjucksAsyncShortcode("viteScriptTag", viteScriptTag);
  eleventyConfig.addNunjucksAsyncShortcode(
    "viteLinkStylesheetTags",
    viteLinkStylesheetTags
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "viteLinkModulePreloadTags",
    viteLinkModulePreloadTags
  );

  async function viteScriptTag(entryFilename) {
    const entryChunk = await getChunkInformationFor(entryFilename);
    return `<script type="module" src="${PATH_PREFIX}${entryChunk.file}"></script>`;
  }

  async function viteLinkModulePreloadTags(entryFilename) {
    const entryChunk = await getChunkInformationFor(entryFilename);
    if (!entryChunk.dynamicImports || entryChunk.dynamicImports.length === 0) {
      console.log(
        `The script for ${entryFilename} has no imports. Nothing to preload.`
      );
      return "";
    }
    const allPreloadTags = await Promise.all(
      entryChunk.dynamicImports.map(async importEntryFilename => {
        const chunk = await getChunkInformationFor(importEntryFilename);
        return `<link rel="preload" as="fetch" type="text/javasript" href="${PATH_PREFIX}${chunk.file}"></link>`;
      })
    );

    return allPreloadTags.join("\n");
  }

  async function viteLinkStylesheetTags(entryFilename) {
    const entryChunk = await getChunkInformationFor(entryFilename);
    if (!entryChunk.css || entryChunk.css.length === 0) {
      console.warn(`No css found for ${entryFilename} entry. Is that correct?`);
      return "";
    }
    return entryChunk.css
      .map(
        cssFile =>
          `<link rel="stylesheet" href="${PATH_PREFIX}${cssFile}"></link>`
      )
      .join("\n");
  }

  async function getChunkInformationFor(entryFilename) {
    if (!entryFilename) {
      throw new Error(
        "You must specify an entryFilename, so that vite-script can find the correct file."
      );
    }

    const manifest = await fs.readFile(
      path.resolve(process.cwd(), "_site", "manifest.json")
    );
    const parsed = JSON.parse(manifest);

    let entryChunk = parsed[entryFilename];

    if (!entryChunk) {
      const possibleEntries = Object.values(parsed)
        .filter(chunk => chunk.isEntry === true)
        .map(chunk => `"${chunk.src}"`)
        .join(`, `);
      throw new Error(
        `No entry for ${entryFilename} found in _site/manifest.json. Valid entries in manifest: ${possibleEntries}`
      );
    }
    return entryChunk;
  }

  eleventyConfig.addTransform("htmlmin", async function (content, outputPath) {
    if (!(process.env.NODE_ENV == "production")) {
      return content;
    }
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = await htmlterser.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        customAttrCollapse: /d/,
      });
      return minified;
    }

    return content;
  });

  return {
    templateFormats: ["njk", "html"],
    pathPrefix: PATH_PREFIX,
    dir: {
      input: INPUT_DIR,
    },
  };
};
