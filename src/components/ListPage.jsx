import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

function ListPage(props) {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <div className="item">
                <h2>{props.list.title}</h2>
                <p>{props.list.list_item}</p>
                <button onClick={() => setClicked(!clicked)}>Reply</button>
            </div>
            {clicked ? <CommentForm id={props.list.list_id}/> 
                : null
            }
            <div className="comments">
                <Comments id={props.list.list_id}/>
            </div>
            
            
        </>
    )
}

export default ListPage;