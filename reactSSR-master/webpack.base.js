// webpack公共配置 可以在需要的地方用merge跟其它配置合并
const path = require('path')
module.exports = {
    mode:'development', // 开发环境
    module: {
        rules: [{
            test:/\.js$/, // 匹配.js结尾的文件
            exclude:/node_modules/, // 排除node_modules文件
            use:{
                loader:'babel-loader', //使用babel-loader加载器去处理.js结尾的文件
                options:{// options:babel-loader的相关配置项
                    presets:[
                        ["@babel/preset-env",{
                            useBuiltIns:"usage" // 该配置让浏览器支持异步函数
                        }], // @babel/preset-env预置:转换的是高阶的js语法
                        "@babel/preset-react", // @babel/preset-react预置:转换jsx语法
                    ]
                }
            }
        }]
    }
}