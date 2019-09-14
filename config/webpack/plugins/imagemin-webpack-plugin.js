const ImageminWebpack = require('imagemin-webpack');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');
const regExps = require('../regExps');

const { favicons } = regExps;

const losslessMozjpegSettings = {
  quality: 75,
  progressive: true,
  fastCrush: false, /* default false */
  dcScanOpt: 1, /* 1...3 default 1 */
  trellis: true, /* default true */
  tune: 'hvs-psnr', /* Trellis optimization method. Available: psnr, hvs-psnr(default), ssim, ms-ssim */
  trellisDC: true, /* default true */
  overshoot: true, /* default true */
  arithmetic: false, /* default false */
  dct: 'int', /* Available: int(default), fast, float */
};

const losslessPngquantSettings = {
  quality: [0.65, 0.85],
  speed: 5, /* 1...11 default 3 */
  strip: true, /* default false */
  dithering: 1, /* 0...1 or false default 1 */
  posterize: 0, /* default 0 */
  verbose: true, /* default false */
};

const svgoSettings = {
  plugins: [
    { removeComments: true },
    { removeXMLProcInst: true },
  ],
};

module.exports = function () {
  return new ImageminWebpack({
    // When cache = true, use "rm -rf ./node_modules/.cache/imagemin-webpack" if change options for imagemin plugin!
    test: /\.(jpe?g|png|svg)$/i,
    exclude: favicons,
    cache: false,
    bail: false,
    loader: false,
    name: 'images/[folder]/[name].[ext]',
    imageminOptions: {
      plugins: [
        imageminMozjpeg(losslessMozjpegSettings),
        imageminPngquant(losslessPngquantSettings),
        imageminSvgo(svgoSettings),
      ],
    },
    filter: (source, sourcePath) => {
      if (/sprite/.test(sourcePath)) {
        return false;
      }

      return true;
    },
  })
};
