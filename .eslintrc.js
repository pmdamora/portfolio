module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx']
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 2,
    '@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react/prop-types': 'off', // Weird interaction with TS?
    'jsx-a11y/anchor-is-valid': 'off' // Next Link pass href attribute to children
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@portfolio', './']],
        extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
      }
    }
  }
};
