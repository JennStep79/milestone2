import { useState, useEffect } from "react";
import EditCommentForm from "./EditCommentForm";

function Comments(props) {
    const [comments, setComments] = useState([]);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const fetchCommentData = async () => {
            const response = await fetch(`http://localhost:3001/api/comments/${props.list.list_id}`)
            const data = await response.json()
            setComments(data);
        }
        fetchCommentData();
    }, []);

    let mapComments = comments.map((comment, index) => {
        const handleDelete = () => {
            window.location.reload();
            fetch(`http://localhost:3001/api/comments/${comment.comment_id}`, {
                method: "DELETE"
            })
            .then(res => res.json());
        }

        const handleUpdate = () => {
            console.log("test",comment);

            window.location.reload();
            fetch(`http://localhost:3001/api/comments/${comment.comment_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(comment)
            })
            .then(res => res.json());
        }

        return (<>
            <div className="container" key={index}>
                <p>{comment.comment}</p>
                <button onClick={() => setClicked(!clicked)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {clicked ? <EditCommentForm id={props.comment.comment_id}/> 
                : null
            }
           </>
        )
    });

    return (
        <div>
            {mapComments}
        </div>
    )
}

export default Comments;