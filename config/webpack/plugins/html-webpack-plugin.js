const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (assetsDir) {
  const templateFiles = fs.readdirSync(`${assetsDir}`);

  return templateFiles.map((item) => {
    const fileData = item.split('.');
    const name = fileData[0];
    const ext = fileData[1];

    if (ext !== 'html') {
      return false;
    }

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `${assetsDir}/${name}.${ext}`,
      title: 'New React App',
      inject: process.env.NODE_ENV === 'development',
    });
  }).filter(Boolean);
};
