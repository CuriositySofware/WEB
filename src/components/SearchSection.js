import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

export default function SearchSection() {
  const [fields, setfields] = useState({
    title: "",
    author: "",
    period: "",
    material: "",
    place: "",
  });

  const allFieldsAreEmpty = () => {
    return Object.values(fields).every((value) => !value);
  };
  
  const [empty, setempty] = useState(false);
  
  const submit = () => {
    if (!allFieldsAreEmpty()) {
        let params = "";
        for (let key in fields) {
        let value = fields[key];
        if (value != "") {
            params += `${key}=${value}&`;
        }
        }
        let lastAmpersand = params.lastIndexOf("&");
        let queryParams = params.slice(0,lastAmpersand);
        return queryParams;
    } else {
        setempty(true);
    }
  }
  
  return (
    <div>
        <div className="home-container">
            <div className="row">
                <div className="row-item">
                    <Input
                      label="Autor"
                      name="author"
                      setfields={setfields}
                      fields={fields}
                      empty={empty}
                      submit={submit}
                    />
                </div>
                <div className="row-item">
                    <Input
                      label="Material"
                      name="material"
                      setfields={setfields}
                      fields={fields}
                      empty={empty}
                      submit={submit}
                    />
                </div>
                <div className="row-item">
                    <Input
                      label="Lugar"
                      name="place"
                      setfields={setfields}
                      fields={fields}
                      empty={empty}
                      submit={submit}
                    />
                </div>
            </div>
            <div className="row">
                <div className="row-item">
                    <Input
                      label="Periodo"
                      name="period"
                      setfields={setfields}
                      fields={fields}
                      empty={empty}
                      submit={submit}
                    />
                </div>
                <div className="row-item">
                    <Input
                      label="Titulo"
                      name="title"
                      setfields={setfields}
                      fields={fields}
                      empty={empty}
                      submit={submit}
                    />
                </div>
                <div className="control">
                    <button
                    >
                      <Link to={`/prueba?${submit()}`} >Buscar</Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
