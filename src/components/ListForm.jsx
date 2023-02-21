import { useState, useEffect } from 'react'

//creating a new post

function ListForm(props) {
    const [idea, setIdea] = useState({
        title: "",
        list_item: "",
        category_id: 0
    });

    useEffect(() => {
       setIdea({category_id: props.id}) 
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        window.location.reload();
        try {
            const response = await fetch('http://localhost:3001/api/lists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(idea)
            });
            return await response.json();
        } catch (error) {
            console.error("Error.");
        }
    }
    const handleChange = e => {
        setIdea({...idea, [e.target.id]: e.target.value});
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Enter your Buck-It list item.</label>
                <input id="title" name="title" type="text" maxLength="20" placeholder="List item" onChange={handleChange} required/>
                <label htmlFor="list_item">Describe your awesome idea here!</label>
                <textarea id="list_item" name="list_item" placeholder="Description" cols="45" rows="7.5" maxLength="255" onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ListForm;