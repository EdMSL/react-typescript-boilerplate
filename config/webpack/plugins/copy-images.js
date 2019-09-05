const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(path) {
  return new CopyWebpackPlugin([
    {
      from: `${path}/*`,
      to: 'images/content/[name].[ext]',
    },
  ]);
}
