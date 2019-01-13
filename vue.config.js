const  CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	baseUrl: 'WebsiteChallenge2019',
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