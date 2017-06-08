'use strict';

module.exports = {
  jest: {
    moduleNameMapper: {
      '^.+\\.(css)$': 'identity-obj-proxy'
    },
    moduleFileExtensions: ['js']
  },
  build: {
    appId: 'com.electron.hoge',
    files: [
      'dist',
      'index.html',
      'package.json',
      'build'
    ],
    mac: {
      target: 'default'
    },
    directories: {
      output: 'docs'
    }
  }
};
