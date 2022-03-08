//所有配置文件的入口
const {merge} = require('webpack-merge'); //插件 把两个webpack文件合并
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.prod.config');
//如果是开发环境 就选择开发环境的配置否则选择生产环境的配置
let config = process.NODE_ENV === 'development' ? devConfig: proConfig;

//将baseConfig和config合并
module.exports = merge(baseConfig, config);