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
  copyFavicons(`${PATHS.src}/public`),
  ...generateHtmlPlugins(`${PATHS.src}/public`),
  // copyImages(`${PATHS.src}/assets/images/content`),
];

const configuration = merge([
  {
    entry: `${PATHS.src}/index.tsx`,
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
        $components: path.resolve(__dirname, `${PATHS.src}/components/`),
        $constants: path.resolve(__dirname, `${PATHS.src}/constants/`),
        $containers: path.resolve(__dirname, `${PATHS.src}/containers/`),
        $images: path.resolve(__dirname, `${PATHS.src}/images/`),
        $modules: path.resolve(__dirname, `${PATHS.src}/modules/`),
        $redux: path.resolve(__dirname, `${PATHS.src}/redux/`),
        $styles: path.resolve(__dirname, `${PATHS.src}/styles/`),
        $utils: path.resolve(__dirname, `${PATHS.src}/utils/`),
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
