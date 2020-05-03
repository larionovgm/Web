const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    pageOne: './src/script.js',
    pageTwo: './src/script2.js',
  },
  output: {
    filename: 'bundle.js',
  }
};