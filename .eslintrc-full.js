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
    mocha: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
    "@typescript-eslint",
  ],
  settings: {
    "import/resolver": {
      webpack: {
        config: "./config/webpack.base.config.js",
      }
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"],
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "linebreak-style": 0,
    "max-len": [1, 100],
    "no-multiple-empty-lines": [2, { max: 1}],
    "no-plusplus": 1,
    "object-curly-newline": [2, {
      ObjectExpression: { minProperties: 3, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 3, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 3, multiline: true, consistent: true },
    }],
    "space-before-function-paren": [1, "never"],

    "import/extensions": [2, "always", { "js": "never", "ts": "never", "tsx": "never" }],
    "import/no-cycle": [2, { maxDepth: 1 }],
    "import/no-extraneous-dependencies": 0,
    "import/order": [1, {
      groups: [
        [
          "builtin",
          "external",
          "internal"
        ],
      ],
      "newlines-between": "always",
    }],
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
    "react/prop-types": 0,

    "@typescript-eslint/array-type": [2, {
      "default": "array-simple",
      "readonly": "array-simple",
    }],
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
          "requireLast": true,
      }
    }],
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-magic-numbers": [1, {
      ignore: [-1, 0, 1, 2],
      ignoreArrayIndexes: true,
      enforceConst: false,
      detectObjects: false,
      ignoreNumericLiteralTypes: false,
      ignoreEnums: false,
    }],
    "@typescript-eslint/no-var-requires": 0,
  },
  globals: {
  },
}
