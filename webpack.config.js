var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/manifest.json'),
    })
  ],
};
