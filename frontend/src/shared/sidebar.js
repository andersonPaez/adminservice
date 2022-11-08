import {React, useState} from "react";
import {Link} from "react-router-dom";
import iconAdmin from "../assets/icons/user-tie-solid.svg";
import {FaUsers,FaUserPlus,FaUserEdit} from "react-icons/fa";

export default function Sidebar() {

  const [itemUsuarioOpen, setItemUsuarioOpen] = useState(true);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 altura" style={{height:"100vh"}}>
      <Link to="/" className="brand-link">
        <span className="brand-text font-weight-light">AdminService</span>
      </Link>
      <div>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={iconAdmin}
                className="img-circle elevation-2"
                alt="iconoAdmin"
              />
            </div>
            <div className="info">
              <Link>
                Administrador
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
                    <p>Crear o modificar</p>
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
