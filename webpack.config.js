const webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "app.bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};
