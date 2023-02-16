import '../App.css';
import { useState, useEffect } from "react";

function CatList(){
const[lists, setLists] = useState([])
useEffect(()=>{
    const fetchData = async ()=> {
        const response = await fetch("http://localhost:3001/api/categories")
        const data = await response.json()
        setLists(data);
    }
    fetchData();
}, []);
    return(
        <div>
            <h1>{lists.name}</h1>
        </div>
    )
}

export default CatList


