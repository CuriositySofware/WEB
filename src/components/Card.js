import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getImage } from "../services/search";
import Loader from "react-loader-spinner";

export default function Card({ infoCard = {} }) {
  const { labelArtifact, labelCreator, id } = infoCard;

  const [imageLoaded, setImageLoaded] = useState("");

  const ShowImages = () => {
    if (imageLoaded === "") {
      return <Loader type="Circles" color="#233d4d" visible={true} />;
    } else if (imageLoaded === "404") {
      return <i className="far fa-image"></i>;
    } else {
      return <img src={imageLoaded} />;
    }
  };

  useEffect(() => {
    getImage(id.value).then((response) => {
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
    <div
      className="masonry-item"
      data-bs-toggle="modal"
      data-bs-target={`#modal-${id.value}`}
    >
      <div className="masonry-img">
        <ShowImages></ShowImages>
      </div>
      <div className="card-identifier text-end">
        <p className="title">{labelArtifact.value}</p>
        <p className="subtitle">{labelCreator?.value || "Desconocido"}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  infoCard: PropTypes.any,
};
