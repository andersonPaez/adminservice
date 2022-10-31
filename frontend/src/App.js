import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";

import {Routes, Route, Link} from "react-router-dom";

import Inicio from "./pages/home/inicio";
import Login from "./pages/auth/login";
import RutaPrivada from "./config/RutaPrivada";

function App() {
  return (

      <Routes>
        <Route path="/" element={<RutaPrivada> <Inicio/> </RutaPrivada>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
  );
}

export default App;
