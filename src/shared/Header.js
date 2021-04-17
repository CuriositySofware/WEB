import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header-container">
      <div className="logo-container">
        <Link to="/search" className="link">
          <h1>CURIOCITY</h1>
        </Link>
        <span>Proyecto RUTAS</span>
      </div>
      <div className="links-container">
        <Link to="/publish" className="link">
          <span>
            <i className="fas fa-info-circle"></i>Publicar
          </span>
        </Link>
        <Link to="/applications" className="link">
          <span>
            <i className="fas fa-clipboard-list"></i>Solicitudes
          </span>
        </Link>
      </div>
    </nav>
  );
}
