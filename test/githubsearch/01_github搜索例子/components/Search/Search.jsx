import React from "react";
import axios from "axios";

export default class Search extends React.Component{
    node = React.createRef();

    search = () => {
        const keyWord = this.node.current.value;
        if(keyWord === ""){
            alert("关键字不能为空!");
            return;
        }
        axios.get('/api/search/users2?q=' + keyWord).then(
            result => {
                this.props.getList(result.data.items);
            },
            err => {
                alert(err)
            }
        )
        this.node.current.value = '';
    }

    render() {
        return(
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={this.node}/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
