var webpack = require('webpack');
var path = require('path');
var FixModuleIdAndChunkIdPlugin = require('fix-moduleid-and-chunkid-plugin');

module.exports = {
  entry: {
    main: [
      'react-dom',
      'i18next',
      'i18next-xhr-backend'
    ],
  },
  output: {
    path: 'dist',
    filename: 'vendors.js',
    library: 'vendors_test',
    hashDigestLength: 32,
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new FixModuleIdAndChunkIdPlugin(),
    new webpack.DllPlugin({
      path: path.resolve('dist/manifest.json'),
      name: 'vendors_test',
    })
  ],
};
