const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: path.resolve(__dirname, "src", 'index.js'),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'app.js',
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/i,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            // У вас на уроке файл index.html сохранялся в ту же папку, что и app.js. Но когда вы запускали dev-server
            // в корне (localhost:port) у вас сразу все завелось. Откуда сервер узнал, что index.html лежит в той папке?
            // У меня пришлось прописывать localhost:port/build. Но что бы каждый раз при развертке сервера
            // не дописывать "/build" переписал filename, что бы index.html сохранялся в корень.
            filename: path.resolve(__dirname, 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ],
};
