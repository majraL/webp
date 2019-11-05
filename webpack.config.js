const webpack = require("webpack");
const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const UglifyJs = require("uglifyjs-webpack-plugin");
const OptimizeCss = require("optimize-css-assets-webpack-plugin");

let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "output.js"
  },
  resolve: {
    extensions: [".js", ".jsx", "json", "scss", "css", "jpeg", "jpg", "gif", "svg"],
    alias: {
      images: path.resolve(__dirname, "src/assets/images")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js,
        exclude: /node_modules/, // exclude the node_modules directory,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/, // files ending with .scss,
        // Right to left, sass-loader compiles SCSS, css-loader allows us to require the SCSS and style-loader injects it to our page
        use: ExtractTextWebpackPlugin.extract({ // call out plugin with extract method
          use: ["css-loader", "sass-loader"], // use this loaders
          fallback: "style-loader" // fallback for any css not extracted
        })
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["file-loader?context=src/assets/images/&name=images/[path][name].[ext]", {
          loader: "image-webpack-loader",
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            pngquant: {
              quality: "75-90",
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("styles.css") // call the ExtractTextWebpackPlugin constructor and name our css file
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"), // A directory or URL to server HTML from
    watchContentBase: true,
    historyApiFallback: true, // fallback to index.html for Single Page Apps
    inline: true, // inline mode, set to false to disable including client scripts (like livereload)
    open: true // open default browser while launching
  },
  devtool: "eval-source-map" // enable devtool for better debugging experience
};

module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new UglifyJs(), // call the uglify plugin
    new OptimizeCss()
  );
}
