const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const fonts = require('./webpack/rules/fonts');
// const copyImages = require('./webpack/plugins/copy-images');
const copyFavicons = require('./webpack/plugins/copy-favicons');
const generateHtmlPlugins = require('./webpack/plugins/html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../build'),
  conf: path.join(__dirname, './config'),
};

const plugins = [
  new webpack.WatchIgnorePlugin(['build']),
  copyFavicons(`${PATHS.src}/assets/favicons`),
  ...generateHtmlPlugins(`${PATHS.src}/assets`),
  // copyImages(`${PATHS.src}/assets/images/content`),
];

const configuration = merge([
  {
    entry: `${PATHS.src}/index.jsx`,
    output: {
      path: `${PATHS.dist}`,
      filename: 'js/index.js',
      sourceMapFilename: '[name].js.map',
      publicPath: '/',
      futureEmitAssets: true,
    },
    externals: {
      paths: PATHS,
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        $root: path.resolve(__dirname, `${PATHS.src}/`),
        $components: path.resolve(__dirname, `${PATHS.src}/components/`),
        $containers: path.resolve(__dirname, `${PATHS.src}/containers/`),
        $modules: path.resolve(__dirname, `${PATHS.src}/modules/`),
        $styles: path.resolve(__dirname, `${PATHS.src}/styles/`),
        $images: path.resolve(__dirname, `${PATHS.src}/images/`),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      descriptionFiles: ['package.json'],
    },
    module: {
      strictExportPresence: true,
    },
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: false,
      moduleTrace: true,
      errorDetails: false,
    },
    plugins,
  },
  fonts(),
]);

module.exports = configuration;
