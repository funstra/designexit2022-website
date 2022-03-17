const htmlmin = require("./_11ty/htmlmin.js");
const studentImage = require("./_11ty/image.js");
const {
  viteLinkModulePreloadTags,
  viteLinkStylesheetTags,
  viteScriptTag,
} = require("./_11ty/v11te.js");

const INPUT_DIR = "src";
const PATH_PREFIX = "/";

/** @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig */
module.exports = function (eleventyConfig) {
  // image - -
  eleventyConfig.addNunjucksShortcode("studentImage", studentImage);

  // passthrough - -
  eleventyConfig.addPassthroughCopy("./assets/fonts");
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addPassthroughCopy("./assets/img");
  }

  // v11te - - -
  eleventyConfig.addNunjucksAsyncShortcode("viteScriptTag", viteScriptTag());
  eleventyConfig.addNunjucksAsyncShortcode(
    "viteLinkStylesheetTags",
    viteLinkStylesheetTags()
  );
  eleventyConfig.addNunjucksAsyncShortcode(
    "viteLinkModulePreloadTags",
    viteLinkModulePreloadTags()
  );

  // html minification - -
  eleventyConfig.addTransform("htmlmin", htmlmin);

  return {
    templateFormats: ["njk", "html"],
    pathPrefix: PATH_PREFIX,
    dir: {
      input: INPUT_DIR,
    },
  };
};
