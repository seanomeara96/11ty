const fs = require("fs");
const path = require("path");

const isDev = process.env.APP_ENV === "development";

const manifestPath = path.resolve(__dirname, "dist", "assets", "manifest.json");
const manifest = isDev
  ? {
      "main.js": "/assets/index.js",
      "main.css": "/assets/index.css",
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });
  // Add a shortcode for bundled CSS.
  process.env.mainScript = manifest["main.js"];
  process.env.mainStyle = manifest["main.css"];

  console.log(process.env.mainScript, "!!!!!!!!!!!!!!!!!!!!!");

  eleventyConfig.setBrowserSyncConfig({
    files: [manifestPath],
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("dist/404/index.html");
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
