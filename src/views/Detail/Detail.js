import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { getArtifactById } from "../../services/search";
import { getImage } from "../../services/search";

export default function Detail() {
  const { id } = useParams();
  const [artifact, setartifact] = useState({});
  const [loading, setloading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState("");

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
    getImage(id).then((response) => {
      if (response.success) {
        response.img.blob().then((url) => {
          const outside = URL.createObjectURL(url);
          setImageLoaded(outside);
        });
      }
    });
  }, []);

  useEffect(() => {
    getArtifact();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div
        className="modal fade"
        id={`img-modal`}
        aria-labelledby={`img-modal`}
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal-img-body d-flex justify-content-center">
              {imageLoaded ? (
                <img
                  src={imageLoaded}
                  data-bs-toggle="modal"
                  data-bs-target={`img-modal`}
                />
              ) : (
                <i className="far fa-image" />
              )}
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="loader-detail">
          <Loader
            type="Circles"
            color="#795933"
            height={100}
            width={100}
            visible={true}
          />
        </div>
      ) : (
        <div className="detail-container">
          <div className="image-container">
            {imageLoaded ? (
              <>
                <img
                  src={imageLoaded}
                  data-bs-toggle="modal"
                  data-bs-target={`#img-modal`}
                />
              </>
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
