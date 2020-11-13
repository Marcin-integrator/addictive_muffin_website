/*jslint es6 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./docs/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: '.dist',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './docs/index.html',
            favicon: './docs/img/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
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
                use: [MiniCssExtractPlugin.loader, 'css-loader',
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
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './img'
                    },
                  },
                ],
            },
            /*{
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './img'
                    },
                  },
                ],
            },*/
            /*{
                test:/\.html$/,
                use: [
                  'html-loader'
                ]
              },*/
        ]
    }
};