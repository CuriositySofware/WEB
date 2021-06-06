import React from "react";
import PropTypes from "prop-types";

export default function Card({ infoCard = {} }) {
  const { labelArtifact, labelKeeper, labelCreator, id } = infoCard;

  return (
    <div className="card-container" data-bs-toggle="modal" data-bs-target={`#modal-${id.value}`}>
      <div className="card-title">
        <span>{labelArtifact.value}</span>
      </div>
      <div className="card-image">
        <i className="far fa-image"></i>
      </div>
      <div className="card-row" >
        <span>Autor</span>
        <p>{labelCreator?.value || "Desconocido"}</p>
      </div>
      <div className="card-row">
        <span>Ubicación</span>
        <p>{labelKeeper.value}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  infoCard: PropTypes.any,
};
