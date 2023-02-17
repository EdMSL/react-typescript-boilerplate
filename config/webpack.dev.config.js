const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const css = require('./webpack/rules/css');
const ts = require('./webpack/rules/ts-tsx');
const devserver = require('./webpack/devserver');
// const SVGSpritePlugin = require('./webpack/plugins/svgspritemap-plugin');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new ReactRefreshWebpackPlugin(),
  // new CaseSensitivePathsPlugin(),
  // SVGSpritePlugin(process.env.NODE_ENV, `${baseWebpackConfig.externals.paths.src}/assets/images/sprite`),
].filter(Boolean);


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
  ts(process.env),
  devserver(),
]);

module.exports = devWebpackConfig;
