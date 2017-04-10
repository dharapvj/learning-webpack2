var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    // which extensions should be considered for resolution - automatically?
    // any extensions "referred" via files with these extensions are resolved as well.
    extensions: ['.ts', '.js', '.json'],
    // default - modules: ["node_modules"]
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
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
  stats: "verbose",
  devServer: {
    contentBase: path.resolve(__dirname),
    publicPath: '/dist/',  // important to not use absolute path here!
    compress: true,
    port: 3000
  }
}