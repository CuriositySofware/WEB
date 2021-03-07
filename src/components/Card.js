import React from "react";
import { useHistory } from "react-router";

export default function Card({ infoCard }) {
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
        <button onClick={() => seeMore()}>Ver mas...</button>
      </div>
    </div>
  );
}
