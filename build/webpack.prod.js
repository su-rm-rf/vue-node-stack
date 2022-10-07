const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
  const prod_config = {
    mode: 'production',
    optimization: {
      minimizer: [
        new CssMinimizerPlugin()
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  }

  if (env && env.analyzer) {
    prod_config.plugins.push(new BundleAnalyzerPlugin())
  }
  
  return merge(common(env), prod_config)
}