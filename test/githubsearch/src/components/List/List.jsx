import React from "react";
import './List.css'
import Item from "./childs/Item/Item"

export default class List extends React.Component{
    render() {
        const {isFirst} = this.props;
        return(
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                    this.props.list.map(item => {
                        return <Item key={item.id} item={item}/>
                    })
                }
            </div>
        )
    }
}
