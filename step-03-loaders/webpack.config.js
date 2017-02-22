var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app.js'),
  output: {
	  path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // required ONLY for -p (production) build of webpack
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
          options: {
            publicPath:'dist/'
          }
        }
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
      },
    ]
  },
  stats: "verbose"
}