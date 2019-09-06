const webpack = require('webpack');
const merge = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const css = require('./webpack/rules/css');
const js = require('./webpack/rules/js-jsx');
// const images = require('./webpack/rules/images');
const devserver = require('./webpack/devserver');
// const SVGSpritePlugin = require('./webpack/plugins/svgspritemap-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new CaseSensitivePathsPlugin(),
  // SVGSpritePlugin(process.env.NODE_ENV, `${baseWebpackConfig.externals.paths.src}/images/sprite`),
];

const devWebpackConfig = merge([
  baseWebpackConfig,
  {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    watchOptions: {
      ignored: /node_modules/,
    },
    plugins,
  },
  css('development', `${baseWebpackConfig.externals.paths.src}/styles/resources`),
  js(),
  // images(),
  devserver(),
]);

module.exports = devWebpackConfig;
