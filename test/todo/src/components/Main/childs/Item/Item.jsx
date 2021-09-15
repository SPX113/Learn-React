import React from "react";
import "./Item.css"

export default class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isSelect: false
        }
    }
    mouseEnterHandleEvent = () => {
        this.setState({
            isSelect: true
        })
    }
    mouseLeaveHandleEvent = () => {
        this.setState({
            isSelect: false
        })
    }
    select = (id) => {
        return (e) =>{
            this.props.selectTodo(id);
        }
    }
    delTodo = (id) => {
        return (e) => {
            this.props.delTodo(id);
        }
    }

    render() {
        const {item} = this.props;
        return(
            <li onMouseEnter={this.mouseEnterHandleEvent} onMouseLeave={this.mouseLeaveHandleEvent}
                style={{backgroundColor: this.state.isSelect ? "#ddd":"white"}}>
                <label>
                    <input type="checkbox" checked={item.done} onChange={this.select(item.id)}/>
                    <span>{item.name}</span>
                </label>
                <button className="btn btn-danger" style={{display: this.state.isSelect ? "block":"none"}}
                        onClick={this.delTodo(item.id)} >
                    删除
                </button>
            </li>
        )
    }
}