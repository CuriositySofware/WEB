import React from "react";
import Carousel from "../../components/Carousel";
import PruebaComponent from "../../components/Prueba";

export default function Prueba() {
    return (
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-pause="false">
            <Carousel />
            <PruebaComponent />
            <Overlay />
        </div>
    )
}

function Overlay() {
    return (
        <div className="overlay align-items-center">
            <div className="overlay-text text-end">
                <h1>CURIOCITY</h1>
                <p className="d-none d-md-block">Llevando la historia y la cultura peruana a tu hogar</p>
            </div>
        </div>
    )
}