module.exports = {
  rootDir: './',
  setupFiles: [
    '<rootDir>/config/test.js'
  ],
  testMatch: [
    '<rootDir>/src/**/?(*.)(test).js'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
  ],
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'node'
  ],
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
    'src'
  ],
  modulePathIgnorePatterns: [
    'node_modules'
  ],
  moduleNameMapper: {
    '.+\\.(svg)$': '<rootDir>/config/test/test.js',
    'src/(.*)': '<rootDir>/src/$1'
  },
};
