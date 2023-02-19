import { useState, useEffect } from "react";

function EditListItem(props) {
    const [list, setList] = useState ([]);
    // const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const fetchThisList = async () => {
            const response = await (`http://localhost:3001/api/lists/${props.id}`)
            const data = await response.json();
            setList(data);
        }
        fetchThisList();
     }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        window.location.reload();
        try {
            const response = await fetch(`http://localhost:3001/api/list/${list.list_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(list)
            });
            return await response.json();
        } catch (error) {
            console.error("Error.");
        }
    }

    const handleChange = e => {
        setList({...list, [e.target.id]: e.target.value});
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="list">Edit comment</label>
                <textarea value={list.list_item} id="list" name="list" cols="50" rows="3" maxLength="255" onChange={handleChange}></textarea>
                <button type="submit">Save Changes</button>
            </form>
        </div>

    )
};

export default EditListItem;