const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const terserPlugin = require('terser-webpack-plugin');
const compressionPlugin = require('compression-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

dotenv.config();

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: './src/frontend/index.js',
    devtool: isProduction
                ? 'hidden-source-map'
                : 'cheap-source-map',
    mode: process.env.NODE_ENV,
    output: {
        path: isProduction
                ? path.join(process.cwd(), './src/server/public')
                : '/',
        filename: 'assets/app.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    filename: 'assets/vendor.js',
                    enforce: true,
                    test(module, chunks) {
                        const name = module.nameForCondition
                                        && module.nameForCondition();
                        return chunks.some(
                            (chunk) => {
                                return chunk.name !== 'vendor'
                                    && /[\\/]node_modules[\\/]/.test(name)
                            }
                        );
                    },
                }
            }
        },
        minimize: isProduction ? true : false,
        minimizer: isProduction ? [new terserPlugin()] : [],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: miniCssExtractPlugin.loader,
                },
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: { name: 'assets/res/[name].[ext]' },
                    },
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: { name: 'assets/res/[name].svg' },
                    }
                ],
            },
            {
                test: /\.ico$/,
                use: [
                    {
                        'loader': 'file-loader',
                        options: { name: '/[name].[ext]' },
                    },
                ],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        inline: false,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new miniCssExtractPlugin({
            filename: 'assets/app.css',
        }),
        isProduction
            ? new compressionPlugin({
                test: /\.js$|.css$/,
                filename: '[path].gz',
            })
            : () => {},
        new WebpackPwaManifestPlugin({
            filename: 'manifest.json',
            name: 'Soymichel.com - Michel Roberto Traña Tablada (+505 8367 - 1719)',
            short_name: 'Soymichel.com',
            description: 'El Sitio Web personal de Michel Roberto Traña Tablada. Encuentra publicaciones y vídeos sobre desarrollo de software',
            start_url: '/',
            background_color: '#ffffff',
            theme_color: '#6d1b7b',
            orientation: 'portrait',
            display: 'standalone',
            icons: [
                {
                    src: path.resolve('src/assets/res/fav.png'),
                    sizes: [96, 128, 192, 256, 384, 512, ],
                    ios: true,
                    destination: path.join('assets/icons'),
                },
            ],
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: isProduction
                    ? path.join(process.cwd(), './src/server/public/sw.js')
                    : 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 100 * 1024 * 1024,
            mode: process.env.NODE_ENV,
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts\.gstatic\.com/,
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'google-fonts',
                    },
                },
                {
                    urlPattern: /\.(jpg|png|gif|ico)$/,
                    handler: 'StaleWhileRevalidate',
                    options: {
                        cacheName: 'soymichel-images',
                    },
                },
            ],
            additionalManifestEntries: [
                {url: '/', revision: null,},
            ],
            navigateFallback: '/',
            navigateFallbackAllowlist: [
                new RegExp('/'),
            ],
        }),
    ],
};