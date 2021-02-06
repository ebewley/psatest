const path = require('path');
/*
module.exports = {
  mode: "development",
  //entry: path.resolve(__dirname, 'app/main.ts'),
  entry: "./app/main.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
*/

module.exports = {
    mode: "development",
    entry: "./app/main.ts",
    output: {
        //filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by ts-loader.
            { test: /\.tsx?$/, loader: "ts-loader" },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
    // optimization: {
    //     runtimeChunk: "single",
    //     splitChunks: {
    //         chunks: "all",
    //         maxInitialRequests: Infinity,
    //         minSize: 0,
    //         cacheGroups: {
    //             bootstrapVendor: {
    //                 test: /[\\/]node_modules[\\/](react-bootstrap)[\\/]/,
    //                 name: "bootstrapVendor",
    //             },
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/](!react-bootstrap)(!lodash)(!moment)(!moment-timezone)[\\/]/,
    //                 name: "vendor",
    //             },
    //         },
    //     },
    // },
};