const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');

const METADATA = {
    LOGIN_URL: 'http://example.com/login',
    LOGOUT_URL: 'http://example.com/logout'
}

module.exports = function (opts) {
  return webpackMerge(commonConfig(opts), {
    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(opts.env),
        'LOGIN_URL': JSON.stringify(METADATA.LOGIN_URL),
        'LOGOUT_URL': JSON.stringify(METADATA.LOGOUT_URL),
      }),
    ]
  });
}