const eslint = {
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
};

module.exports = eslint;
