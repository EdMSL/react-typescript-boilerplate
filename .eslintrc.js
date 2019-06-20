const path = require('path');

module.exports = {

  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'comma-dangle': 'off',
    'quotes': 'off',
    'no-restricted-syntax': 1,
    'new-cap': 1,
    'no-continue': 1,
    'no-underscore-dangle': 1,
    'no-unused-vars': 2,
    'global-require': 1,
    'react/no-multi-comp': 1,
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'camelcase': 1,
    'import/no-unresolved': 1,
    'import/prefer-default-export': 'off',
    'import/extensions': 1,
    'no-return-assign': 1,
    'max-len': 1,
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off'
  },
  globals: {
    'document': false,
    'window': false,
    'HTMLInputElement': false,
    'HTMLDivElement': false
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js',
        // config: {
        //   resolve: {
        //     alias: {
        //     $containers: path.join(__dirname, 'src/containers'),
        //     $components: path.join(__dirname, 'src/components'),
        //     $modules: path.join(__dirname, 'src/modules'),
        //     $styles: path.join(__dirname, 'src/styles'),
        //     }
        //   }
        // }
      }
    }
  }
}
