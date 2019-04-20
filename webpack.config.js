const path = require("path");

module.exports = {
    mode: "development",
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, "./dist/script"),
        filename: "main.js"
    },
        
    watch: true,
    devtool: "source-map"
};