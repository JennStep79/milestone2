import { useState, useEffect } from "react";

function CategoryPage(props) {
    const [Lists, setLists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/api/lists/${props.category.id}`)
            const data = await response.json()
            setLists(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div>{props.category.title}</div>
        </div>
        
    )
}

export default CategoryPage;