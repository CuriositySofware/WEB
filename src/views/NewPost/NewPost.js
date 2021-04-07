import React, { useCallback, useEffect, useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { createArtifact, getMuseums } from "../../services/search";

export default function NewPost() {
  const [fields, setfields] = useState({
    title: "",
    author: "",
    material: "",
    location: "",
  });
  const [museums, setMuseums] = useState([]);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const execMuseumsRequest = async () => {
    const result = await getMuseums();
    setMuseums(result);
  };

  const onSelectChange = (museumIndex) => {
    setfields({ ...fields, location: museums[museumIndex].museum });
  };

  const submit = async () => {
    console.log(fields);

    const response = await createArtifact(fields);
    const jsonResponse = await response.json();

    if (!jsonResponse.ok) {
      setError(true);
    } else {
      setSuccess(true);
    }
  };

  useEffect(() => {
    execMuseumsRequest();
  }, []);

  useEffect(() => {
    setError(false);
    setSuccess(false);
  }, [fields]);

  return (
    <div className="form-wrap">
      <div className="form-container">
        <h1>Agrega una nueva obra</h1>
        <div className="form-group">
          <Input
            label="Título"
            fields={fields}
            setfields={setfields}
            name="title"
            fullWidth={true}
            submit={submit}
          />
          <Input
            label="Autor"
            fields={fields}
            setfields={setfields}
            name="author"
            fullWidth={true}
            submit={submit}
          />
          <Input
            label="Materiales"
            fields={fields}
            setfields={setfields}
            name="material"
            fullWidth={true}
            submit={submit}
          />
          <Select onSelect={onSelectChange} museums={museums} />
          {error && (
            <span className="form__error">
              Ocurrió un error inesperado, porfavor intentelo mas tarde.
            </span>
          )}
          {success && (
            <span className="form__success">
              Los datos se han agregado exitosamente.
            </span>
          )}
          <button className="btn form-button" onClick={() => submit()}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
