const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  plugins: [
   
  ],
  module: {
    rules: [
      // [Css]
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
         "css-loader",
         "sass-loader",
        ]
      },
    ],
  }
});