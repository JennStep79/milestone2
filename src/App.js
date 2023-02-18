import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";
import CategoryContext from "./context/CategoryContext";
import ListPage from "./components/ListPage";

function App() {
  const [categories, setCategories] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
      const fetchCategoryData = async () => {
          const response = await fetch("http://localhost:3001/api/categories")
          const data = await response.json()
          setCategories(data);
      }
      fetchCategoryData();
      const fetchListData = async () => {
        const response = await fetch("http://localhost:3001/api/lists/category/all")
        const data = await response.json()
        setLists(data);
      }
      fetchListData();
  }, []);

  let mapCategoryPages = categories.map((category, index) => {
    return (
        <Route key={index} path={`/${category.name}`} element={<CategoryPage category={category}/>}/>
    )
  });
  
  let mapListPages = lists.map((list, index) => {
    return (
      <Route key={index} path={`/:category/${list.list_id}`} element={<ListPage list={list}/>}/>
    )
  });

  return (
    <CategoryContext.Provider value={categories}>
      <Router>
        <Link className="container" to="/">
          <img className="logo"
               src={require("./img/Logowithtagline.png")}
               alt="Buck-It's logo, a bucket with a rainbow coming out of it."/>
        </Link>
        <Routes>
          <Route path="/" element={<Categories />}/>
          {mapCategoryPages}
          {mapListPages}
        </Routes>
      </Router>
    </CategoryContext.Provider>
  );
}

export default App;
