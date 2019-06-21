const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const getScopedName = require('../src/helpers/getScopedName');

const PATHS = {
  src: path.join(__dirname, `../src`),
  dist: path.join(__dirname, `../build`),
  conf: path.join(__dirname, `./config`),
};

const isDevelopment = process.env.NODE_ENV !== 'production';
const devtool = isDevelopment ? 'cheap-module-eval-source-map' : '';

const htmlPlugin = new HtmlWebpackPlugin({
  title: `Boilerplate for React app`,
  template: `${PATHS.src}/index.html`,
  filename: 'index.html',
  favicon: 'src/sprites/favicon.png',
  inject: false,
});

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'css/styles.css',
  chunkFilename: 'css/[id].css',
});

const clean = new CleanWebpackPlugin();

const plugins = [
  new webpack.ProgressPlugin(),
  clean,
  htmlPlugin,
  ...(isDevelopment ? [] : [cssExtractPlugin]),
];

const configuration = {
  entry: `${PATHS.src}/index.jsx`,
  output: {
    path: `${PATHS.dist}`,
    filename: "js/index.js",
    publicPath: '/',
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
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          (isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader),
          {
            loader: `css-loader`,
            options: {
              modules: true,
              sourceMap: true,
              // url: false,
              importLoaders: 0,
              localIdentName: '[local]',
            },
          },
          {
            loader: "resolve-url-loader"
          },
        ]
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     {
      //       loader: isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: true,
      //         importLoaders: 2,
      //         localIdentName: '[local]'
      //       }
      //     },
      //     {
      //       loader: 'sass-loader',
      //     },
      //     {
      //       loader: 'sass-resources-loader',
      //       options: {
      //         sourceMap: true,
      //         resources: ['src/styles/resources.scss'],
      //       },
      //     },
      //   ]
      // },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      },
      {
        test: /\.(png|jpg|svg)$/,
        include: `${PATHS.src}/images/`,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      }
    ]
  },
  devServer: {
    port: 8081,
    hot: true,
    compress: true,
    contentBase: `${PATHS.dist}`,
    publicPath: '/',
    historyApiFallback: true,
  },
  devtool,
  plugins,
};

module.exports = configuration;
