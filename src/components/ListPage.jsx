import { useState, useEffect } from "react";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import EditListItem from "./EditListItem";
import { AiOutlineEdit } from "react-icons/ai";
import{ BsReply } from "react-icons/bs"
import{ MdOutlineDelete } from "react-icons/md"

//Buttons to edit, reply, and delete for posts

function ListPage(props) {
    const [replyClicked, setReplyClicked] = useState(false);
    const [editClicked, setEditClicked] = useState(false);

    const handleDelete = () => {
        window.location.reload();
        fetch(`http://localhost:3001/api/lists/${props.list.list_id}`, {
            method: "DELETE"
        })
        .then(res => res.json());
    }

    return (
        <>
            { editClicked
                ? <EditListItem id={props.list.list_id}/>
                :
                <div className="item">
                    <h2>{props.list.title}</h2>
                    <p>{props.list.list_item}</p>
                    <button id="edit" onClick={() => setEditClicked(!editClicked)}><AiOutlineEdit /></button>
                    <button id="reply" onClick={() => setReplyClicked(!replyClicked)}><BsReply/></button>
                    <button onClick={handleDelete}><MdOutlineDelete /></button>
                </div>
            }
            {replyClicked ? <CommentForm id={props.list.list_id}/> 
                : null
            }
            <div className="comments">
                <Comments id={props.list.list_id}/>
            </div>
        </>
    )
}

export default ListPage;