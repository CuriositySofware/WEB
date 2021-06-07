import React from "react";
import arequipa from "../assets/images/arequipa.jpg";
import naval from "../assets/images/naval.jpg";
import recolecta from "../assets/images/recolecta.jpg";

export default function Carousel() {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <a href={`/search?place=Arequipa`}><img src={arequipa} className="d-block w-100" alt="arequipa" /></a>
            </div>
            <div className="carousel-item">
                <a href={`/search?place=Naval`}><img src={naval} className="d-block w-100" alt="naval" /></a>
            </div>
            <div className="carousel-item">
                <a href={`/search?place=Reco`}><img src={recolecta} className="d-block w-100" alt="recolecta" /></a>
            </div>
        </div>
    )
}