// development
const ip = require("ip").address()
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')


const HOST =  process.env.HOST || ip || null
const PORT = process.env.PORT || '8000'

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: common.externals.paths.dist,
        hot: true,
        overlay: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})
