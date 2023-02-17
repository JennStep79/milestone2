import { useState, useEffect } from "react";
import ListForm from './ListForm';

function CategoryPage(props) {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/api/lists/category/${props.category.category_id}`)
            const data = await response.json()
            setLists(data);
        }
        fetchData();
    }, []);

    let mapLists = lists.map((list, index) => {
        return (
            <div key={index}>
                <p>{list.list_item}</p>
            </div>
        )
    });

    return (
        <div>
            <h1>❝{props.category.title}❞</h1>
            <ListForm id={props.category.category_id}/>
            {mapLists}
        </div>
    )
}

export default CategoryPage;