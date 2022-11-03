import React from 'react'
import { Navigate } from 'react-router-dom';
import Inicio from '../pages/home';

export default function RutaPrivada({children}) {

    const token = sessionStorage.getItem("token");

    if(token){
      return children;
    }else {
       return <Navigate to={"/login"}/>
    }
};
