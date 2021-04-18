import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAdmin } from "../context/adminContext";

export default function MenuBar({ openMenu = false, setOpenMenu }) {
  const {
    state: { authenticated },
    dispatch,
  } = useAdmin();
  const history = useHistory();

  const logout = () => {
    setOpenMenu(false);
    history.replace("/login");
    dispatch({ type: "logout" });
    console.log("here");
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
          <Link to="/search" className="menuBar__link" onClick={logout}>
            <span>
              <i className="fas  fa-clipboard-list"></i>Cerrar Sesion
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
