module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@emotion',
    '@typescript-eslint'
  ],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'generator-star-spacing' : ['error', { before: false, after: true }],
    '@emotion/jsx-import'    : 'off',
    'multiline-ternary'      : 'off',
    'no-multi-spaces'        : 'off',
    'object-curly-newline'   : 'off',
    'object-property-newline': 'off',
    'object-curly-spacing'   : 'off',
    'key-spacing'            : 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: ['@', './src'],
    },
  },
}