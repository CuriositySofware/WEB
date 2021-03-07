import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArtifactById } from "../../services/search";

export default function Detail() {
  const { id } = useParams();
  const [artifact, setartifact] = useState({});

  const getArtifact = async () => {
    try {
      const response = await getArtifactById(id);
      const artifact = await response.json();
      console.log(artifact);
      setartifact(
        Object.keys(artifact.result[0]).reduce((obj, key) => {
          obj[key] = artifact.result[0][key].value;
          return obj;
        }, {})
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArtifact();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="detail-container">
      <div className="image-container">
        <i className="far fa-image"></i>
      </div>
      <div className="info-container">
        <h2>{artifact.artifactLabel}</h2>
        <div className="info">
          <span>Autor</span>
          <span>{artifact.authorLabel}</span>
        </div>
        <div className="info">
          <span>Material</span>
          <span>{artifact.materialLabel}</span>
        </div>
        <div className="info">
          <span>Ubicacion</span>
          <span>{artifact.keeperLabel}</span>
        </div>
        <div className="info">
          <span>Descripcion</span>
          <span>{artifact.note}</span>
        </div>
      </div>
    </div>
  );
}
