import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Categories from "./components/Categories";
import CatList from "./components/CatList";

function App() {
  return (
    <div>
      <Home/>
      <Categories />
      <CatList/>
    </div>
  );
}

export default App;
