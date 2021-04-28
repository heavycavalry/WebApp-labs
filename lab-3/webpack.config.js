const webpack = require('webpack');
const path = require('path');
const config = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    }
};
module.exports = config;