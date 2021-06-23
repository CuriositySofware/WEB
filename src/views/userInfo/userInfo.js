import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import { useAuth } from "../../context/authContext";
import { infoValidation } from "../../services/validations";
import Loader from "react-loader-spinner";
import { editUserHandler } from "../../services/users";

export default function UserInfo() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState("");
  const [spinner, showSpinner] = useState(false);
  const {
    state: { first_name, last_name, email, token },
    dispatch,
  } = useAuth();
  const [fields, setFields] = useState({
    nombre: first_name,
    apellido: last_name,
    email,
  });
  // TODO: importante cambiar el handler register para que tenga mas sentido
  const handleEditSubmit = (e) => {
    e?.preventDefault();
    let _error = true;
    if (
      !infoValidation({
        nombre: fields.nombre,
        apellido: fields.apellido,
        email: fields.email,
      })
    ) {
      setError("Información inválida. Todos los campos son necesarios");
    } else {
      _error = false;
      setError("");
    }

    if (!_error) {
      showSpinner(true);
      editUserHandler(fields, token).then((res) => {
        if (res.ok) {
          setSuccess(res.message);
          dispatch({
            type: "userInfo",
            payload: res,
          });
          setEdit(false);
          setError("");
        } else {
          setError(res.message);
          setSuccess("");
        }
        showSpinner(false);
      });
    }
  };

  return (
    <div className="register">
      <form className="register__container" onSubmit={handleEditSubmit}>
        <i className="fas fa-address-card"></i>
        <Input
          placeholder="Nombre"
          name="nombre"
          fullWidth
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleEditSubmit}
          disabled={!edit}
          defaultValue={first_name}
        />
        <Input
          placeholder="Apellido"
          name="apellido"
          fullWidth
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleEditSubmit}
          disabled={!edit}
          defaultValue={last_name}
        />
        <Input
          placeholder="Correo electrónico"
          name="email"
          fullWidth
          type="email"
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleEditSubmit}
          disabled
          defaultValue={email}
        />

        {error && <span className="register__container__error">{error}</span>}

        {success && (
          <span className="register__container__success">{success}</span>
        )}
        {spinner && (
          <Loader
            type="Circles"
            color="#795933"
            height={100}
            width={100}
            visible={true}
          />
        )}
        {!spinner && !edit && (
          <button
            className="register__button"
            type="button"
            onClick={() => setEdit(true)}
          >
            Editar
          </button>
        )}
        {edit && (
          <button className="register__button" type="submit">
            Guardar
          </button>
        )}
      </form>
    </div>
  );
}
