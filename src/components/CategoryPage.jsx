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

    let mapLists = Lists.map((list, index) => {
        <div key={index}>
            <p>{list.list_item}</p>
        </div>
    });

    return (
        <div>
            <h1>{props.category.title}</h1>
            {mapLists}
        </div> 
    )
}

export default CategoryPage;