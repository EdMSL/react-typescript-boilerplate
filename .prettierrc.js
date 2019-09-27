module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  jsxSingleQuote: false,
  jsxBracketSameLine: false,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.{css,sass,scss}',
      options: {
        singleQuote: false,
        printWidth: 80,
      }
    },
  ],
};