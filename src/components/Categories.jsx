import { useState, useEffect } from "react";
import "../App.css";
import {Link} from 'react-router-dom'
function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3001/api/categories")
            const data = await response.json()
            setCategories(data);
        }
        fetchData();
    }, []);

    let mapCategories = categories.map((category, index) => {
        return (
        <div key={index} className="tomb">
            <img src={require(`../img/${category.image}.png`)} alt={category.name}/>
            <div>
                {/* <Link to = {`/${category.image}`}> */}
                <h1>{category.name}</h1>
                {/* </Link> */}
                <p>{category.description}</p>
            </div>
        </div>
        )
    });

    return (
        <div className="container">
            {mapCategories}
        </div>
    )
}

export default Categories;