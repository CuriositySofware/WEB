import React from "react";
import { useHistory } from "react-router";

export default function Modal({ infoCard = {} }) {
    const { labelArtifact, labelKeeper, labelCreator, id } = infoCard;
    const history = useHistory();

    const seeMore = () => {
        history.push(`/search/${id.value}`);
    };

    return (
        <div className="modal fade" id={`modal-${id.value}`} aria-labelledby={`modal-label-${id.value}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"  aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id={`modal-label-${id.value}`}>{labelArtifact.value}</h5>
                </div>
                <div className="modal-body">
                    <span>Autor</span>
                    <p>{labelCreator?.value || "Desconocido"}</p>
                    <span>Ubicación</span>
                    <p>{labelKeeper.value}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => seeMore()}>Ver más</button>
                </div>
                </div>
            </div>
        </div>
    )
}