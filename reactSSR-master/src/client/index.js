import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import Home from "../share/pages/Home";
import routes from "../share/routes";
import store from "./createStore";

// ReactDOM.hydrate(<Home />,document.getElementById('root'))
// 客户端二次“渲染” hydrate 会对比服务端渲染下发的数据和当前浏览器生成的数据的差异
// 使用 hydrate 方法对组件进行渲染，为组件元素附加事件
// hydrate 方法在实现渲染的时候，会复用原本已经存在的 DOM 节点，减少重新生成节点以及删除原本 DOM 节点的开销。
ReactDOM.hydrate(
      // 通过 provider 组件，将store 放在了全局的组件可以够得着的地方
    <Provider store={store}>
        <BrowserRouter>
            {/* 把路由规则从数组形式转换为组件形式的要用哪个方法? */}
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root'))