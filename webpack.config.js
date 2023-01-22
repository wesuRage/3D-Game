const path = require('path');

module.exports = {
    entry: './src/app.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public', 'dist'),
    },
};