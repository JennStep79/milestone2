import { useState, useEffect } from "react";
import ListForm from './ListForm';

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
            <div>{props.category.title}</div>
            <ListForm/>
            {mapLists}
        </div> 
    )
}

export default CategoryPage;