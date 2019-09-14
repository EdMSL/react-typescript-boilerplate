const ImageminWebpack = require('imagemin-webpack');
const imageminWebp = require('imagemin-webp');
const regExps = require('../regExps');

const { favicons } = regExps;

const developmentWebpSettings = {
  preset: 'drawing', /* default, photo, picture, drawing, icon, text */
  method: 0, /* 0...6 default 4 */
};

const productionWebpSettings = {
  // preset: 'picture', /* default, photo, picture, drawing, icon, text */
  quality: 75,
  alphaQuality: 100,
  method: 4, /* 0...6 default 4 */
  sns: 80, /* 0...100 default 80 */
  filter: 100, /* 0...100 */
  autoFilter: false, /* default true */
  sharpness: 7, /* 0...7 default 0 */
  verbose: false, /* default false */
  // lossless: false,
  // nearLossless: 100, /* default 100*/
};

module.exports = function (mode) {
  return new ImageminWebpack({
    // When cache = true, use "rm -rf ./node_modules/.cache/imagemin-webpack" if change options for imagemin plugin!
    test: /\.(jpe?g|png)$/i,
    exclude: favicons,
    cache: false,
    bail: false,
    loader: false,
    name: 'images/content/[name].[ext].webp',
    imageminOptions: {
      plugins: [
        imageminWebp(mode === 'development' ? developmentWebpSettings : productionWebpSettings),
      ],
    },
    filter: (source, sourcePath) => {
      // small png images do not compress well in webp
      if (source.byteLength <= 35000 && /\.png$/.test(sourcePath)) {
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
  });
};
