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
            size="sm"
          />
          <Input
            label="Autor"
            fields={fields}
            setfields={setfields}
            name="author"
            size="sm"
          />
          <Input
            label="Materiales"
            fields={fields}
            setfields={setfields}
            name="author"
            size="sm"
          />
          <Input
            label="Ubicacion"
            fields={fields}
            setfields={setfields}
            name="author"
            size="sm"
          />
          <button className="btn form-button">Agregar</button>
        </div>
      </div>
    </div>
  );
}
