const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    publicPath: "",
    css: {
        extract: false
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                inject: "body",
                template: 'public/index.html'
            })
        ]
    },
    indexPath: "include.asp",
    pages: {
        theme: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'include.asp'
        }
    }
}