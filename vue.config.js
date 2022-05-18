const path = require("path");
// 全局less
const theme = [path.resolve(__dirname, "src/assets/less/index.less")];
// 打包 使用gzip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 定义压缩文件类型
const productionGzipExtensions = ['js', 'css'];

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",

  indexPath: "index.html",

  outputDir: `dist-${require("./package").name}-${require("./package").version}`,

  assetsDir: "static",

  productionSourceMap: false,

  lintOnSave: true,

  devServer: {
    port: 11001,
    https: false,
    open: true,
    hot: true,
    proxy: {
      '/api': { // 腾讯位置服务
        target: 'http://192.168.117.111:11080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        secure: false
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: theme
    }
  },
  chainWebpack: config => {
    if (process.env.use_analyzer) {     // 分析
      config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        microcommon: path.resolve(__dirname,'submodules/micro-app-common-vue')
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'), // 匹配文件名
        threshold: 10240, // 对超过10K的数据进行压缩
        minRatio: 0.8, // 极小比
        deleteOriginalAssets: false // 删除原文件
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'async', // 仅提取按需载入的module
        minSize: 30000, // 提取出的新chunk在两次压缩(打包压缩和服务器压缩)之前要大于30kb
        maxSize: 0, // 提取出的新chunk在两次压缩之前要小于多少kb，默认为0，即不做限制
        minChunks: 1, // 被提取的chunk最少需要被多少chunks共同引入
        maxAsyncRequests: 5, // 最大按需载入chunks提取数
        maxInitialRequests: 3, // 最大初始同步chunks提取数
        automaticNameDelimiter: '~', // 默认的命名规则（使用~进行连接）
        name: true,
        cacheGroups: { // 缓存组配置，默认有vendors和default
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  },
}