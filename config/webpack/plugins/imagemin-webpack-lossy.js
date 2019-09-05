const ImageminWebpack = require('imagemin-webpack');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

module.exports = function() {
  return new ImageminWebpack({
    // When cache = true, use "rm -rf ./node_modules/.cache/imagemin-webpack" if change options for imagemin plugin!
    test: /.(jpe?g|png|gif|svg)$/i,
    cache: false,
    bail: false,
    loader: false,
    name: 'images/decoration/[name].[ext]',
    imageminOptions: {
      plugins: [
        imageminMozjpeg({
          quality: 90,
          progressive: true,
          fastCrush: false, /* default false */
          dcScanOpt: 1, /* 1...3 default 1 */
          trellis: true, /* default true */
          tune: 'hvs-psnr', /* Trellis optimization method. Available: psnr, hvs-psnr(default), ssim, ms-ssim */
          trellisDC: true, /* default true */
          overshoot: true, /* default true */
          arithmetic: false, /* default false */
          dct: 'int', /* Available: int(default), fast, float */
        }),
        imageminPngquant({
          quality: [0.3, 0.5],
          speed: 3, /* 1...11 default 3 */
          strip: false, /* default false */
          dithering: 1, /* 0...1 default 1 */
          posterize: 0, /* default 0 */
          verbose: false, /* default false */
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

      if (/content/.test(sourcePath)) {
        return false;
      }

      if (/sprite/.test(sourcePath)) {
        return false;
      }

      return true;
    },
  });
}