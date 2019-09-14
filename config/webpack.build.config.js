const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssExtractPlugin = require('./webpack/plugins/mini-css-extract-plugin');
const TerserPlugin = require('./webpack/plugins/terser-plugin');
const OptimizeCSSAssetsPlugin = require('./webpack/plugins/optimize-css-assets-plugin');
// const SVGSpritePlugin = require('./webpack/plugins/svgspritemap-plugin');
const ImageminWebp = require('./webpack/plugins/imagemin-webp');
const ImageminPlugin = require('./webpack/plugins/imagemin-webpack-plugin');
const css = require('./webpack/rules/css');
const js = require('./webpack/rules/js-jsx');
const ts = require('./webpack/rules/ts-tsx');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  new CleanWebpackPlugin(),
  CssExtractPlugin(),
  ImageminWebp('production'),
  ImageminPlugin(),
  // SVGSpritePlugin(process.env.NODE_ENV, `${baseWebpackConfig.externals.paths.src}/images/sprite`),
];

const buildWebpackConfig = merge([
  baseWebpackConfig,
  {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [
        TerserPlugin(),
        OptimizeCSSAssetsPlugin(),
      ],
    },
    plugins,
  },
  js(),
  ts(),
  css('production', `${baseWebpackConfig.externals.paths.src}/styles/resources`),
]);

module.exports = buildWebpackConfig;
