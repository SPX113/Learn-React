import React from "react";
import { Link } from 'react-router-dom'
// 客户端和服务端公用组件 属于同构代码
function Home () {
    return <div onClick={()=>{console.log('hello')}}>
                Home works1234
                <Link to="/List"> jump to list </Link>
            </div>
}

export default Home