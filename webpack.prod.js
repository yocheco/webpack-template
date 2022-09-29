const common = require("./webpack.common.js");

const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    // [css]
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    // [Analyzer]
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      // [Css]
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
         "css-loader",
         "sass-loader",
        ]
      },
    ],
  },
  optimization: {
    splitChunks:{
      chunks: 'all'
    }
  },
});