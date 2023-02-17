module.exports = function (env) {
  return {
    module: {
      rules: [
        {
          test: /\.(ts|js)(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  env.NODE_ENV !== 'production' && require.resolve('react-refresh/babel'),
                ].filter(Boolean),
              },
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
      ],
    },
  };
};
