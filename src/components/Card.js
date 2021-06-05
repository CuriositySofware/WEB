import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import PropTypes from "prop-types";
import { getImage } from "../services/search";
import Loader from "react-loader-spinner";

export default function Card({ infoCard = {} }) {
  const { labelArtifact, labelKeeper, labelCreator, id } = infoCard;

  const [imageLoaded, setImageLoaded] = useState("");

  const history = useHistory();

  const seeMore = () => {
    history.push({
      pathname: `/search/${id.value}`,
      data: {
        found: imageLoaded === "404" || imageLoaded === "" ? false : true,
        url: imageLoaded,
      },
    });
  };

  const ShowImages = () => {
    if (imageLoaded === "") {
      return <Loader type="Circles" color="#313B72" visible={true} />;
    } else if (imageLoaded === "404") {
      return <i className="far fa-image"></i>;
    } else {
      return <img src={imageLoaded} />;
    }
  };

  useEffect(() => {
    getImage(id).then((response) => {
      if (response.success) {
        response.img.blob().then((url) => {
          const outside = URL.createObjectURL(url);
          setImageLoaded(outside);
        });
      } else {
        setImageLoaded("404");
      }
    });
  }, []);

  return (
    <div className="card-container" onClick={() => seeMore()}>
      <div className="card-image">
        <span>{labelArtifact.value}</span>
      </div>
      <div className="card-image">
        <ShowImages></ShowImages>
      </div>
      <div className="card-row">
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
