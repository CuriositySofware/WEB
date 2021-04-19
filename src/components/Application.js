import React, { useState } from "react";
import { updateArtifact } from "../services/search";

export default function Application({ app, removeApplication, idx }) {
  const [openDetails, setOpenDetails] = useState(false);

  const changeStatus = (status) => {
    updateArtifact(app.id.value, status);
    removeApplication(idx);
    setOpenDetails(false);
  };
  return (
    <>
      <div
        className={`application ${openDetails ? "rotate" : ""}`}
        onClick={() => setOpenDetails(!openDetails)}
      >
        <i className="fas fa-clipboard-list"></i>
        <span>{app.labelArtifact.value}</span>
      </div>
      {openDetails && (
        <div className="details">
          <div className="row">
            <div className="column">
              <h4 className="label">Titulo:</h4>
              <p>{app.labelArtifact.value}</p>
            </div>
            <div className="column">
              <h4 className="label">Autor:</h4>
              <p>{app.labelCreator.value}</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h4 className="label">Material:</h4>
              <p>{app.labelMaterial.value}</p>
            </div>
            <div className="column">
              <h4 className="label">Ubicacion:</h4>
              <p>{app.labelKeeper.value}</p>
            </div>
          </div>
          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Periodo:</h4>
              <p>{app.perios_l?.value || "Desconocido"}</p>
            </div>
          </div>

          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Descripcion:</h4>
              <p>{app.note.value}</p>
            </div>
          </div>
          <div className="controls">
            <button
              className="approve"
              onClick={() => changeStatus("approved")}
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
        </div>
      )}
    </>
  );
}
