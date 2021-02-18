export default {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    "react",
    "jest",
    "@typescript-eslint",
    "import",
    "react-hooks",
    "prettier"
  ],
  rules: {
    /**
     * ES6
     */

    "linebreak-style": ["error", "unix"],
    "eol-last": ["error", "always"],
    "max-len": ["warn", { code: 120 }],
    "no-trailing-spaces": ["error"],
    semi: "off",
    "prefer-const": ["error"],
    "no-var": "error",
    quotes: ["error", "single"],
    "space-in-parens": ["error", "never"],
    "arrow-parens": ["warn", "as-needed"],
    "no-magic-numbers": [
      "warn",
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true
      },
    ],
    eqeqeq: "error",
    yoda: "error",
    "brace-style": ["error", "1tbs"],
    "no-extra-parens": [
      "warn",
      "all",
      {
        ignoreJSX: "multi-line"
      }
    ],
    "object-curly-spacing": ["warn", "never"],
    "array-bracket-spacing": ["warn", "never"],
    "no-unused-expressions": "error",
    "comma-dangle": ["warn", "always-multiline"],

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-one-expression-per-line": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi-style": "off",

    /**
     * TypeScript
     */
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "enumMember",
        "format": ["UPPER_CASE"]
      }
    ],
    "@typescript-eslint/array-type": ["warn", { default: "generic" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-unused-vars": [2, { args: "none" }],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      {
        before: true,
        after: true,
        overrides: {
          colon: {
            before: false,
            after: true
          }
        }
      }
    ],
    "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
    "@typescript-eslint/semi": ["error"],
    "import/order": ["warn"]
  }
};
