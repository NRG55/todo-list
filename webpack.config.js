const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), 
        clean: true,     
    },
    devtool: 'inline-source-map',
    devServer: {
        static:'./dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',            
            filename: 'index.html',
            inject: 'head',
            scriptloading: 'defer',
        })
    ]
};