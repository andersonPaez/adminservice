import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {Routes, Route, Link} from "react-router-dom";

import Inicio from "./pages/home/inicio";
import Login from "./pages/auth/login";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
