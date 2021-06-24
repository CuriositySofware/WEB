import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { updateArtifact } from "../services/search";
import { getMuseums } from "../services/search";

export default function Application({ app, removeApplication, idx }) {
  const {
    state: { token },
  } = useAuth();
  const [openDetails, setOpenDetails] = useState(false);
  const [museums, setMuseums] = useState([]);
  const [edit, setEdit] = useState(false);
  const [fields, setFields] = useState({
    title: app.labelArtifact.value,
    author: app.labelCreator.value,
    material: app.labelMaterial.value,
    location: "",
    num_location: 0,
    description: app.note.value,
  });
  const changeStatus = (status) => {
    updateArtifact(app, status, fields, token);
    removeApplication(idx);
    setOpenDetails(false);
  };

  const searchIndex = (museumsList, toSearch) => {
    let i = 0;
    for (i = 0; i < museumsList.length; i++) {
      if (museumsList[i].label === toSearch) {
        break;
      }
    }
    return i;
  };
  const execMuseumsRequest = async () => {
    const result = await getMuseums();

    const index = searchIndex(result, app.labelKeeper.value);
    setFields((prevState) => {
      return {
        ...prevState,
        num_location: index,
        location: result[index].museum,
      };
    });
    setMuseums(result);
  };

  useEffect(() => {
    execMuseumsRequest();
  }, []);
  return (
    <>
      <div
        className={`application d-flex align-items-center ${
          openDetails ? "rotate" : ""
        }`}
        onClick={() => setOpenDetails(!openDetails)}
      >
        <i className="fas fa-clipboard-list"></i>
        <span>{app.labelArtifact.value}</span>
      </div>
      {openDetails && (
        <div className="details d-flex">
          <div className="row">
            <div className="column">
              <h4 className="label">Titulo:</h4>
              <input
                value={fields.title}
                onChange={(event) => {
                  setFields((prevState) => {
                    return { ...prevState, title: event.target.value };
                  });
                }}
                disabled={!edit}
              ></input>
              {/*   <p>{app.labelArtifact.value}</p> */}
            </div>
            <div className="column">
              <h4 className="label">Autor:</h4>
              <input
                value={fields.author}
                onChange={(event) => {
                  setFields((prevState) => {
                    return { ...prevState, author: event.target.value };
                  });
                }}
                disabled={!edit}
              ></input>
              {/*    <p>{app.labelCreator.value}</p> */}
            </div>
          </div>
          <div className="row">
            <div className="column">
              <h4 className="label">Material:</h4>
              <input
                value={fields.material}
                onChange={(event) => {
                  setFields((prevState) => {
                    return { ...prevState, material: event.target.value };
                  });
                }}
                disabled={!edit}
              ></input>
              {/* <p>{app.labelMaterial.value}</p> */}
            </div>
            <div className="column">
              <h4 className="label">Ubicacion:</h4>
              <select
                disabled={!edit}
                value={fields.num_location}
                onChange={(event) => {
                  setFields((prevState) => {
                    return {
                      ...prevState,
                      num_location: event.target.value,
                      location: museums[event.target.value].museum,
                    };
                  });
                }}
              >
                {museums.map((museum, index) => (
                  <option value={index} key={index}>
                    {museum.label}
                  </option>
                ))}
              </select>
              {/* <p>{app.labelKeeper.value}</p> */}
            </div>
          </div>
          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Periodo:</h4>
              <input
                defaultValue={app.perios_l?.value || "Desconocido"}
                disabled
              ></input>
              {/*   <p>{app.perios_l?.value || "Desconocido"}</p> */}
            </div>
          </div>

          <div className="row row--fullw">
            <div className="column">
              <h4 className="label">Descripcion:</h4>
              <textarea
                rows={5}
                value={fields.description}
                onChange={(event) => {
                  setFields((prevState) => {
                    return { ...prevState, description: event.target.value };
                  });
                }}
                disabled={!edit}
              ></textarea>
              {/*   <p>{app.note.value}</p> */}
            </div>
          </div>
          <div className="controls">
            <button
              className="approve"
              onClick={() => changeStatus("approved")}
            >
              Aprobar
            </button>
            <button
              className="decline"
              onClick={() => changeStatus("declined")}
            >
              Rechazar
            </button>
            <button
              className="edit"
              onClick={() => setEdit((prevState) => !prevState)}
            >
              Editar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
