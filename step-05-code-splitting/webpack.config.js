const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
  // devtool should be carefully chosen for DEV vs PROD.
  // all eval type sourcemaps are inline and MUST NOT be used in PROD.
  // Also currently cheap-module-eval-source-map has issues in chrome
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval-source-map',
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
            cacheDirectory: path.resolve(__dirname, 'babelCache'),
            presets: [
              ['es2015', {modules: false}]
            ],
            plugins: ['syntax-dynamic-import']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
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
    // Usually, you would want to enable this only in PROD environment.
    // HtmlWebpackPlugin is intelligent and adds the <link> for styles.css in index.html automatically.
    new ExtractTextPlugin('styles.css'),
  ]
}


/**
 * Automatic vendor chunk /
 * Mainfest chunk for long term caching of "vendor" module
 */
/*var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app.js'),
    vendor: ['jquery']
  },
  // devtool should be carefully chosen for DEV vs PROD.
  // all eval type sourcemaps are inline
  // Also currently cheap-module-eval-source-map has issues in chrome
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval-source-map',
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
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
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
    // Usually, you would want to enable this only in PROD environment.
    // HtmlWebpackPlugin is intelligent and adds the <link> for styles.css in index.html automatically.
    new ExtractTextPlugin('styles.css'),
  ]
}
*/