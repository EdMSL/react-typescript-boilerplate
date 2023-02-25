/* eslint-disable max-len */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  plugins: [
    'import',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
      webpack: {
        config: './config/webpack.base.config.js',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
  },
  rules: {
    'max-len': [1, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'import/extensions': [2, 'always', {
      js: 'never', ts: 'never', tsx: 'never',
    }],
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': [1, {
      groups: [
        [
          'builtin',
          'external',
          'sibling',
          'type',
        ],
      ],
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 0,

    'react/function-component-definition': [1, { namedComponents: 'arrow-function' }],
    'react/jsx-indent': 1,
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-max-props-per-line': [2, {
      maximum: 1,
      when: 'always',
    }],
    'react/jsx-tag-spacing': 1,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': [1, { ignoreFunctionalComponents: true }],

    '@typescript-eslint/no-unused-vars': [1, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    '@typescript-eslint/consistent-type-imports': [1, {
      prefer: 'no-type-imports',
      disallowTypeAnnotations: true,
    }],
  },
};
