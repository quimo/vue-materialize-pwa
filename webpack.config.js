const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const {GenerateSW} = require('workbox-webpack-plugin');
const VueLoaderPlugin = require('vue-loader')

module.exports = {
    mode: "production",
    /*
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    */
    plugins: [
        //service worker + precacher
        //plugin per copiare file statici tra src e dist
        new CopyPlugin([
            { from: './node_modules/materialize-css/dist/css/materialize.min.css', to: './materialize.min.css' },
            { from: './node_modules/materialize-css/dist/js/materialize.min.js', to: './materialize.min.js' },
            { from: './src/manifest.json', to: './manifest.json' },
            { from: './src/style.css', to: './style.css' },
            { from: './src/index.html', to: './index.html' },
            { from: './src/images/', to: './images/' }
        ]),
        //new VueLoaderPlugin(),
        new GenerateSW(),
    ]
}