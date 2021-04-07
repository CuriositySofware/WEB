import React from "react";
import PropTypes from "prop-types";

export default function Select({ museums = [], onSelect = (e) => e }) {
  return (
    <div className="select">
      <span className="label">Ubicacion</span>
      <div className="select__container">
        <select name="" id="" onChange={(e) => onSelect(e.target.value)}>
          <option value="" selected disabled>
            Seleccione un museo
          </option>
          {museums.map((museum, index) => (
            <option value={index} key={index}>
              {museum.label}
            </option>
          ))}
        </select>
        <div className="arrow"></div>
      </div>
    </div>
  );
}

Select.propTypes = {
  museums: PropTypes.array,
  onSelect: PropTypes.func,
};
