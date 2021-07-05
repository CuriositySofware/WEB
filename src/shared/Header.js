import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import { useAuth } from "../context/authContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const {
    state: { isLoggedIn, type },
    dispatch,
  } = useAuth();

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <>
      <nav className="header-container">
        <div className="logo-container">
          <Link to="/home" className="link">
            <h1>CURIOCITY</h1>
          </Link>
          <span>Proyecto RUTAS</span>
        </div>
        <div className="links-container">
          {isLoggedIn ? (
            <>
              <Link to="/publish" className="link">
                <span>
                  <i className="fas fa-info-circle"></i>Publicar
                </span>
              </Link>
              {type === "admin" && (
                <Link to="/applications" className="link">
                  <span>
                    <i className="fas fa-clipboard-list"></i>Solicitudes
                  </span>
                </Link>
              )}
              <Link to="/login" className="link" onClick={logout}>
                <span>
                  <i className="fas fa-sign-out-alt"></i>Cerrar Sesión
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="link">
                <span>
                  <i className="fas fa-sign-in-alt"></i>Iniciar sesión
                </span>
              </Link>
              <Link to="/register" className="link">
                <span>
                  <i className="fas fa-address-card"></i>Registrarse
                </span>
              </Link>
            </>
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
