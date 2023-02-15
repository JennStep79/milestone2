import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoriesPage";
import CategoryContext from "./context/CategoryContext";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch("http://localhost:3001/api/categories")
          const data = await response.json()
          setCategories(data);
      }
      fetchData();
  }, []);

  let mapPages = categories.map((category, index) => {
    return (
        <Route key={index} path={`/${category.name}`} element={<CategoryPage category={category}/>}/>
    )
  });

  return (
    <CategoryContext.Provider value={categories}>
      <Router>
        <Link to="/">
          <h1>Buck It</h1>
        </Link>
        <Routes>
          <Route path="/" element={<Categories />}/>
          {mapPages}
        </Routes>
      </Router>
    </CategoryContext.Provider>
  );
}

export default App;
