const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const CssExtractPlugin = require('./webpack/plugins/mini-css-extract-plugin');
const TerserPlugin = require('./webpack/plugins/terser-plugin');
const OptimizeCSSAssetsPlugin = require('./webpack/plugins/optimize-css-assets-plugin');
const SVGSpritePlugin = require('./webpack/plugins/svgspritemap-plugin');
const css = require('./webpack/rules/css');
const ts = require('./webpack/rules/ts-tsx');
const baseWebpackConfig = require('./webpack.base.config');

const plugins = [
  CssExtractPlugin(),
  SVGSpritePlugin(process.env.NODE_ENV, `${baseWebpackConfig.externals.paths.src}/assets/images/sprite`),
];

const buildWebpackConfig = merge([
  baseWebpackConfig,
  {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                keep_infinity: true,
              },
            },
          }),
          // OptimizeCSSAssetsPlugin(),
        ],
        nodeEnv: (env && env.nodeEnv) || 'production',
      },
    plugins,
  },
  ts(process.env),
  css('production', `${baseWebpackConfig.externals.paths.src}/styles/resources`),
]);

module.exports = buildWebpackConfig;
