module.exports = {
    entry: [
      './index.js'
    ],
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'app.js'
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['react', "es2015", "stage-1"],
        },
      }]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
};