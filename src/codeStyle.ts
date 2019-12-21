export default {
  "plugins": ["react", "@typescript-eslint", "import"],
  "rules": {

    /**
     * ES6
     */

    "indent": [
      "error", 2,
      {
        "SwitchCase": 1,
        "MemberExpression": 1,
        "ArrayExpression": 1,
        "ObjectExpression": 1
      },
    ],
    "linebreak-style": ["error", "unix"],
    "eol-last": ["error", "always"],
    "max-len": ["error", {"code": 120}],
    "no-trailing-spaces": ["error"],
    "semi": ["error", "always"],
    "prefer-const": ["error"],
    "no-var": "error",
    "quotes": ["error", "single"],
    "space-in-parens": ["error", "never"],
    "arrow-parens": ["warn", "as-needed"],
    "no-magic-numbers": [
      "warn",
      {
        "ignoreArrayIndexes": true,
        "enforceConst": true
      },
    ],
    "eqeqeq": "error",
    "yoda": "error",
    "brace-style": ["error", "1tbs"],
    "no-extra-parens": [
      "warn", "all",
      {
        "ignoreJSX": "multi-line"
      }
    ],
    "no-unused-expressions": "error",

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    /**
     * TypeScript
     */

    "@typescript-eslint/array-type": ["error", { "default": "generic" }],
    "@typescript-eslint/camelcase": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/no-unused-vars": [2, { args: 'none' }],
    "@typescript-eslint/type-annotation-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
  }
}
