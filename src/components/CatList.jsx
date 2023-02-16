import '../App.css';
import { useState, useEffect } from "react";

function CatList(){
const[lists, setLists] = useState([])
//fetch data from seder in order to render category data ie. name description 
useEffect(()=>{
    const fetchData = async ()=> {
        const response = await fetch("http://localhost:3001/api/categories/")
        const data = await response.json()
        setLists(data);
    }
    fetchData();
}, []);
//render the category name user clicked 
    return(
    //
        <div>
            <h1>{}</h1>
        </div>
//create form where users can input new ideas 
    )
}

export default CatList


