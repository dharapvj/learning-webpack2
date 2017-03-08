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
    resolve: {
      // which extensions should be considered for resolution - automatically?
      // any extensions "referred" via files with these extensions are resolved as well.
      extensions: ['.ts', '.js', '.json'],
      // default - modules: ["node_modules"]
      modules: [path.resolve(root, 'src'), 'node_modules'],
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
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {presets: ['es2015']}
            },
            {
              loader: 'ts-loader'
            }
          ]
        }, 
        {
          test: /\.json$/,
          use: 'json-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ],
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          use: { 
            loader:'file-loader',
            /*options: {
              publicPath:'dist/'
            }*/
          }
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader:'url-loader',
            options: {
              limit:10000,
              mimetype:'application/font-woff',
              // publicPath:'dist/'
            }
          }
        },
        {
          test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: {
            loader:'file-loader',
            /*options: {
              publicPath:'dist/'
            }*/
          }
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'step-05-plugins/templates/index.tmpl.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'body'
      }),
      new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
    ],
    stats: "verbose",
    devServer: {
      contentBase: path.resolve(root),
      // publicPath: '/dist/',  // important to not use absolute path here!
      compress: true,
      port: 3000
    }
  };
}