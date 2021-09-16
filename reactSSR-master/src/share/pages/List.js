import React,{useEffect} from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom'
import { fetchUser } from "../store/actions/user.action";
// 客户端和服务端公用组件 属于同构代码
function List ({user,dispatch}) {
    useEffect(() => {
        dispatch(fetchUser())
    }, []);
    return <div>
                List works
                {/* <Link to="/"> jump to Home </Link> */}
                <ul>
                    {user.map(item=><li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
}

function loadData (store) {
    return store.dispatch(fetchUser())
}

// mapStateToProps：将store中的state传递到组件的props中，
// mapStateToProps方法的参数是state，返回值是一个对象，会传递到组件中
const mapStateToProps = (state) => ({user: state.user});

//connect方法返回一个高阶组件，然后传入Cart组件进行导出
// 1. connect 会帮助我们去订阅 store，当store中的状态发生了变化后，可以帮我们重新渲染组件
// 2. connect 方法可以让我们获取 store 中的状态，将状态通过组建的props属性映射给组件
// 3. connect 方法可以让我们获取 dispatch 方法
export default {
    component: connect(mapStateToProps)(List),
    loadData
}