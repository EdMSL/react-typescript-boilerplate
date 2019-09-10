module.exports = {
  printWidth: 100,
  semi: true,
  endOfLine: 'lf',
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
      }
    },
  ],
};