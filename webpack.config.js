const webpack = require("webpack");
const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "entry",
                  targets: "> 5%, not dead"
                }
              ],
              "@babel/preset-react"
            ],
            env: {
              production: {
                plugins: [["emotion", { hoist: true }]]
              },
              development: {
                plugins: [["emotion", { sourceMap: true, autoLabel: true }]]
              }
            },
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    contentBase: "./dist"
  }
};

module.exports = config;
