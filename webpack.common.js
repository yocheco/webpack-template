const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CopyPlugin = require('copy-webpack-plugin');
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    clean: true,
  },
  plugins: [
    // [Html pages]
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.hbs',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }      
    }),
    // [Clean css]
    new PurgeCSSPlugin({
      paths: ["./src/index.hbs"],
      safelist: { standard: [/^dark/] },
      variables: true,
      keyframes: true
    }),
    // [Assetes]
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "./assets" },
      ],
    }),
  ],
  module: {
    rules: [
      // [Handlebars]
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"]
      },
      // [@Babel]
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
