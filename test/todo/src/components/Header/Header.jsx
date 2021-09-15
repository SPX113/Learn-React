import React from "react";
import {nanoid} from "nanoid"
import "./Header.css"

export default class Header extends React.Component{

    commit = (e) => {
        if(e.keyCode === 13){
            this.props.addTodo({
                id: nanoid(),
                name: e.target.value,
                done: false
            });
            e.target.value = "";
        }
    }


    render(){
        return(
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyDown={this.commit}/>
            </div>
        )
    }
}
