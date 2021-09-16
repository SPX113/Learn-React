import app from "./http";
import render from "./render";
import routes from "../share/routes";
import createStore from "./createStore";
import { matchRoutes } from "react-router-config";
// '/':服务器端应用程序的入口文件
// '*':接收所有的路由地址
app.get('*',(req,res)=>{
    const store = createStore()
    // 1.获取请求地址 req.path
    // 2.获取路由配置信息 routes
    // 3.根据请求地址匹配出要渲染的组件的路由对象信息
    console.log(matchRoutes(routes,req.path))
    const promise = matchRoutes(routes,req.path).map(({route})=>{
        // 如何才能知道数据什么时候获取完成
        if(route.loadData) return route.loadData(store)
    })
    Promise.all(promise).then(()=>{
        // 返回一个html内容
        res.send(render(req,store))
    })
})