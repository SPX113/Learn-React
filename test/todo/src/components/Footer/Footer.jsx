import React from "react";
import "./Footer.css"

export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            finished: 0
        };
    }

    handleEvent = () => {
        this.setState({
            done: !this.state.done
        },()=>{
            this.props.selectAll(this.state.done);
        })
    }

    componentDidMount() {
        this.timmer = setInterval(() => {
            const {list} = this.props;
            let newFinished = 0;
            list.forEach((item) => {
                if(item.done) newFinished += 1;
            });
            this.setState({
                finished : newFinished
            })
        },500);
    }

    componentWillUnmount() {
        clearInterval(this.timmer);
    }

    render(){
        return(
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleEvent}/>
                </label>
                <span>
                  <span>已完成{this.state.finished}</span> / 全部{this.props.list.length}
                </span>
                <button className="btn btn-danger" onClick={this.props.clearFinishTask}>清除已完成任务</button>
            </div>
        )
    }
}
