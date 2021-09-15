import React from "react";
import "./Main.css"
import Item from "./childs/Item/Item";

export default class Main extends React.Component{
    render() {
        return(
            <ul className="todo-main">
                {
                    this.props.list.map((item) => {
                        return(
                            <Item key={item.id} item={item} selectTodo={this.props.selectTodo} delTodo={this.props.delTodo}/>
                        )
                    })
                }
            </ul>
        )
    }
}
