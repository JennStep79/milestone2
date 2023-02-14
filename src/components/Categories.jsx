import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";

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
            <img src={require(`../img/${category.name}.png`)} alt={category.title}/>
            <div>
                <Link to={`/${category.name}`}><h1>{category.title}</h1></Link>
                <p>{category.description}</p>
                <Route path={`/${category.name}`} element={<CategoryPage />}/>
            </div>
        </div>
        )
    });

    return (
        <div className="container">
            <Routes>
                {mapCategories}
            </Routes>
        </div>
    )
}

export default Categories;