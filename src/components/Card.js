import React from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

export default function Card({ infoCard = {} }) {
  const { labelArtifact, labelKeeper, labelCreator, id } = infoCard;
  console.log(id);
  const history = useHistory();

  const seeMore = () => {
    history.push(`/search/${id.value}`);
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <i className="far fa-image"></i>
        <span>Label</span>
      </div>
      <div className="card-row">
        <span>Autor</span>
        <p>Romulo Gallegos</p>
      </div>
      <div className="card-row">
        <span>Ubicacion</span>
        <p>Caracas</p>
      </div>
      <div className="card-button-container">
        <button onClick={() => seeMore()}>Ver mas...</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  infoCard: PropTypes.object,
};
