module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                context: 'images',
                publicPath: (url, resourcePath, context) => {
                  if (/decoration/.test(resourcePath)) {
                    return `../${context}/decoration/${url}`;
                  }

                  return `${context}/${url}`;
                },
                outputPath: (url, resourcePath, context) => {
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