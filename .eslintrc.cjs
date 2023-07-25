module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard'
    // 'eslint:recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:prettier/recommended',
    // 'plugin:react/jsx-runtime'
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
    '@typescript-eslint'
  ],
  "globals": {
    "NodeJS": true
  },
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'generator-star-spacing' : ['error', { before: false, after: true }],
    'multiline-ternary'      : 'off',
    'no-multi-spaces'        : 'off',
    'object-curly-newline'   : 'off',
    'object-property-newline': 'off',
    'object-curly-spacing'   : 'off',
    'key-spacing'            : 'off',
    "react/display-name"     : 'off',
    "@typescript-eslint/ban-types": 'off',
    "@typescript-eslint/no-explicit-any": 'off',
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
