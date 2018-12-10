'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: './js/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/Block-Pain/',
        filename: 'block-pain.bundle.js'
    },

    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

};
