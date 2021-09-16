const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const config  = {
    // mode:'development', // 开发环境
    entry:'./src/client/index.js', //入口文件
    output: {
        // __dirname:项目的根路径,path:出口文件路径:项目根路径下的build文件夹下,
        path: path.join(__dirname,'public'),
        // filename:打包文件名称
        filename:'bundle.js',
    },
    // module: {
    //     rules: [{
    //         test:/\.js$/, // 匹配.js结尾的文件
    //         exclude:/node_modules/, // 排除node_modules文件
    //         use:{
    //             loader:'babel-loader', //使用babel-loader加载器去处理.js结尾的文件
    //             options:{// options:babel-loader的相关配置项
    //                 presets:[
    //                     "@babel/preset-env", // @babel/preset-env预置:转换的是高阶的js语法
    //                     "@babel/preset-react", // @babel/preset-react预置:转换jsx语法
    //                 ]
    //             }
    //         }
    //     }]
    // }
}

// 合并公共配置并导出
module.exports = merge(baseConfig,config)