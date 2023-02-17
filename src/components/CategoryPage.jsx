import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ListForm from './ListForm';

function CategoryPage(props) {
    const [clicked, setClicked] = useState(false);
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
            <div className="item" key={index}>
                <Link to={`${props.category.name}/${list.list_id}`}><h1>{list.title}</h1></Link>
                <p>{list.list_item}</p>
            </div>
        )
    });

    return (
        <>
            <div className="container">
                <h1>❝{props.category.title}❞</h1>
                <button onClick={() => setClicked(!clicked)}>I have a new idea!</button>
            </div>
            { clicked
            ? <ListForm id={props.category.category_id}/>
            : null
            }
            <div className="container">
                {mapLists}
            </div>
        </>
    )
}

export default CategoryPage;