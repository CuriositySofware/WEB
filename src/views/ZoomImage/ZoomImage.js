import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { imageZoom } from "../../services/imageZoom";

export default function ZoomImage() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let history = useHistory();
  let query = useQuery();

  const [params, setparams] = useState({
    imgsrc: query.get("imgsrc"),
    artname: query.get("artname")
  });
  useEffect(() => {
    imageZoom("myimage", "myresult");
  });
  return (
    <>
      <button className="goback-button" onClick={() => history.goBack()}>
        Go Back
      </button>
      <h2 className="detail-header">{params.artname}</h2>
      <div className="img-zoom-container container d-flex">
        <div className="row">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <img id="myimage" src={`${params.imgsrc}`} className="img-zoom" />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex h-100 justify-content-center align-items-center">
              <div id="myresult" className="img-zoom-result"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
