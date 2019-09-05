const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = function(mode, path) {
  if (mode === 'production') {
    return new SVGSpritemapPlugin([
      `${path}/**/*.svg`,
    ], {
      output: {
        filename: 'images/sprite.svg',
        chunk: {
          keep: true,
        },
        svg4everybody: true,
        svgo: {
          removeComments: true,
          removeXMLProcInst: true,
        },
      },
      sprite: {
        prefix: false,
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
      filename: 'images/sprite.svg',
      svg4everybody: true,
    },
    sprite: {
      prefix: false,
    },
  });
}
