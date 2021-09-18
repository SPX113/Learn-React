import React from "react";

import {Link, Route} from "react-router-dom";
import Item from "./Item/Item";

export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageArr:[
                {id:'01',title:'消息1'},
                {id:'02',title:'消息2'},
                {id:'03',title:'消息3'},
            ]
        }
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(item => {
                            return(
                                <li key={item.id}>
                                    <Link replace to={`/home/message/${item.id}/${item.title}`}>{item.title}</Link>
                                    &nbsp;&nbsp;
                                </li>
                            )
                        })

                    }
                </ul>
                <Route path="/home/message/:id/:title" component={Item}/>
            </div>
        )
    }
}
