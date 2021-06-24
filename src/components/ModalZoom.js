import React, { useEffect } from "react";
import { imageZoom } from "../services/imageZoom";

export default function ModalZoom({ imgSrc }) {
  console.log(`Undefined ${imgSrc != undefined}`)
  console.log(`Empty string ${imgSrc != ""}`)
  console.log(`Null ${imgSrc != null}`)

  if (imgSrc != "") {
    imageZoom("art-img", "art-img-zoom",imgSrc)
  }

  return (
    <div
      className="modal fade"
      id={`img-modal`}
      aria-labelledby={`img-modal`}
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-hidden="true"
      imgsrc ={imgSrc}
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
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img src={imgSrc} id="art-img-detail" />
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                  <div id="art-img-zoom" className="img-zoom-result"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
