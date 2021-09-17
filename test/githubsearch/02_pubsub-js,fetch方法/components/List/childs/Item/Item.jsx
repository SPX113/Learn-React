export default function Item(props){
    const {item} = props;
    return (
        <div className="card">
            <a href={item.html_url} target="_blank" rel="noreferrer">
                <img src={item.avatar_url} style={{width: '100px'}} alt="head_photo"/>
            </a>
            <p className="card-text">{item.login}</p>
        </div>
    )
}