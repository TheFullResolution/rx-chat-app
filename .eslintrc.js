module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  globals: {
    process: true,
  },
  rules: {
    indent: 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
}
