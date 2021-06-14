const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = [{
        target: "node",
        mode: "development",
        entry: "./src/server.ts",
        output: {
            filename: "server.js",
            path: path.resolve(__dirname, "dist"),
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".json"],
        },
        devtool: "inline-source-map",
        module: {
            rules: [
                // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
                {
                    test: /\.tsx?$/,
                    use: ["ts-loader"],
                    exclude: /node_modules/,
                },
            ],
        },
        externals: {
            bufferutil: "bufferutil",
            "utf-8-validate": "utf-8-validate",
        },
    },
    {
        entry: "./src/index.ts",
        mode: "development",
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "index.js",
        },
    },
];

// const path = require("path");
// const CopyPlugin = require("copy-webpack-plugin");

// module.exports = {
//     mode: "development",
//     entry: "./src/index.ts",
//     output: {
//         filename: "index.js",
//         path: path.resolve(__dirname, "dist"),
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js", ".json"],
//     },
//     devtool: "inline-source-map",
//     plugins: [
//         new CopyPlugin({
//             patterns: [{
//                 from: path.resolve(__dirname, "src/index.html"),
//                 to: path.resolve(__dirname, "dist"),
//             }, ],
//         }),
//     ],
//     module: {
//         rules: [
//             // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
//             {
//                 test: /\.tsx?$/,
//                 use: ["ts-loader"],
//                 exclude: /node_modules/,
//             },
//             {
//                 test: /\.s[ac]ss$/i,
//                 use: [
//                     // Creates `style` nodes from JS strings
//                     {
//                         loader: "style-loader",
//                         // options: {
//                         //   // injectType: "singletonStyleTag"
//                         //   // injectType: "linkTag"
//                         // }
//                     },
//                     // Translates CSS into CommonJS
//                     "css-loader",
//                     // Compiles Sass to CSS
//                     "sass-loader",
//                 ],
//             },
//         ],
//     },
//     mode: "development",
//     entry: "./src/server.ts",
//     output: {
//         filename: "server.js",
//         path: path.resolve(__dirname, "dist"),
//     },
//     resolve: {
//         extensions: [".tsx", ".ts", ".js", ".json"],
//     },
//     devtool: "inline-source-map",
//     externals: {
//         bufferutil: "bufferutil",
//         "utf-8-validate": "utf-8-validate",
//     },
//     resolve: {
//         fallback: { "assert": false }
//     },
//     plugins: [
//         new CopyPlugin({
//             patterns: [{
//                 from: path.resolve(__dirname, "src/index.html"),
//                 to: path.resolve(__dirname, "dist"),
//             }, ],
//         }),
//     ],
// };