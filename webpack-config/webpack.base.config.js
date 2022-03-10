// 公共环境的配置
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")
//不工作 因为dev server 没有dist文件夹
//const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {

    mode: 'development',
    entry: './src/index.js', //入口文件
    //output 配置输出 输出的文件名叫做app.js 输出目录使用默认的dist目录
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        //filename: 'index.js',
        // path: path.join(__dirname, '..', 'dist')
    },
    externals: {
        jquery: 'jQuery',
        // winddata: 'wind-data',
        // windbundle: 'wind-bundle',
    },

    resolve: {
        //指定三个扩展名
        extensions: ['.js', '.ts', '.tsx'],
        // modules: ['src', 'node_modules', 'assets']
    },

    //因为引用了 typescript 所以这里引用ts-loader
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/i, //ts-loader的正则就是以 ts tsx结尾的文件
            //     use: [{
            //         loader: 'ts-loader'
            //     }],
            //     exclude: /node_modules/ //排除node_modules下的文件
            // },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        //通过一个模板帮我们生成网站的首页,并且把输出的文件自动嵌入到这个文件中
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './src/tpl/index.html',
            // filename: 'index.html'

        }),
        // new NodemonPlugin({
        //     //script: './dist/server.js',
        //     // What to watch.
        //     watch: path.resolve('./src'),
        // }), // Dong
        // new CopyWebpackPlugin({
        //     patterns: [
        //     {from: "./static", to: "static"}
        //     ]
        //     })
    ]

}
