const Image = require("@11ty/eleventy-img");
module.exports = function (dir, name, alt, outname, attrs) {
  const src = `./assets/${dir}${dir ? "/" : ""}${name}`.toLocaleLowerCase();
  const opt = {
    widths: [512, 1024, 2048, null],
    filenameFormat: function (id, src, width, format, options) {
      return `${src.slice(
        src.lastIndexOf("/") + 1,
        src.lastIndexOf(".")
      )}-${outname}-${width}.${format}`;
    },
    urlPath: "/assets/img/" + dir,
    outputDir: "./_site/assets/img/" + dir,
    formats: ["jpeg"],
  };

  Image(src, opt);
  let metadata = Image.statsSync(src, opt);

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `
      <img
        src="${lowsrc.url}"
        srcset="${metadata.jpeg
          .map(entry => entry.srcset)
          .join(", ")}" sizes="100vw"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">`;
};
