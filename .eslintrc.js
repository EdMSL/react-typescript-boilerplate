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
    "arrow-body-style": [1, "as-needed", {
      requireReturnForObjectLiteral: false,
    }],
    "arrow-parens": [1, "always"],
    "arrow-spacing": [1, {
      before: true,
      after: true,
    }],
    "comma-dangle": [1, {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "always-multiline",
    }],
    "comma-spacing": [1, {
      before: false,
      after: true
    }],
    "eol-last": 0,
    "func-call-spacing": [1, "never"],
    "indent": [1, 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: ["JSXElement", "JSXElement > *", "JSXAttribute", "JSXIdentifier", "JSXNamespacedName", "JSXMemberExpression", "JSXSpreadAttribute", "JSXExpressionContainer", "JSXOpeningElement", "JSXClosingElement", "JSXText", "JSXEmptyExpression", "JSXSpreadChild"],
      ignoreComments: false
    }],
    "key-spacing": [1, { beforeColon: false, afterColon: true }],
    "linebreak-style": 0,
    "max-len": [1, 100],
    "no-extra-semi": 1,
    "no-magic-numbers": 0, // disabled in favor @typescript-eslint/no-magic-numbers rule
    "no-multi-spaces": [1, {
      ignoreEOLComments: false,
    }],
    "no-multiple-empty-lines": 0,
    "no-plusplus": 1,
    "no-spaced-func": 1,
    "no-trailing-spaces": 0,
    "object-curly-newline": [1, {
      ObjectExpression: { minProperties: 3, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 3, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 3, multiline: true, consistent: true },
    }],
    "object-curly-spacing": [1, "always"],
    "object-property-newline": [1, {
      allowAllPropertiesOnSameLine: true,
    }],
    "padded-blocks": [1, {
      blocks: "never",
      classes: "never",
      switches: "never",
    }, {
      allowSingleLineBlocks: true,
    }],
    "quotes": [1, "single", { avoidEscape: true }],
    "semi-spacing": [1, {
      before: false,
      after: true,
    }],
    "semi": [1, "always"],
    "space-before-function-paren": [1, "never"],
    "space-in-parens": [1, "never"],
    "space-infix-ops": 1,
    "spaced-comment": 0,

    "import/extensions": [2, "always", { "js": "never", "ts": "never", "tsx": "never" }],
    "import/newline-after-import": 0,
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

    "react/jsx-closing-bracket-location": 1,
    "react/jsx-closing-tag-location": 1,
    "react/jsx-indent": [1, 2],
    "react/jsx-indent-props": [1, 2],
    "react/jsx-filename-extension": [1, {
      extensions: [".tsx", ".jsx"],
    }],
    "react/jsx-fragments": 0, // use React.Fragment or <>
    "react/jsx-tag-spacing": 1,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/self-closing-comp": 1,

    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/interface-name-prefix": [2, {
      prefixWithI: "always",
      allowUnderscorePrefix: false,
    }],
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
}
