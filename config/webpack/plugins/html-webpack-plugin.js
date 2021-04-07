const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (assetsDir, title) {
  return new HtmlWebpackPlugin({
    filename: 'index.html',
    template: `${assetsDir}/index.html`,
    title,
    inject: process.env.NODE_ENV === 'development',
  });
};
