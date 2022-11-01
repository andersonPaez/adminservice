import React from 'react'
import logosimple from "../../assets/image/logosimple.png";

export default function Sidebar() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <img
          src={logosimple}
          alt="AdminService Logo"
          className="brand-image img-circle elevation-3"
          style={{opacity: ".8"}} />
        <span className="brand-text font-weight-light">AdminService</span>
      </a>
      
    </aside>
  );
}
