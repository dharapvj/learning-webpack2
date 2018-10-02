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
            cacheDirectory: path.resolve(__dirname, 'babelCache'),
            presets: [
              ['es2015', {modules: false}]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: { 
          loader:'file-loader',
          options: {
            publicPath:'dist/'
          }
        }
      },
      /* UNCOMMENT BELOW PORTION TO SEE ALL LOADERS WORKING */
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
      /* {
        test: /\.json$/,
        use: 'json-loader'
      }, */
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
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader:'url-loader',
          options: {
            limit:10000,
            mimetype:'application/font-woff',
            publicPath:'dist/'
          }
        }
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader:'file-loader',
          options: {
            publicPath:'dist/'
          }
        }
      }
    ]
  },
  stats: "verbose"
}