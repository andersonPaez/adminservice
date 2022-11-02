import {React, useState} from "react";
import {Link} from "react-router-dom";
import iconAdmin from "../../assets/icons/user-tie-solid.svg";

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
              <div className="nav-link" onClick={ ()=>{
                setItemUsuarioOpen( !itemUsuarioOpen )
              } }>
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Usuarios
                  <i className="right fas fa-angle-left" />
                </p>
              </div>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Listar</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Crear</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
