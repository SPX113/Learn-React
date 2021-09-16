// 创建node服务实例 方便在其它地方应用
import express from 'express'
const app = express()
// express.static('public') 指定静态文件的访问路径,比如在html中访问script的src属性时 会以这个文件夹为根路径
app.use(express.static('public'))
// 服务运行在3000端口
app.listen(3000, ()=> console.log('app is running on 3000 port'))
export default app
