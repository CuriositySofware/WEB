import React from "react";

export default function Modal({ infoCard = {} }) {
  const {
    labelArtifact,
    labelKeeper,
    labelCreator,
    period_l,
    note,
    id,
  } = infoCard;

  return (
    <div
      className="modal fade"
      id={`modal-${id.value}`}
      aria-labelledby={`modal-label-${id.value}`}
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-hidden="true"
      onClick={() => console.log(infoCard)}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title" id={`modal-label-${id.value}`}>
              {labelArtifact.value}
            </h5>
          </div>
          <div className="modal-body container">
            <div className="row">
              <div className="col-6">
                <span className="modal--span">Autor</span>
                <p className="modal--p">{labelCreator?.value || "Desconocido"}</p>
                <span className="modal--span">Ubicación</span>
                <p className="modal--p">{labelKeeper?.value || "Desconocido"}</p>
                <span className="modal--span">Periodo</span>
                <p className="modal--p">{period_l?.value || "Desconocido"}</p>
              </div>
              <div className="col-6">
                <span className="modal--span">Notas</span>
                <p className="modal--p__large">{note?.value || "Sin notas"}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <a className="btn btn-primary" href={`/search/${id.value}`}>
              Ver más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
