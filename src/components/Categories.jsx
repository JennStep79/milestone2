import { useState, useEffect } from "react";

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
        <div key={index}>
            <img src={require(`../img/${category.image}.png`)} alt={category.name}/>
            <h1>{category.name}</h1>
            <p>{category.description}</p>
        </div>
        )
    });

    return (
        <div>
            {mapCategories}
        </div>
    )
}

export default Categories;