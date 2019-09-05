const ImageminWebpack = require('imagemin-webpack');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

module.exports = function() {
  return new ImageminWebpack({
    // When cache = true, use "rm -rf ./node_modules/.cache/imagemin-webpack" if change options for imagemin plugin!
    test: /.(jpe?g|png|gif|svg)$/i,
    cache: false,
    bail: false,
    loader: false,
    name: 'images/content/[name].[ext]',
    imageminOptions: {
      plugins: [
        imageminJpegtran({
          progressive: true, /* default false */
          arithmetic: false, /* default false */
        }),
        imageminOptipng({
          optimizationLevel: 4, /* 0...7 default 3 */
          bitDepthReduction: true, /* default true */
          colorTypeReduction: true, /* default true */
          paletteReduction: true, /* default true */
        }),
        imageminSvgo({
          plugins: [
            { removeComments: true },
            { removeXMLProcInst: true },
          ],
        }),
        imageminGifsicle({
          interlaced: true, /* default false */
          optimizationLevel: 1, /* 1...3 default 1 */
          colors: 256, /* 2...256, max colors in img */
        }),
      ],
    },
    filter: (source, sourcePath) => {
      if (/png\.webp/.test(sourcePath)) {
        return false;
      }

      if (/decoration/.test(sourcePath)) {
        return false;
      }

      if (/sprite/.test(sourcePath)) {
        return false;
      }

      return true;
    },
  })
};
