import {NavLink} from "react-router-dom";

export default function MyLink(props){
    return(
        <NavLink activeClassName="active" className="list-group-item" {...props}/>
    )
}