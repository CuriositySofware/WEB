import React from "react";
import PropTypes from "prop-types";

export default function Input({
  label,
  setfields,
  name,
  fields,
  empty,
  size = "md",
}) {
  const handleOnChange = ({ target }) => {
    setfields({
      ...fields,
      [target.name]: target.value,
    });
  };
  return (
    <div
      className={`input-container ${size === "sm" ? "input-container-sm" : ""}`}
    >
      <label>{label}: </label>
      <input
        type="text"
        placeholder="Busqueda"
        className={empty ? "empty" : ""}
        name={name}
        autoComplete="off"
        onChange={(e) => handleOnChange(e)}
      />{" "}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  setfields: PropTypes.func,
  name: PropTypes.string,
  fields: PropTypes.object,
  empty: PropTypes.bool,
  size: PropTypes.string,
};
