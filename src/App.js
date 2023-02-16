import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPages";
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
<<<<<<< HEAD
    <div>
      <Home />
      <LetsGetWild />
      <Categories />
      <CatList/>
    </div>
=======
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
>>>>>>> main
  );
}

export default App;
