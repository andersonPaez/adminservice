import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RutaPrivada({children, isAuth}) {

    console.log("Ruta privada renderizada.");
    console.log("Valor de isAuth: " + isAuth);
    
    if(isAuth){
      return children;
    }else return (
    <Navigate to={"/login"}/>
    );
};