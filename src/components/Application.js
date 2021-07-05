import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { updateArtifact } from "../services/search";

export default function Application({ app, removeApplication, idx }) {
  const {
    state: { token },
  } = useAuth();
  const [openDetails, setOpenDetails] = useState(false);

  const changeStatus = (status) => {
    updateArtifact(app, status, token);
    removeApplication(idx);
    setOpenDetails(false);
  };
  return (
    <>
      <div
        className={`application d-flex align-items-center ${
          openDetails ? "rotate" : ""
        }`}
        onClick={() => setOpenDetails(!openDetails)}
      >
        <i className="fas fa-clipboard-list"></i>
        <span>{app.labelArtifact.value}</span>
      </div>
      {openDetails && (
        <div className="details d-flex">
          <div className="row">
            <div className="column">
              <h4 className="label">Título:</h4>
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
              <h4 className="label">Ubicación:</h4>
              <p>{app.labelKeeper.value}</p>
            </div>
          </div>
          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Período:</h4>
              <p>{app.perios_l?.value || "Desconocido"}</p>
            </div>
          </div>

          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Descripción:</h4>
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
