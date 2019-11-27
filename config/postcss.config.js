// This is the config for Postcss CLI
const colorConverter = require('postcss-color-converter');

module.exports = {
  parser: 'postcss-scss',
  plugins: [
    colorConverter({ outputColorFormat: 'rgb' }),
  ],
};
