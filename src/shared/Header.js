import React from "react";

export default function Header() {
  return (
    <nav className="header-container">
      <div className="logo-container">
        <h1>CURIOSITY</h1>
        <span>Proyecto RUTAS</span>
      </div>
      <div className="links-container">
        <span>
          <i className="fas fa-info-circle"></i>Publications
        </span>
        <span>
          <i className="fas fa-sun"></i>About
        </span>
      </div>
    </nav>
  );
}
