const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  entry: {
    main: path.join(__dirname, "services/main/index.ts"),
    auth: path.join(__dirname, "services/auth/index.ts"),
    secondary: path.join(__dirname, "services/secondary/index.ts"),
    gateway: path.join(__dirname, "gateway/index.ts")
  },
  externals: [nodeExternals({})],
  mode: "production",
  plugins: [new Dotenv(), new CleanWebpackPlugin()]
});
