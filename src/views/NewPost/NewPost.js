import React, { useState } from "react";
import Input from "../../components/Input";

export default function NewPost() {
  const [fields, setfields] = useState({
    title: "",
    author: "",
  });
  return (
    <div className="form-wrap">
      <div className="form-container">
        <h1>Agrega una nueva obra</h1>
        <div className="form-group">
          <Input
            label="Titulo"
            fields={fields}
            setfields={setfields}
            name="title"
          />
          <Input
            label="Autor"
            fields={fields}
            setfields={setfields}
            name="author"
          />
          <Input
            label="Materiales"
            fields={fields}
            setfields={setfields}
            name="author"
          />
          <Input
            label="Ubicacion"
            fields={fields}
            setfields={setfields}
            name="author"
          />
          <button className="btn form-button">Agregar</button>
        </div>
      </div>
    </div>
  );
}
