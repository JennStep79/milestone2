import { useState } from "react";

function ListPage(props) {
    const [clicked, setClicked] = useState(false);
    const [list, updateList] = useState({
        title: "",
        list_item: ""
    });

    const handleDelete = () => {
        fetch("http://localhost:3001/api/lists", {
            method: "DELETE"
        })
        .then(res => res.json())
    };

    const handleUpdate = () => {
        fetch("http://localhost:3001/api/lists", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(list)
        })
        .then(res => res.json())
    };

    return (
        <div className="item">
            <h2>{props.list.title}</h2>
            <p>{props.list.list_item}</p>
            <button>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ListPage;