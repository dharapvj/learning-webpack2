const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin = require('webpack/lib/DefinePlugin');
const METADATA = {
    LOGIN_URL: 'http://localhost:3001/login',
    LOGOUT_URL: 'http://localhost:3001/logout'
}

module.exports = function (env) {
  return webpackMerge(commonConfig({env}), {
    plugins: [
       new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'LOGIN_URL': JSON.stringify(METADATA.LOGIN_URL),
        'LOGOUT_URL': JSON.stringify(METADATA.LOGOUT_URL),
      })
    ]
  });
}