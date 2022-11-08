import "./App.css";
import "admin-lte/dist/js/adminlte.min.js";

import { useEffect, useState } from "react";
import axios from "axios";
import { urlBackend } from "./config/constants";
import Cargando from "./shared/cargando";
import RoutesApp from "./routes";

function App() {

  console.log("App renderizado");

  const token = localStorage.getItem("token");

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    console.log("Se ejecuto useEffect en App");
    
    axios.get(urlBackend + "/validar-token",{ headers:{ token:token } })
    .then((res)=>{ 
      setIsAuth(true);
      console.log("Esta autorizado: " + res.data.auth);
     })
    .catch((error)=>{
      setIsAuth(false);
      console.error(error.response.data.mensaje);
    })
    .finally(()=>{
      setIsLoading(false);
    });
  
    return () => {}
  }, [])

  if(isLoading){
    return <Cargando/>;
  }else{
    return (
      <RoutesApp isAuth={isAuth}/>
    );
  }
}

export default App;
