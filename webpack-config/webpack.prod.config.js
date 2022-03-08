const path = require('path')
// 生产环境的配置
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//这个插件的作用是 在每次成功构建之后帮我们清空dist目录
//因为有的时候为了避免缓存问题, 我们需要在文件后加入哈希,在多次构件后,会生成很多无用文件
module.exports = {
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: __dirname + '/assets',
                    to: 'assets',
                    noErrorOnMissing: true
                },
            ]
        })
    ],
    //devtool: 'source-map',

}
