const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  devtool: 'inline-source-map',
  entry: {
    webpack: 'webpack/hot/poll?1000',
    main: path.join(__dirname, 'src/index.ts'),
  },
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?1000'],
    }),
  ],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'local'),
  },
  plugins: [
    new CopyPlugin([{ from: 'generated/**/*', to: 'generated' }]),
    new Dotenv(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  watch: true,
});
