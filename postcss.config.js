const tailwindcss = require("tailwindcss");
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require("autoprefixer");
const postcssImport = require('postcss-import')

module.exports = {
  plugins: [
    postcssImport,
    tailwindcss("./tailwind.js"),
    purgecss({
      content: ['./src/**/*.vue'],
      extractors: [
        {
            extractor: class TailwindExtractor {
                static extract(content) {
                    return content.match(/[A-z0-9-:\/]+/g) || [];
                }
            },
            extensions: ['vue']
        }
      ]
    }),

    autoprefixer({
      add: true,

      grid: true
    })
  ]
};
