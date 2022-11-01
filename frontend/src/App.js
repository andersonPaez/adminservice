import "./App.css";
import "admin-lte/dist/js/adminlte.min.js";

import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import RutaPrivada from "./config/RutaPrivada";
import Admin from "./pages/admin";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin" element={<RutaPrivada> <Admin/> </RutaPrivada>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
  );
}

export default App;
