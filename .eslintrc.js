module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "."
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: "airbnb",
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
  ],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/jsx-fragments": [1, 'element'],
  },
  globals: {
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./config/webpack.base.config.js",
      }
    }
  },
}
