const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(mode, resourcesPath) {
  if (mode === 'development') {
    return {
      module: {
        rules: [
          {
            test: /\.(scss|sass|css)$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  sourceMap: true,
                  resources: `${resourcesPath}/**/*.scss`,
                },
              },
            ],
          },
        ],
      },
    };
  }

  return {
    module: {
      rules: [
        {
          test: /\.(scss|sass|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 3,
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
              },
            },
            {
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
            },
            {
              loader: 'sass-resources-loader',
              options: {
                sourceMap: false,
                resources: `${resourcesPath}/**/*.scss`,
              },
            },
          ],
        },
      ],
    },
  };
};
