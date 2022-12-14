import React from "react"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i>
        </Link>
        </li>
        <li className="nav-item">
          <Link to={"/admin"}className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to={"/"}className="nav-link">Pagina principal</Link>
        </li>
      </ul>
    </nav>
  );
}
