'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pck = require('../package.json');

const resolvePath = (...paths) => path.resolve(__dirname, '..', ...paths);
const isProd = process.env.NODE_ENV === 'production';
const serverConfig = { port: 3001 };
const envConfig = {
    dirs: {
        sources: "src/",
        dist: "build/",
        fonts: "fonts/",
        images: "img/",
        styles: "css/",
        scripts: "js/",
        public: "/"
    },
    context: '.',
    devtool: isProd ? false : 'source-map',
    uglify: isProd
};

let options = {
    context: resolvePath(envConfig.context),
    entry: {
        app: resolvePath(envConfig.dirs.sources, 'index.js'),
        vendor: Object.keys(pck.dependencies)
    },
    output: {
        path: resolvePath(envConfig.dirs.dist),
        publicPath: envConfig.dirs.public,
        filename: `${envConfig.dirs.scripts}[name].js`
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'template.html') }),
        new CleanWebpackPlugin([resolvePath(envConfig.dirs.dist)], {
            root: resolvePath(envConfig.context)
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: `'${process.env.NODE_ENV}'` }
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new ExtractTextPlugin(`${envConfig.dirs.styles}[name].css`)
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            publicPath: envConfig.dirs.style,
                            fallback: 'vue-style-loader',
                            use: ['css-loader']
                        }),
                        scss: ExtractTextPlugin.extract({
                            publicPath: envConfig.dirs.style,
                            fallback: 'vue-style-loader',
                            use: ['css-loader', 'sass-loader']
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: envConfig.dirs.images,
                    publicPath: envConfig.dirs.public
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    publicPath: envConfig.dirs.style,
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    publicPath: envConfig.dirs.style,
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolvePath(envConfig.dirs.sources)
        },
        modules: [resolvePath(envConfig.dirs.sources), 'node_modules']
    },
    performance: {
        hints: false
    },
    devtool: envConfig.devtool
};

if (serverConfig !== null) {
    options = merge(options, {
        devServer: {
            historyApiFallback: true,
            noInfo: true,
            contentBase: resolvePath(envConfig.dirs.sources),
            compress: true,
            public: serverConfig.public || undefined,
            host: serverConfig.host || 'localhost',
            port: serverConfig.port || 80,
            proxy: serverConfig.proxy || {}
        }
    });
}

if (envConfig.uglify) {
    options = merge(options, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: false
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            })
        ]
    });
}

module.exports = options;
