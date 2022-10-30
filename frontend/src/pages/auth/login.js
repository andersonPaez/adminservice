import React from "react";
import axios from "axios";

//Estilos:
import "./login.css";


export default function login() {

  function validarInico(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    axios.post("http://127.0.0.1:3001/autenticacion",{email,password}).then((respuesta)=>{
        console.log(respuesta);
    }).catch((error)=>{
      console.error(error);
    });
    
    console.log(`Email: ${email} Contraseña: ${password}`);
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <b>Admin</b>Service
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Iniciar Sesion</p>
            {/* Formulario */}
            <form onSubmit={validarInico}>  
              <div className="input-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Correo Electronico"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"/>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Contraseña" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Recuerdame</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Iniciar
                  </button>
                </div>
              </div>
            </form>
            {/* Fin del formulario*/}
            <p className="mb-1">
              <a href="forgot-password.html">Olvide mi contraseña</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                No tengo cuenta
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
