const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            loaders: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

/*loader: customize the behavior of webpack when it loads a certain file (scss to css)
babel-cli (command line)
babel-core (run babel from tools like webpack) stil need to configure it
babel-loader (webpack plugin) allow us to teach webpack how to run babel when webpack sees certain files

*/