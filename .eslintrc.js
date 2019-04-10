module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    quotes: [2, "single", { avoidEscape: true }]
  }
};
