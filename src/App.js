import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import Home from './components/home';
import LetsGetWild from './components/letsgetwild';
import Categories from "./components/Categories";

function App() {
  return (
    <Router>
      <Home />
      <LetsGetWild />
    </Router>
  );
}

export default App;
