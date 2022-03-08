// 开发环境的配置
module.exports = {
    //开启 source-map, 
    //cheap 表示 source-map忽略文件的列信息, 调试的时候文件的列信息是没有用的
    //module 表示 定位到我们的ts源码 而不是经过loader转译过的js源码
    //eval-source-map 表示会将source-map以dataURL的形式打包到文件中
    //他的重编译速度是很快的 不用担心性能问题
    //devtool: 'cheap-module-eval-source-map',
    dev: {
      host: '0.0.0.0',
    },
    
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        host: '0.0.0.0',
        port: 8081,
        open: true,
        // 热替换
        hotOnly: true, // 模块刷新，不会做页面刷新
        // 解决跨域（代理的原理）
        proxy: {
          // 当碰到/api时，直接服务器代理到9092接口
          "/": {
            target: "http://localhost:55555",
            ws: true
          },
          "/geoserver": {
            target: "http://localhost:8080",
          },
        }
    }
}