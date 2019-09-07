module.exports = function() {
  return {
    devServer: {
      port: 8081,
      hot: true,
      compress: true,
      open: true,
      clientLogLevel: 'none',
      contentBase: 'src/public',
      watchContentBase: true,
      publicPath: '/',
      historyApiFallback: true,
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  };
};
