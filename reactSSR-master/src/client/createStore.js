import { applyMiddleware, createStore } from "redux";
import reducers from "../share/store/reducers";
// thunk中间件
import thunk from "redux-thunk";
// 创建store
// window.INITIAL_STATE:在服务端渲染的时候 就把页面需要的数据给到 避免hydrate对比发出警告
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))
export default store