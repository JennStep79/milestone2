import { useState, useEffect } from "react";
import Category from "./Category";

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
        <Category key={index} data={category}/>
    });

    return (
        <div>
            {mapCategories}
        </div>
    )
}

export default Categories;