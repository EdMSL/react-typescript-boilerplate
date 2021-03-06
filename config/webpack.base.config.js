const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const fonts = require('./webpack/rules/fonts');
const images = require('./webpack/rules/images');
const copyFavicons = require('./webpack/plugins/copy-favicons');
const generateHtmlPlugins = require('./webpack/plugins/html-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../build'),
  conf: path.join(__dirname, '.'),
};

const plugins = [
  new webpack.WatchIgnorePlugin({ paths: ['build'] }),
  copyFavicons(`${PATHS.src}/public`),
  generateHtmlPlugins(`${PATHS.src}/public`, 'New App'),
];

const configuration = merge([
  {
    entry: `${PATHS.src}/index.tsx`,
    output: {
      path: `${PATHS.dist}`,
      filename: 'js/index.js',
      sourceMapFilename: '[name].js.map',
      publicPath: '/',
    },
    externals: {
      paths: PATHS,
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        $webpack: path.resolve(__dirname, `${PATHS.conf}/webpack/`),
        $api: path.resolve(__dirname, `${PATHS.src}/api/`),
        $components: path.resolve(__dirname, `${PATHS.src}/components/`),
        $constants: path.resolve(__dirname, `${PATHS.src}/constants/`),
        $containers: path.resolve(__dirname, `${PATHS.src}/containers/`),
        $images: path.resolve(__dirname, `${PATHS.src}/assets/images/`),
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
      errors: true,
      warnings: false,
      moduleTrace: true,
      errorDetails: false,
    },
    plugins,
  },
  fonts(),
  images(),
]);

module.exports = configuration;
