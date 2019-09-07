const isWsl = require('is-wsl');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function() {
  return new TerserPlugin({
    terserOptions: {
      parse: {
        ecma: 8,
      },
      compress: {
        ecma: 5,
        warnings: false,
        comparisons: false,
        inline: 2,
      },
      mangle: {
        safari10: true,
      },
      output: {
        ecma: 5,
        comments: false,
        ascii_only: true,
      },
    },
    parallel: !isWsl,
    cache: true,
    sourceMap: false,
  });
};
