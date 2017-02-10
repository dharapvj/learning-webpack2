var path = require('path');

module.exports = {
  entry: './step-01/app.js',
  output: {
	path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}