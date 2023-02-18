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
        <div className="item">
            <h2>{props.list.title}</h2>
            <p>{props.list.list_item}</p>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ListPage;