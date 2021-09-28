import React from "react";
import {connect} from "react-redux";

import {add,jian} from "../../redux/actions/count"

class Count extends React.Component{
    add = () =>{
        this.props.add(1);
    }
    jian = () =>{
        this.props.jian(2);
    }
    render() {
        const {count} = this.props;
        return(
            <div>
                <p>当前数值为{count}</p>
                <button onClick={this.add}>+1</button>
                <button onClick={this.jian}>-2</button>
            </div>
        )
    }
}

export default connect(
    state => ({count: state.count}),
    {
        add,jian
    }
)(Count);
