const path = require('path');
const SWPrecache = require('sw-precache-webpack-plugin');

module.exports = {
    mode: "production",
    plugins: [
        new SWPrecache({
            cacheId: 'demoapp',
            filepath: 'service-worker.js',
            staticFileGlobs: [
            'index.html',
            'manifest.json',
            ],
            stripPrefix: '/'
        })
    ]
}