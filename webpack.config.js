var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: 
    './entry.js',


  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      { test: /\.jsx$/, 
        exclude: /(node_modules|bower_components)/, 
        loaders: ['babel'],
         },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css/, loader: 'css-loader!cssnext-loader' }
    ]
  },

  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ],

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }

}
