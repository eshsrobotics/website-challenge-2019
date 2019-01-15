const  CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	baseUrl: '',
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