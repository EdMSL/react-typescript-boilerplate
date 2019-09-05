module.exports = function() {
  return {
    devServer: {
      port: 8081,
      hot: true,
      compress: true,
      open: true,
      watchContentBase: true,
      publicPath: '/',
      historyApiFallback: true,
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  }
}