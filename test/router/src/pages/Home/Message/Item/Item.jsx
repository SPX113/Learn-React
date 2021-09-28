import React from "react";


const DetailData = [
    {id:'01',content:'你好，中国'},
    {id:'02',content:'你好，尚硅谷'},
    {id:'03',content:'你好，未来的自己'}
];
export default class Item extends React.Component {
    render() {
        const {id,title} = this.props.match.params;
        const {content} = DetailData.find(item => {
            return item.id = id;
        });
        return (
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        )
    }
}
