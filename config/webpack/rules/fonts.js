module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(eot|ttf|woff|woff2|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[ext]',
          },
        },
      ],
    },
  };
};
