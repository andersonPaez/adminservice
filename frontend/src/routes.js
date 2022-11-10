import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import RutaPrivada from "./config/RutaPrivada";
import Admin from "./pages/admin";
import CrearUsuario from "./pages/admin/crearUsuario";
import ListarUsuarios from './pages/admin/listarUsuarios';
import Registro from './pages/registro';

export default function RoutesApp({isAuth, setIsAuth}) {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/admin" element={<RutaPrivada isAuth={isAuth}> <Admin/> </RutaPrivada>}>
          <Route path="usuarios/crear/:id" element={<CrearUsuario/>}/> {/*Cuando son rutas hijas no se le coloca el "/"*/}
          <Route path="usuarios/listar" element={<ListarUsuarios/>}/>
        </Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/registro" element={<Registro/>} />
      </Routes>
  )
}
