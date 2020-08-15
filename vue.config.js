module.exports = {
  configureWebpack:{
    resolve:{/*路径相关问题*/
    alias:{
      'assets':'@/assets',
      'components':'@/components',
      'common':'@/common',
      'network':'@/network',
      'view':'@/view'
    }
    }
  },
  devServer: {
    public: require('os').networkInterfaces()[Object.keys(require('os').networkInterfaces())[0]][1].address + ':8080',
    disableHostCheck: true
  }
}
