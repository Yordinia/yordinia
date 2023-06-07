/*eslint-disable*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './MyXP/YouTube/threeD_Portfolio/index.js', // Entry point for the application
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: './dist', // Serve static files from the 'dist' directory
    port: 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './MyXP/YouTube/threeD_Portfolio/index.html', // Use the index.html file as a template
    }),
  ],
  output: {
    filename: '[name].bundle.js', // Use the entry point name for the bundle filename
    path: path.resolve(__dirname, 'dist'), // Output to the 'distt' directory
    clean: true, // Clean the output directory before building
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Process CSS files with 'style-loader' and 'css-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Process image files as assets
      },
      {
        test: /bootstrap\/dist\/js\/umd\//,
        use: 'imports-loader?jQuery=jquery',
      },
    ],
  },
};
