import React from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

export default function Card({ infoCard = {} }) {
  const { labelArtifact, labelKeeper, labelCreator, id } = infoCard;
  const history = useHistory();

  const seeMore = () => {
    history.push(`/search/${id.value}`);
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <span>{labelArtifact.value}</span>
      </div>
      <div className="card-image" style={{ border: "none"}}>
        <i className="far fa-image"></i>
      </div>
      <div className="card-row" style={{ border: "none"}}>
        <span>Autor</span>
        <p>{labelCreator?.value || "Desconocido"}</p>
      </div>
      <div className="card-row">
        <span>Ubicación</span>
        <p>{labelKeeper.value}</p>
      </div>
      <div className="card-row">
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><span>Autor:</span><br />{labelCreator?.value || "Desconocido"}</li>
        <br />
        <li><span>Ubicación:</span><br />{labelKeeper.value}</li>
        
      </ul>
      </div>
      <div className="card-button-container">
        <button onClick={() => seeMore()} style={{color: "purple"}}> Detalles </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  infoCard: PropTypes.any,
};
