const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (path) {
  return new CopyWebpackPlugin({
    patterns: [{
      from: '**/*',
      to: '[name].[ext]',
      context: `${path}/`,
      filter: async (resourcePath) => {
        if (/\.html$/.test(resourcePath)) {
          return false;
        }

        return true;
      },
    }],
  });
};
