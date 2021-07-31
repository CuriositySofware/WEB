import React, { useState } from "react";

export default function PruebaComponent() {
  const [fields, setfields] = useState({
    title: "",
    author: "",
    period: "",
    material: "",
    place: "",
  });

  const [empty, setempty] = useState(false);

  const submit = () => {
    let filterQuery = "";
    for (let key in fields) {
      let filterValue = fields[key];
      if (filterValue != "") {
        filterQuery += `${key}=${filterValue}&`;
      }
    }
    let lastAmpersand = filterQuery.lastIndexOf("&");
    let queryParams = filterQuery.slice(0, lastAmpersand);
    return queryParams;
  };

  return (
    <>
      <div className="filter d-flex justify-content-center my-2">
        <div className="input-prueba-container d-flex justify-content-center">
          <InputPrueba
            label="Autor"
            name="author"
            setfields={setfields}
            fields={fields}
            empty={empty}
            submit={submit}
          />
          <InputPrueba
            label="Material"
            name="material"
            setfields={setfields}
            fields={fields}
            empty={empty}
            submit={submit}
          />
          <InputPrueba
            label="Lugar"
            name="place"
            setfields={setfields}
            fields={fields}
            empty={empty}
            submit={submit}
          />
          <InputPrueba
            label="Periodo"
            name="period"
            setfields={setfields}
            fields={fields}
            empty={empty}
            submit={submit}
          />
          <InputPrueba
            label="Titulo"
            name="title"
            setfields={setfields}
            fields={fields}
            empty={empty}
            submit={submit}
          />
          <a
            href={`/search?${submit()}`}
            className="fas fa-search text-white text-decoration-none btn-prueba d-flex align-items-center justify-content-center bg-primary"
          ></a>
        </div>
      </div>
    </>
  );
}

function InputPrueba(props) {
  const {
    label,
    setfields,
    name,
    fields,
    empty,
    size = "md",
    submit,
    textarea,
    text,
    fullWidth,
    onFocus,
    onBlur,
    required,
    placeholder = "Busqueda",
    ...restProps
  } = props;

  const handleOnChange = ({ target }) => {
    setfields({
      ...fields,
      [target.name]: target.value,
    });
  };
  return (
    <div className="input-prueba">
      <label className="input-prueba-label">{label && `${label}:`}</label>
      <input
        type={text ?? "text"}
        placeholder={placeholder}
        className="input-prueba-box form-control border-0"
        aria-label={placeholder}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required ?? false}
        autoComplete="off"
        onChange={(e) => handleOnChange(e)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        {...restProps}
      />
    </div>
  );
}
