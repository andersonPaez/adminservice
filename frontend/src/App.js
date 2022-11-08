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
    console.log("Ejecutando useEffect");
    axios.get(urlBackend + "/validar-token",{headers:{token:token}})
    .then(()=>{ 
      setIsAuth(true);
     })
    .catch(()=>{
      setIsAuth(false);
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
