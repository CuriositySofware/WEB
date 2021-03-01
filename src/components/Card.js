import React from "react";

export default function Card({ infoCard }) {
  const { labelArtifact, labelKeeper, labelCreator } = infoCard;
  return (
    <div className="card-container">
      <div className="card-image">
        <i className="far fa-image"></i>
        <span>{labelArtifact.value}</span>
      </div>
      <div className="card-row">
        <span>Autor</span>
        <p>{labelCreator.value}</p>
      </div>
      <div className="card-row">
        <span>Ubicacion</span>
        <p>{labelKeeper.value}</p>
      </div>
      <div className="card-button-container">
        <button>Ver mas...</button>
      </div>
    </div>
  );
}
