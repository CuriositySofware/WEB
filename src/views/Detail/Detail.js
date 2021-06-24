import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { getArtifactById } from "../../services/search";
import { getImage } from "../../services/search";
import { Link, useHistory } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [artifact, setartifact] = useState({});
  const [loading, setloading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState("");

  let history = useHistory();

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
        <>
          <button className="goback-button" onClick={() => history.goBack()}>
            Go Back
          </button>
          <div className="detail-container">
            <div className="container">
              <div className="row">
                <h2 className="detail-header">{artifact.artifactLabel}</h2>
              </div>

              {imageLoaded ? (
                <>
                  <div className="row">
                    <div className="d-flex justify-content-center">
                      <img
                        className="w-50"
                        src={imageLoaded}
                        data-bs-toggle="modal"
                        data-bs-target={`#img-modal`}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex my-2 justify-content-center">
                      <Link
                        to={`/zoomimg?imgsrc=${imageLoaded}&artname=${artifact.artifactLabel}`}
                        className="btn btn-primary detail-button btn-block w-50"
                      >
                        Ver Detalle
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <i className="far fa-image w-50 not-found text-center text-gray" />
                  </div>
                </div>
              )}
            </div>
            <div className="row">
              <div className="col-6">
                <p className="detail-title">Autor</p>
                <p className="detail-text">
                  {artifact?.authorLabel || "Desconocido"}
                </p>

                <p className="detail-title">Material</p>
                <p className="detail-text">{artifact.materialLabel}</p>

                <p className="detail-title">Ubicacion</p>
                <p className="detail-text">{artifact.keeperLabel}</p>

                <p className="detail-title">Periodo</p>
                <p className="detail-text">
                  {artifact.period_l || "Desconocido"}
                </p>
              </div>
              <div className="col-6">
                <p className="detail-title text-center">Descripcion</p>
                <p className="detail-desc">{artifact.note}</p>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  );
}
