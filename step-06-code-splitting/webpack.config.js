var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app.js'),
    vendor : [
      'jquery'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash].[name].js'
  },
  // IMPORTANT: As of Mar 2017, babel-loader is REQUIRED for "dynamic import()" statements to work
  // with below configuration of preset and plugin
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
    }),
    new CommonsChunkPlugin({
      name: 'vendor',
    }),
  ]
}


/**
 * Automatic vendor chunk /
 * Mainfest chunk for long term caching of "vendor" module
 */
/*var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app.js'),
    vendor: ['jquery']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash].[name].js'
  },
  // IMPORTANT: As of Mar 2017, babel-loader is REQUIRED for "dynamic import()" statements to work
  // with below configuration of preset and plugin
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
    }),
    new CommonsChunkPlugin({
      // While below is a good option.. I am not sure how to use Manifest option with it.
      // name: 'vendor',
      // minChunks: function (module) {
      //    // this assumes your vendor imports exist in the node_modules directory
      //    return module.context && module.context.indexOf('node_modules') !== -1;
      // }
      name : ['vendor', 'manifest']
    }),
  ]
}
*/