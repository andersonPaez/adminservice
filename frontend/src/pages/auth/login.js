import React from "react";
 
//Estilos:
import "./login.css";

export default function login() {
  return (
    <div className="container">
      <h2>Ingresar</h2>
      <div className="form">
        <form action="">
          <div>
            <label for="email">Correo Electronico:</label>
            <input type="email" name="email" id="" placeholder="Ingrese el correo electronico"/>
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <input type="password" name="password" id="" required />
          </div>
          <button type="submit">Ingresar</button>
        </form>
        <a href="#"><button>Cancelar</button></a>
      </div>
    </div>
  );
}
