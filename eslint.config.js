const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      semi: 'error',
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
];