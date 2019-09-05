const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
  return new MiniCssExtractPlugin({
    filename: 'css/styles.css',
    chunkFilename: 'css/[id].css',
  });
}
