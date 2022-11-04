import axios from 'axios';
import React from 'react'
import { Navigate } from 'react-router-dom';
import Inicio from '../pages/home';
import { urlBackend } from './constants';

export default function RutaPrivada({children}) {

    const token = sessionStorage.getItem("token");

      if(token){
        axios.get(urlBackend + "/validar-token",{headers:{token:token}})
        .then(()=>{ return children; })
        .catch(()=>{ <Navigate to={"/login"}/> });
      }else return <Navigate to={"/login"}/>;
   
};