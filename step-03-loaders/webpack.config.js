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
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // exclude: [helpers.root('src', 'styles')]
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
        // exclude: [helpers.root('src', 'styles')]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
    ]
  },
  stats: "errors-only"
}