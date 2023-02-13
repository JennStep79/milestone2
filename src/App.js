import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import Home from './Components/home';
import LetsGetWild from './Components/letsgetwild';
import Categories from "./Components/Categories";

function App() {
  return (
    <div>
      <Home />
      <LetsGetWild />
      <Categories />
    </div>
  );
}

export default App;
