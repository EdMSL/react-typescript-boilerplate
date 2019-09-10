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
    "prettier",
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
    "no-multi-spaces": ["error", {
      ignoreEOLComments: false,
    }],
    "operator-linebreak": ["error", "before", { overrides: { "=": "none" } }],
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [".tsx", ".jsx"],
    }],
    "react/jsx-fragments": [1, "element"],
    "react/jsx-max-props-per-line": [2, {
      "maximum": 1,
      "when": "always",
    }],
    "react/prefer-stateless-function": 0,
    "@typescript-eslint/interface-name-prefix": [2, {
      "prefixWithI": "always",
      "allowUnderscorePrefix": false,
    }],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
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
