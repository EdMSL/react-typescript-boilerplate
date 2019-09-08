module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'source-map-loader',
            'awesome-typescript-loader',
          ],
        },
      ],
    },
  };
};
