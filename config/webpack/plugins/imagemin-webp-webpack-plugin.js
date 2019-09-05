const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');

module.exports = function() {
  return new ImageminWebpWebpackPlugin({
    config: [{
      test: /\.(jpe?g|png)/,
      options: {
        preset: 'default', /* default, photo, picture, drawing, icon, text */
        quality: 85,
        alphaQuality: 90,
        method: 4, /* 0...6 default 4 */
        sns: 80, /* 0...100 default 80 */
        filter: 80, /* 0...100 */
        autoFilter: true, /* default true */
        sharpness: 1, /* 0...7 default 0 */
        verbose: false, /* default false */
      },
    }],
    overrideExtension: false,
    detailedLogs: true,
    silent: false,
    strict: true,
  });
}
