/*jslint es6 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./docs/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: '.dist',
        mimeTypes: { 'text/html': ['phtml'] }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './docs/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                      postcssOptions: {
                        plugins: [
                            'postcss-preset-env',
                        ],
                      },
                    },
                  },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
        ]
    }
};