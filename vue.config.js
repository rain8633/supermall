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
  }
}