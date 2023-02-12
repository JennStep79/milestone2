import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import LetsGetWild from './Components/LetsGetWild';
import Categories from "./Components/Categories";

function App() {
  return (
    <div>
      <Home/>
      <LetsGetWild/>
      <Categories />
    </div>
  );
}

export default App;
