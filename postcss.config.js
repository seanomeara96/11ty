const autoprefixer = require("autoprefixer");

const plugins = [
  require("postcss-simple-vars"),
  require("postcss-import"),
  require("postcss-nested-vars"),
  require("postcss-mixins"),
  autoprefixer,
];

const isDev = process.env.APP_ENV === "development";

if (!isDev) {
  const purgecss = require("@fullhuman/postcss-purgecss");
  const cssnano = require("cssnano");
  [].push.apply(plugins, [
    purgecss({
      content: ["src/**/*.ejsk", "src/**/*.md", "src/**/*.js"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    cssnano({
      preset: "default",
    }),
  ]);
}

module.exports = { plugins };
