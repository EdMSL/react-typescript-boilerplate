const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(assetsDir) {
  const templateFiles = fs.readdirSync(`${assetsDir}/html`);

  return templateFiles.map((item) => {
    const fileData = item.split('.');
    const name = fileData[0];
    const ext = fileData[1];

    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: `${assetsDir}/html/${name}.${ext}`,
      inject:  false,
    });
  });
}
