import React from "react";
import {Link} from "react-router-dom";

export default function Registro() {
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
            <form action="../../index.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="nombre"
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
                  placeholder="Repita la contraseña" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
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
