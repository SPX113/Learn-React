import {Route} from "react-router-dom";

import MyLink from "../../components/MyLink/MyLink";
import Message from "./Message/Message";
import News from "./News/News";

export default function Home(){
    return(
        <div className="panel">
            <div className="panel-body">
                <div>
                    <h2>Home组件内容</h2>
                    <div>
                        <ul className="nav nav-tabs">
                            <li>
                                <MyLink to="/home/news">News</MyLink>
                            </li>
                            <li>
                                <MyLink to="/home/message">Message</MyLink>
                            </li>
                        </ul>
                    </div>
                    <Route  path="/home/news" component={News}/>
                    <Route  path="/home/message" component={Message}/>
                </div>
            </div>
        </div>
    )
}
