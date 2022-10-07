const path = require('path')

const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = env => {
  const dev_config = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: '../dist',  // 从目录提供静态文件
      port: 9002,
      // historyApiFallback: true
    },
    cache: {
      type: 'filesystem',
      cacheDirectory: path.resolve(__dirname, '.temp_cache')
    },
    optimization: {
      // runtimeChunk: 'single'
    }
  }
  return merge(common(env), dev_config)
}