const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // options...
    indexPath: "test.asp",
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
    }
}