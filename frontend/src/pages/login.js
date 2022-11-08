import React from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {urlBackend} from "../config/constants";
import { useForm } from "react-hook-form";

export default function Login() {

  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors}} = useForm();

  async function validarInico(data) {
    
    const email = data.email;
    const password = data.password;

    console.log(data);

    try {
      const respuesta = await axios.post(urlBackend +"/autenticacion",{email: email, password:password});
      localStorage.setItem("token",respuesta.data.token);
      navigate("/admin");
    } catch (error) {
      alert(error.response.data.mensaje);
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link>
            <b>Admin</b>Service
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Iniciar Sesion</p>
            {/* Formulario */}
            <form onSubmit={handleSubmit(validarInico)}>  
              <div className="input-group mb-3">
                <input
                  type="email"
                  {...register("email")}
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
                  {...register("password")}
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
