import { applyMiddleware, createStore } from "redux";
import reducers from "../share/store/reducers";
import thunk from "redux-thunk";// thunk中间件

// 因为是在接收到请求时创建的store所以把它放到一个函数中
export default () => createStore(reducers, {}, applyMiddleware(thunk))// 创建store