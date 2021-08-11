const { name } = require('./package');
module.exports = {
  devServer: {
    // open: true,
    // hot: true,
    // compress: true,
    // disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};