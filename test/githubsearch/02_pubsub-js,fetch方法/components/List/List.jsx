import React from "react";
import './List.css'
import Item from "./childs/Item/Item"

import PubSub from "pubsub-js";

export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isFirst: true
        }
    }
    componentDidMount() {
        // 订阅 setNewList 事件
        PubSub.subscribe("setNewList",(_, data) => {
            this.getList(data);
        })
    }
    // 获取新的数组
    getList = newList => {
        this.setState({
            list: newList,
            isFirst: false
        })
    }

    render() {
        const {isFirst,list} = this.state;
        return(
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                   list.map(item => {
                        return <Item key={item.id} item={item}/>
                    })
                }
            </div>
        )
    }
}
