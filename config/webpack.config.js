// const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getScopedName = require('../src/helpers/getScopedName');

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
  css: 'src/styles/main.css',
  inject: false,
});

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'css/styles.css',
  chunkFilename: 'css/[id].css',
});

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
              importLoaders: 0,
              ...(isDevelopment ? {
                localIdentName: '[local]',
              } : {
                getLocalIdent: (context, localIdentName, localName) => (
                  getScopedName(localName, context.resourcePath)
                ),
              }),
              // url: false,
            },
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
        test: /\.(png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {}
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
  plugins: [
    htmlPlugin,
    ...(isDevelopment ? [] : cssExtractPlugin),
  ]
};

module.exports = configuration;
