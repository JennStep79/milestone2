import { useState, useRef } from 'react'

function ListForm(props) {
    const [idea, setIdea] = useState({
        list_item: "",
        category_id: 0
    });

    const textRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        textRef.current.value = "";
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
    const handleChange = e => setIdea({list_item: e.target.value, category_id: props.id});

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Enter your Buck-It list item.</label>
                <input id="title" name="title" type="text" required/>
                <label htmlFor='idea'>Describe your awesome idea here!</label>
                <textarea id='idea' maxLength="255" onChange={handleChange} ref={textRef} required></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ListForm;