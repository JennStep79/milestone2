import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import EditListItem from "./EditListItem";
import { AiOutlineEdit } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

//Buttons to edit, reply, and delete for posts

function ListPage(props) {
    const [replyClicked, setReplyClicked] = useState(false);
    const [editClicked, setEditClicked] = useState(false);
    const [category, setCategory] = useState({});

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch(`http://localhost:3001/api/categories/${props.list.category_id}`)
            const data = await response.json();
            setCategory(data);
        }
        fetchCategory();
    }, []);

    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:3001/api/lists/${props.list.list_id}`, {
            method: "DELETE"
        })
        .then(res => res.json());
        navigate(`/${category.name}`);
    }

    return (
        <>
            { editClicked
                ? <EditListItem id={props.list.list_id}/>
                :
                <div className="item">
                    <h2>{props.list.title}</h2>
                    <p>{props.list.list_item}</p>
                    <button id="edit" onClick={() => setEditClicked(!editClicked)}><AiOutlineEdit title="edit"/></button>
                    <button id="reply" onClick={() => setReplyClicked(!replyClicked)}><BsReply title="reply"/></button>
                    <button onClick={handleDelete}><MdOutlineDelete title="delete"/></button>
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