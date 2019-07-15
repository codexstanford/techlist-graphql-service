const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs',

    chunkFilename: 'static/js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
};
