import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function MenuBar({ openMenu = false, setOpenMenu }) {
  const {
    state: { authenticated },
    dispatch,
  } = useAuth();

  const logout = () => {
    setOpenMenu(false);
    dispatch({ type: "logout" });
  };

  return (
    <div className={`menuBar ${openMenu ? "menuBar--open" : ""}`}>
      <Link
        to="/publish"
        className="menuBar__link"
        onClick={() => setOpenMenu(false)}
      >
        <span>
          <i className="fas fa-info-circle"></i>Publicar
        </span>
      </Link>
      {authenticated ? (
        <>
          <Link
            to="/applications"
            className="menuBar__link"
            onClick={() => setOpenMenu(false)}
          >
            <span>
              <i className="fas  fa-clipboard-list"></i>Solicitudes
            </span>
          </Link>
          <Link to="/login" className="menuBar__link" onClick={logout}>
            <span>
              <i className="fas fa-sign-out-alt"></i>Cerrar Sesión
            </span>
          </Link>
        </>
      ) : (
        <Link
          to="/login"
          className="menuBar__link"
          onClick={() => setOpenMenu(false)}
        >
          <span>
            <i className="fas  fa-user-cog"></i>Admin
          </span>
        </Link>
      )}
    </div>
  );
}
