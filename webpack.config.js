const path = require('path');
const SWPrecache = require('sw-precache-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    plugins: [
        //plugin per usare i service worker
        new SWPrecache({
            cacheId: 'demoapp',
            filepath: 'service-worker.js',
            staticFileGlobs: [
            'index.html',
            'manifest.json',
            ],
            stripPrefix: '/'
        }),
        //plugin per copiare file statici tra src e dist
        new CopyPlugin([
            { from: './service-worker.js', to: './service-worker.js' },
            { from: './node_modules/materialize-css/dist/css/materialize.min.css', to: './materialize.min.css' },
            { from: './node_modules/materialize-css/dist/js/materialize.min.js', to: './materialize.min.js' },
            { from: './src/manifest.json', to: './manifest.json' },
            { from: './src/style.css', to: './style.css' },
            { from: './src/images/', to: './images/' }
        ])
    ]
}