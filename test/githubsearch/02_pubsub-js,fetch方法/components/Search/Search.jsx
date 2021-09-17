import React from "react";
import PubSub from "pubsub-js";

export default class Search extends React.Component{
    node = React.createRef();

    search = async () => {
        const keyWord = this.node.current.value;
        if(keyWord === ""){
            alert("关键字不能为空!");
            return;
        }

        // fetch  async/await 混用
        try{
            const request = await fetch('/api/search/users2?q=' + keyWord);
            const data = await request.json();
            PubSub.publish("setNewList", data.items);
        }catch (e) {
            console.log(e);
        }


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
