const path = require('path');

module.exports = {
  lintOnSave: true,

  configureWebpack: {
    // output: {
    //   outputDir: __dirname + '/dist/client'
    // },
    resolve: {
      alias: {
        "@img": path.resolve("src/assests/images"),
        '@': path.resolve('src'),
      },
      extensions: ['*', '.js', '.vue', '.json', '.png', '.jpg'],
    },
    // entry: {
    //   app: './src/main.js'
    // }
  },

  assetsDir: './src/assets'
};