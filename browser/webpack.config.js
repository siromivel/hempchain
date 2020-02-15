"use strict"
const dotenv = require("dotenv")
const path = require("path")
const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = () => {
    const env = dotenv.config().parsed

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next])
        return prev
    }, {})

    const loaders = {}
    loaders.tsx = ['awesome-typescript-loader']
    loaders.ts = loaders.tsx

    return {
        entry: path.resolve(__dirname, "src/main.ts"),
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: { loaders }
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: "style-loader" },
                        { loader: "css-loader" }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".vue", ".ts", ".js",]
        },
        output: {
            path: path.resolve(__dirname, "dist/"),
            publicPath: "dist/",
            filename: "bundle.js"
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin(envKeys),
            new VueLoaderPlugin()
        ],
        devServer: {
            // contentBase: path.join(__dirname, "../dist/"),
            port: 9000,
            hot: true,
            open: true
        },
    }
}
