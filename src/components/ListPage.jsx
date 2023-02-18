import Comments from "./Comments";
import CommentForm from "./CommentForm";

function ListPage(props) {
    return (
        <>
            <div className="item">
                <h2>{props.list.title}</h2>
                <p>{props.list.list_item}</p>
            </div>
            <CommentForm id={props.list.list_id}/>
            <Comments list={props.list}/>
        </>
    )
}

export default ListPage;