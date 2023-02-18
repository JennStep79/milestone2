import { useState } from "react";

function ListPage(props) {
    const [list, updateList] = useState({
        title: "",
        list_item: ""
    });

    const handleDelete = () => {
        
    };

    const handleUpdate = () => {

    };

    return (
        <div>
            <h1>{props.list.title}</h1>
            <p>{props.list.list_item}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ListPage;