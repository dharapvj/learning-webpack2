var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // required ONLY for -p (production) build of webpack
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(__dirname, 'babelCache'),
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    publicPath: '/dist/',  // important to not use absolute path here!
    compress: true,
    port: 3000
  }
}