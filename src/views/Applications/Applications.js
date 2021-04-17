import React from "react";
import Application from "../../components/Application";

export default function Applications() {
  return (
    <div className="applications">
      <h1>Solicitudes</h1>
      <div className="applications__container">
        <Application />
        <Application />
        <Application />
        <Application />
      </div>
    </div>
  );
}
