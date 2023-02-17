import { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import CategoryContext from "../context/CategoryContext";

function Categories() {
    const categories = useContext(CategoryContext);

    let mapCategories = categories.map((category, index) => {
        return (
        <div key={index} className="tomb">
            <img src={require(`../img/${category.name}.png`)} alt="A tomb with RIP on it."/>
            <div>
                <Link className="link" to={`/${category.name}`}><h1>❝{category.title}❞</h1></Link>
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