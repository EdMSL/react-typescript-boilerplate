module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'source-map-loader',
          ],
        },
      ],
    },
  };
};