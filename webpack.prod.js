const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    // [css]
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
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
      chunks: 'async'
    }
  },
});