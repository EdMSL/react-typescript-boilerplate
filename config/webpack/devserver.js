module.exports = function() {
  const OS = process.platform;
  const browserGoogleChrome = {
    win32: 'chrome',
    darwin: 'Google Chrome',
    linux: 'google-chrome',
  };

  return {
    devServer: {
      port: 8081,
      hot: true,
      compress: true,
      open: true,
      // clientLogLevel: 'none',
      // contentBase: 'src/public',
      // watchContentBase: true,
      static: {
        publicPath: '/',
      },
      historyApiFallback: true,
    },
  };
};
