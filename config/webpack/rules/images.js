module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                context: 'images',
                publicPath: (url, resourcePath, context) => {
                  if (/content/.test(resourcePath)) {
                    return `../${context}/content/${url}`;
                  }

                  if (/decoration/.test(resourcePath)) {
                    return `../${context}/decoration/${url}`;
                  }

                  return `${context}/${url}`;
                },
                outputPath: (url, resourcePath, context) => {
                  if (/content/.test(resourcePath)) {
                    return `${context}/content/${url}`;
                  }

                  if (/decoration/.test(resourcePath)) {
                    return `${context}/decoration/${url}`;
                  }

                  return `${context}/${url}`;
                },
              },
            },
          ],
        },
      ],
    },
  };
};
