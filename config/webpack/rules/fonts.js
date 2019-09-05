module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(eot|ttf|woff|woff2|otf)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '../fonts',
              outputPath: 'fonts/',
            },
          },
        },
      ],
    },
  };
};