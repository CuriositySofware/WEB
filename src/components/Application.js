import React, { useState } from "react";
import Badge from "./Badge";

export default function Application() {
  const [openDetails, setOpenDetails] = useState(false);
  const [status, setStatus] = useState("pending");

  const changeStatus = (status) => {
    setStatus(status);
    setOpenDetails(false);
  };
  return (
    <>
      <div
        className={`application ${openDetails ? "rotate" : ""}`}
        onClick={() => setOpenDetails(!openDetails)}
      >
        <i className="fas fa-clipboard-list"></i>
        <span>Escultura de barro</span>
        <Badge variant={status} />
      </div>
      {openDetails && (
        <div className="details">
          <div className="row">
            <div className="column">
              <h4 className="label">Titulo:</h4>
              <p>Escultura de Barro</p>
            </div>
            <div className="column">
              <h4 className="label">Autor:</h4>
              <p>Marco Benitez</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h4 className="label">Material:</h4>
              <p>Barro</p>
            </div>
            <div className="column">
              <h4 className="label">Ubicacion:</h4>
              <p>Musea nacional de arequipa</p>
            </div>
          </div>
          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Periodo:</h4>
              <p>Pre jurasico</p>
            </div>
          </div>

          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Descripcion:</h4>
              <p>Esta es una prueba</p>
            </div>
          </div>
          {status === "pending" && (
            <div className="controls">
              <button
                className="approve"
                onClick={() => changeStatus("success")}
              >
                Aprobar
              </button>
              <button
                className="decline"
                onClick={() => changeStatus("declined")}
              >
                Rechazar
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
