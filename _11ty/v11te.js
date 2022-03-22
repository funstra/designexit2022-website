const fs = require("fs/promises");
const path = require("path");

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

exports.viteScriptTag =
  (PATH_PREFIX = "/") =>
  async entryFilename => {
    const entryChunk = await getChunkInformationFor(entryFilename);
    return `<script type="module" src="${PATH_PREFIX}${entryChunk.file}"></script>`;
  };

exports.viteLinkModulePreloadTags =
  (PATH_PREFIX = "/") =>
  async entryFilename => {
    const entryChunk = await getChunkInformationFor(entryFilename);

    let s = "";

    // imports
    if (!entryChunk.imports || entryChunk.imports.length === 0) {
      console.log(
        `The script for ${entryFilename} has no imports. Nothing to preload.`
      );
    } else {
      s += (
        await Promise.all(
          entryChunk.imports.map(async importEntryFilename => {
            const chunk = await getChunkInformationFor(importEntryFilename);

            return `<link rel="preload" as="script" type="text/javasript" href="${PATH_PREFIX}${chunk.file}"></link>`;
          })
        )
      ).join("\n");
    }

    // dynamic imports
    if (!entryChunk.dynamicImports || entryChunk.dynamicImports.length === 0) {
      console.log(
        `The script for ${entryFilename} has no dynamicmports. Nothing to prefetch.`
      );
    } else {
      s += (
        await Promise.all(
          entryChunk.dynamicImports.map(async importEntryFilename => {
            const chunk = await getChunkInformationFor(importEntryFilename);
            return `<link rel="prefetch" href="${PATH_PREFIX}${chunk.file}"></link>`;
          })
        )
      ).join("\n");
    }
    return s;
  };

exports.viteLinkStylesheetTags =
  (PATH_PREFIX = "/") =>
  async entryFilename => {
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
  };
