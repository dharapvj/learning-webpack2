const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev

const DefinePlugin = require('webpack/lib/DefinePlugin');

// Uncomment for DLL Plugin demo - part 1
/*
const webpackMergeDll = webpackMerge.strategy({plugins: 'replace'});
const DllBundlesPlugin = require('webpack-dll-bundles-plugin').DllBundlesPlugin;
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
*/

const METADATA = {
    LOGIN_URL: 'http://localhost:3001/login',
    LOGOUT_URL: 'http://localhost:3001/logout'
}

module.exports = function (opts) {
  return webpackMerge(commonConfig(opts), {
    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(opts.env),
        'LOGIN_URL': JSON.stringify(METADATA.LOGIN_URL),
        'LOGOUT_URL': JSON.stringify(METADATA.LOGOUT_URL),
      }),

      // Uncomment for DLL plugin - part 2
      /*new DllBundlesPlugin({
        bundles: {
          polyfills: [
            'rangeslider.js',
          ],
          vendor: [
            'lodash',
            'jquery',
          ]
        },
        dllDir: path.resolve(root, 'dll'),
        webpackConfig: webpackMergeDll(commonConfig({env: opts.env}), {
          devtool: 'cheap-module-source-map',
        })
      }),
      new AddAssetHtmlPlugin([
        { filepath: path.resolve(root, `dll/${DllBundlesPlugin.resolveFile('polyfills')}`) },
        { filepath: path.resolve(root, `dll/${DllBundlesPlugin.resolveFile('vendor')}`) }
      ]),*/

    ]
  });
}