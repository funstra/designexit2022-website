const htmlmin = require("./_11ty/htmlmin.js");
const image = require("./_11ty/image.js");
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
  eleventyConfig.addNunjucksShortcode("image", image);

  // passthrough - -
  eleventyConfig.addPassthroughCopy("./assets/fonts");
  eleventyConfig.addPassthroughCopy("./assets/svg/map-marker.svg");
  eleventyConfig.addPassthroughCopy("./assets/img");
  if (process.env.NODE_ENV !== "production") {
    eleventyConfig.addPassthroughCopy("./assets/alster");
  }

  // v11te - - -
  // TODO make this a 11ty plugin
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

  // filters - -
  eleventyConfig.addNunjucksFilter("socials", links => {
    let l = {};
    for (const key in links) {
      if (key !== "hemsida") {
        l[key] = links[key];
      }
    }
    return l;
  });
  eleventyConfig.addNunjucksFilter("gotLinks", links => {
    for (const key in links) {
      if (links[key].length) {
        return true;
      }
    }
    return false;
  });

  return {
    templateFormats: ["njk", "html"],
    pathPrefix: PATH_PREFIX,
    dir: {
      input: INPUT_DIR,
    },
  };
};
