// https://medium.com/@netczuk/your-last-eslint-config-9e35bace2f99
module.exports = {
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  extends: ['last', 'prettier/react', 'plugin:react/recommended']
};
