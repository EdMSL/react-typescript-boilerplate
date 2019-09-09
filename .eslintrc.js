module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      "jsx": true,
    },
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
    "@typescript-eslint",
  ],
  rules: {
    // "no-unused-vars": "off", // *1 disable standart eslint rule In favor @typescript-eslint rule
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "react/jsx-fragments": [1, 'element'],
    "react/prefer-stateless-function": 0,
    "@typescript-eslint/interface-name-prefix": [2, {
      "prefixWithI": "always",
      "allowUnderscorePrefix": false,
    }],
    "@typescript-eslint/member-delimiter-style": [2, {
      "multiline": {
          "delimiter": "comma",
          "requireLast": true,
      },
      "singleline": {
          "delimiter": "comma",
          "requireLast": false,
      },
    }],
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-unused-vars": [2, { // *1
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false,
    }],
  },
  globals: {
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./config/webpack.base.config.js",
      }
    },
    react: {
      version: "detect",
    },
  },
}
