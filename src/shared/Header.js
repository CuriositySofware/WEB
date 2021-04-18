import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import { useAdmin } from "../context/adminContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    state: { authenticated },
  } = useAdmin();
  return (
    <>
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
          {authenticated ? (
            <Link to="/applications" className="link">
              <span>
                <i className="fas fa-clipboard-list"></i>Solicitudes
              </span>
            </Link>
          ) : (
            <Link to="/login" className="link">
              <span>
                <i className="fas fa-user-cog"></i>Admin
              </span>
            </Link>
          )}
        </div>
        <div
          className={`menu ${openMenu ? "menu--translate" : ""}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div
            className={`menu__bar ${openMenu ? "menu__bar--top" : ""}`}
          ></div>
          <div
            className={`menu__bar ${openMenu ? "menu__bar--middle" : ""}`}
          ></div>
          <div
            className={`menu__bar ${openMenu ? "menu__bar--bottom" : ""}`}
          ></div>
        </div>
      </nav>
      <MenuBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
}
