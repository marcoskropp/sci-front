const presets = ['@babel/preset-env', '@babel/react'];

const plugins = [
  '@babel/plugin-transform-modules-commonjs',
  'dynamic-import-node'
];

module.exports = {
  presets,
  plugins
};
