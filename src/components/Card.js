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
    <div className="card-container" onClick={() => seeMore()}>
      <div className="card-image">
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
