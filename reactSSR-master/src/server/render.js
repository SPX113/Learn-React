import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { renderToString } from "react-dom/server";
// import Home from "../share/pages/Home";
import routes from "../share/routes";
import { Provider } from "react-redux";

// serialize 对数据进行转换 防止xss攻击
import  serialize  from "serialize-javascript";

export default (req,store) => {
    // renderToString的返回结果是:将组件转换成html后的字符串
    // const content = renderToString(<Home />)
    // renderRoutes:返回组件形式的路由规则
    // StaticRouter:把数组形式的路由规则转换成组件形式的路由规则
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    )
    // const initalState = JSON.stringify(store.getState());
    const initalState = serialize(store.getState());
    return `
        <html>
            <head>
                <title>React SSR</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>window.INITIAL_STATE = ${initalState}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}