const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@c', resolve('src/components'))
      .set('@api', resolve('src/api'))
      .set('@images', resolve('src/assets/images'))
      .set('@css', resolve('src/assets/css'))
      .set('@js', resolve('src/assets/js'))
  }
}