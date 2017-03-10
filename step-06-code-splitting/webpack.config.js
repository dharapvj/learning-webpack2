var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'code-split-demo.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // required ONLY for -p (production) build of webpack
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {modules: false}]
            ],
            plugins: ['syntax-dynamic-import']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunksSortMode: 'dependency',
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname),
    // publicPath: '/dist/',  // important to not use absolute path here!
    compress: true,
    port: 3000
  }

}