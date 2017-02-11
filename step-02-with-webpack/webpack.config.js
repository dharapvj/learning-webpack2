var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
	  path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // required ONLY for -p (production) build of webpack
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}