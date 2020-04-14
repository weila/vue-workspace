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
  },
  devServer: {
    // 设置代理
    proxy: {
      '/api': {
        // 目标 API 地址
        target: 'http://120.27.19.166:7002/', // 接口的域名
        // 如果要代理 websockets
        ws: false,
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        // pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
        // '^/api/zzjserver': '/zzjserver'
        // }
      }
    }
  }
}