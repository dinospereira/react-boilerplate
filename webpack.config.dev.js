const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        stats: 'errors-only',
        port: 9000,
    },
    devtool: 'source-map',
});
