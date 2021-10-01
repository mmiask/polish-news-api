module.exports = {
  "env": {
    "browser": "true",
    "node": "true",
  },
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  // rules: {
  //   'no-console': 'off',
  //   'no-unused-vars': 'off',
  //   '@typescript-eslint/no-unused-vars': 'off',
  // },
}