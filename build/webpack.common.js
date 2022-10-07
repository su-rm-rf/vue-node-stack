const path = require('path')
const { join } = require('path')

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pathResolve = _path => path.resolve(__dirname, _path)

module.exports = env => {
  return {
    entry: './src/main.js',
    output: {
      path: pathResolve('../dist'),
      filename: 'js/[name].code.js',
      chunkFilename: 'js/[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          exclude: /node_module/
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'source-map-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-env']
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 6 * 1024
            }
          }
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                esModule: false,
                modules: {
                  auto: false,
                  localIdentName: '[local]_[hash:base64:8]'
                }
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['', '.vue', '.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': join('../src')
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: pathResolve('../public/index.html'),
        filename: 'index.html',
        title: 'webpack5 vue3'
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].style.css',
        chunkFilename: 'css/[name].css'
      })
    ]
  }
}