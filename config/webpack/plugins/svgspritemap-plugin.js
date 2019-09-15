const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const paths = require('../paths');

module.exports = function (mode, path) {
  if (mode === 'production') {
    return new SVGSpritemapPlugin([
      `${path}/**/*.svg`,
    ], {
      output: {
        filename: paths.SVG_SPRITE,
        chunk: {
          keep: true,
        },
        svg4everybody: false,
        svgo: {
          removeComments: true,
          removeXMLProcInst: true,
        },
      },
      sprite: {
        prefix: 'icon-',
        generate: {
          title: false,
        },
      },
    });
  }

  return new SVGSpritemapPlugin([
    `${path}/**/*.svg`,
  ], {
    output: {
      filename: paths.SVG_SPRITE,
      svg4everybody: false,
    },
    sprite: {
      prefix: 'icon-',
    },
  });
};
