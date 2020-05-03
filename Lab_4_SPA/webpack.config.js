const path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    bundle: './src/index.js'
    // pageOne: './src/script.js',
    // pageTwo: './src/script2.js',
    // popper: './src/popper.min.js',
    // bootstrap: './src/bootstrap.min.js'
  },
  output: {
    // filename: '[name].bundle.js',
    filename: "bundle.js",
  },
 
  plugins: [
    // ...
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    })
    // ...
  ],
  externals: {
    // require("jquery") is external and available
    //  on the global var jQuery
    "jquery": "jQuery"
}
};