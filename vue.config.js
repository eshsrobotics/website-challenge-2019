const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('dart-sass')
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/assets/local-image/',
          to: 'local-image'
        }
      ])
    ]
  }
}
