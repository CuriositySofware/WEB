import React, { useState } from "react";
import Input from "./Input";

export default function Filter() {

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
        let queryParams = filterQuery.slice(0,lastAmpersand);
        return queryParams;
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Input
                    label="Autor"
                    name="author"
                    setfields={setfields}
                    fields={fields}
                    empty={empty}
                    submit={submit}
                    />
                </div>
                <div className="col-4">
                    <Input
                    label="Material"
                    name="material"
                    setfields={setfields}
                    fields={fields}
                    empty={empty}
                    submit={submit}
                    />
                </div>
                <div className="col-4">
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
                <div className="col-4">
                    <Input
                    label="Periodo"
                    name="period"
                    setfields={setfields}
                    fields={fields}
                    empty={empty}
                    submit={submit}
                    />
                </div>
                <div className="col-4">
                    <Input
                    label="Titulo"
                    name="title"
                    setfields={setfields}
                    fields={fields}
                    empty={empty}
                    submit={submit}
                    />
            </div>
            <div className="control col-4">
                <a className="action-btn" href={`/prueba?${submit()}`}>Buscar</a>
            </div>
            </div>
        </div>
    );
}