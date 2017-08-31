module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react','stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true
    }
};