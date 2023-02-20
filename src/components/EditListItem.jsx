import { useState, useEffect } from "react";

function EditListItem(props) {
    const [list, setList] = useState ([]);

    useEffect(() => {
        const fetchThisList = async () => {
            const response = await fetch(`http://localhost:3001/api/lists/${props.id}`)
            const data = await response.json();
            setList(data);
        }
        fetchThisList();
     }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        window.location.reload();
        try {
            const response = await fetch(`http://localhost:3001/api/lists/${list.list_id}`, {
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
        console.log(list)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="list_item">Edit your Buck-It list item.</label>
                <textarea id="list_item" name="list_item" cols="50" rows="3" maxLength="255" defaultValue={list.list_item} onChange={handleChange} required></textarea>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
};

export default EditListItem;