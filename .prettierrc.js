module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.{css,sass,scss}',
      options: {
        singleQuote: false,
      }
    },
  ],
};