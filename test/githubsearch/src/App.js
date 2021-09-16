import './App.css';
import React from "react";

import Search from "./components/Search/Search";
import List from "./components/List/List";

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            isFirst: true
        }
    }

    getList = newList => {
        this.setState({
            list: newList,
            isFirst: false
        })
    }

    render() {
        return (
            <div className="container">
                <Search getList={this.getList} />
                <List list={this.state.list} isFirst={this.state.isFirst}/>
            </div>
        );
    }
}

