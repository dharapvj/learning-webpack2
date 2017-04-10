const path = require('path');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const METADATA = {
  title: 'Learning Webpack 1 step at a time...'
}

// important to set the root as parent directory of current directoty (/webpack)
const root = path.resolve(__dirname, '..');

module.exports = function(opts) {
  return {
    entry: path.resolve(root, 'app.js'),
    output: {
      path: path.resolve(root, 'dist'),
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
              presets: ['es2015']
            }
          }
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'step-04-plugins/templates/index.tmpl.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'body'
      }),
      new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery" // for Angular 1.x
      }),
    ],
    devServer: {
      contentBase: path.resolve(root),
      // publicPath: '/dist/',  // important to not use absolute path here!
      compress: true,
      port: 3000
    }
  };
}