<<<<<<< HEAD
import { useState, useEffect } from "react";
import "../App.css";
import {Link} from 'react-router-dom'
=======
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../css/App.css";
import CategoryContext from "../context/CategoryContext";

>>>>>>> main
function Categories() {
    const categories = useContext(CategoryContext);

    let mapCategories = categories.map((category, index) => {
        return (
        <div key={index} className="tomb">
            <img src={require(`../img/${category.name}.png`)} alt={category.title}/>
            <div>
<<<<<<< HEAD
                {/* <Link to = {`/${category.image}`}> */}
                <h1>{category.name}</h1>
                {/* </Link> */}
=======
                <Link className="link" to={`/${category.name}`}><h1>❝{category.title}❞</h1></Link>
>>>>>>> main
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