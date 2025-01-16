module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
    ],
    parserOptions: {
      parser: '@babel/eslint-parser',
    },
    rules: {
      // Add custom rules here, e.g., 'no-console': 'off'
    },
  };
  