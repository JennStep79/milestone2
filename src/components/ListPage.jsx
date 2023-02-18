import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentForm from "./CommentForm";

function ListPage(props) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/api/lists/category/${props.category.category_id}`)
            const data = await response.json()
            setLists(data);
        }
        fetchData();
    }, []);

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
                <Comments list={props.list}/>
            </div>
            
            
        </>
    )
}

export default ListPage;