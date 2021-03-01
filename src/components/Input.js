import React from "react";

export default function Input({ label, setfields, name, fields }) {
  const handleOnChange = ({ target }) => {
    setfields({
      ...fields,
      [target.name]: target.value,
    });
  };
  return (
    <div className="input-container">
      <label>{label}: </label>
      <input
        type="text"
        placeholder="Busqueda"
        name={name}
        onChange={(e) => handleOnChange(e)}
      />{" "}
    </div>
  );
}
