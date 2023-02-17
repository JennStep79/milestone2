import { useState } from 'react'

function ListForm() {
 const [idea, setIdea] = useState({list_item: ""});

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/lists', {
                method:"POST",
                headers: {
                    "Content-Type": "application/json;charset-utf-8"
                },
                body: JSON.stringify(idea)
            });
            // if(!response.ok) {
            //     throw new error ("network response was not ok")
            // }
            return await response.json();
        } catch (error) {
            console.error("There was a problem with the fetch operation.");
        }
    }
    const handleChange = e => setIdea({list_item: e.target.value});

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='idea'>Insert awesome idea here!</label>
                <textarea id='idea' maxLength="255" onChange={handleChange}></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ListForm;