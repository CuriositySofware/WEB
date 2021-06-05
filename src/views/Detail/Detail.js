import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { getArtifactById } from "../../services/search";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const imageUrl = location.data?.url;
  const { id } = useParams();
  const [artifact, setartifact] = useState({});
  const [loading, setloading] = useState(true);

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
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getArtifact();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-detail">
          <Loader
            type="Circles"
            color="#313B72"
            height={100}
            width={100}
            visible={true}
          />
        </div>
      ) : (
        <div className="detail-container">
          <div className="image-container">
            {location.data?.found ? (
              <img src={imageUrl} />
            ) : (
              <i className="far fa-image" />
            )}
          </div>
          <div className="info-container">
            <h2>{artifact.artifactLabel}</h2>
            <div className="info">
              <span>Autor</span>
              <span>{artifact?.authorLabel || "Desconocido"}</span>
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
              <span>Periodo</span>
              <span>{artifact.period_l || "Desconocido"}</span>
            </div>
            <div className="info">
              <span>Descripcion</span>
              <span>{artifact.note}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
