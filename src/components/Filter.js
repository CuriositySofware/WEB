import React, { useState } from "react";
import InputFilter from "./InputFilter";

export default function Filter() {

    const [fields, setfields] = useState({
        title: "",
        author: "",
        period: "",
        material: "",
        place: "",
    });

    const [empty] = useState(false);
  
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
        <>
            <div className="filter d-flex justify-content-center my-2">
                <div className="input-filter-container d-flex justify-content-center">
                    <InputFilter
                        label="Autor"
                        name="author"
                        setfields={setfields}
                        fields={fields}
                        empty={empty}
                        submit={submit}
                    />
                    <InputFilter
                        label="Material"
                        name="material"
                        setfields={setfields}
                        fields={fields}
                        empty={empty}
                        submit={submit}
                    />
                    <InputFilter
                        label="Lugar"
                        name="place"
                        setfields={setfields}
                        fields={fields}
                        empty={empty}
                        submit={submit}
                    />
                    <InputFilter
                        label="Período"
                        name="period"
                        setfields={setfields}
                        fields={fields}
                        empty={empty}
                        submit={submit}
                    />
                    <InputFilter
                        label="Título"
                        name="title"
                        setfields={setfields}
                        fields={fields}
                        empty={empty}
                        submit={submit}
                    />
                    <a href={`/search?${submit()}`} className="fas fa-search text-white text-decoration-none btn-filter d-flex align-items-center justify-content-center bg-secondary"></a>
                </div>
            </div>
        </>
    )
}