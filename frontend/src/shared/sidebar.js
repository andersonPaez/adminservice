import {React, useState} from "react";
import {Link} from "react-router-dom";
import iconAdmin from "../assets/icons/user-tie-solid.svg";
import {FaUsers,FaUserPlus,FaUserEdit,FaUserTie} from "react-icons/fa";
import jwt_decode from "jwt-decode";

export default function Sidebar() { 

  const payload = jwt_decode(localStorage.getItem("token"));
  const [itemUsuarioOpen, setItemUsuarioOpen] = useState(true);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 altura" style={{height:"100vh"}}>
      <Link to="/" className="brand-link">
        <span className="brand-text font-weight-light"><b style={{color:"#2470EC"}}>Admin</b><b style={{color:"#BAC7DE"}}>Service</b></span>
      </Link>
      <div>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
            <FaUserTie size={28} color={"#fff"} className="img-circle elevation-2"/>
            </div>
            <div className="info">
              <Link>
                <b style={{color:"#CCE929"}}>{payload.nombre} {payload.apellido}</b>
              </Link>
            </div>
          </div>
        </div>
        <nav>
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <li className={ "nav-item" + (itemUsuarioOpen ? " menu-open": "" ) } >
              <div className="nav-link" onClick={ ()=>{setItemUsuarioOpen( !itemUsuarioOpen )}}>
                <FaUsers className="nav-icon"/>
                <p>
                  Usuarios
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <Link to={"usuarios/listar"} className="nav-link">
                    <FaUserEdit className="nav-icon"/>
                    <p>Listar</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"usuarios/crear/new"}className="nav-link">
                    <FaUserPlus className="nav-icon"/>
                    <p>Crear o Modificar</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
