const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const regExps = require('../regExps');

const { cssModules } = regExps;

module.exports = function (mode, resourcesPath) {
  function getLoaders(cssOptions) {
    return [
      {
        loader: mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: cssOptions,
      },
      mode === 'production' && {
        loader: 'postcss-loader',
        options: {
          sourceMap: false,
          config: {
            path: 'config/webpack/postcss.config.js',
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: mode === 'development',
          sassOptions: {
            outputStyle: 'expanded',
          },
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          sourceMap: mode === 'development',
          resources: `${resourcesPath}/**/*.scss`,
        },
      },
    ].filter(Boolean);
  }

  return {
    module: {
      rules: [
        {
          test: /\.(scss|sass|css)$/,
          exclude: cssModules,
          use: getLoaders({
            sourceMap: mode === 'development',
            importLoaders: 2,
          }),
        },
        {
          test: cssModules,
          use: getLoaders({
            sourceMap: mode === 'development',
            importLoaders: 3,
            modules: {
              localIdentName: '[local]___[hash:base64:5]',
            },
          }),
        }
      ],
    },
  };
};
