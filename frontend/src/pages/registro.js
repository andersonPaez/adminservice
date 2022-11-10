import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import { ALERT, urlBackend } from "../config/constants";

export default function Registro() {
  
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{errors},watch,setError,clearErrors} = useForm();

  function registrarUsuario(data){
    axios.post(urlBackend + "/registro", data)
      .then((respuesta)=>{
        ALERT.fire({
          icon: 'success',
          title: 'Registro exitoso!'
        });
        navigate("/login");
      })
      .catch((error)=>{
        ALERT.fire({
          icon: 'error',
          title: 'Error al registrar usuario :('
        });
        console.error("Hubo un error registrar nuevo");
      });
  }

  return (
    <div className="register-page" style={{minHeight: "570.781px"}}>
      <div className="register-box">
        <div className="register-logo">
          <Link to={"/"}>
            <b>Admin</b>Service
          </Link>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Registrarse</p>
            <form onSubmit={handleSubmit(registrarUsuario)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="nombre"
                  {...register("nombre",{required:true})}
                  className={"form-control"+ (errors.nombre ? " is-invalid": "")}
                  placeholder="Nombre"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="apellido"
                  {...register("apellido",{required:true})}
                  className={"form-control"+ (errors.apellido ? " is-invalid": "")}
                  placeholder="Apellidos"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="email"
                  id="email"
                  {...register("email",{required:true})}
                  className={"form-control"+ (errors.email ? " is-invalid": "")}
                  placeholder="Correo electronico"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  id="password"
                  {...register("password",{required:true})}
                  className="form-control"
                  placeholder="Contraseña"/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  id="password2"
                  {...register("password2",{required:true, 
                    validate: (value)=>{
                      if(watch("password") !== value){
                        setError("passError")
                      }else{
                        clearErrors()
                      }
                    }})}
                  className="form-control"
                  placeholder="Repita la contraseña" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              {errors.passError && <span style={{color:"red"}}>Las contraseñas no coinciden</span>}
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"/>
                    <label htmlFor="agreeTerms">
                      Acepto los <Link>Terminos y condiciones</Link>
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Register
                  </button>
                </div>
              </div>
            </form>
            <Link to={"/login"} className="text-center">
              Ya estoy registrado.
            </Link>
            <p className="mb-0">
              <Link to={"/"} className="text-center">
                Pagina principal
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
