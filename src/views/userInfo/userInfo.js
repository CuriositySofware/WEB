import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import { useAuth } from "../../context/authContext";
import passValidation, { infoValidation } from "../../services/validations";
import Loader from "react-loader-spinner";
import { registerHandler } from "../../services/users";

export default function UserInfo() {
  const [fields, setFields] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const history = useHistory();
  const [error, setError] = useState("");
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState("");
  const [spinner, showSpinner] = useState(false);
  const {
    state: { first_name, last_name, email },
    dispatch,
  } = useAuth();
  // TODO: importante cambiar el handler register para que tenga mas sentido
  const handleRegisterSubmit = (e) => {
    e?.preventDefault();
    let _error = true;
    let _passError = true;
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

    if (!_error && !_passError) {
      showSpinner(true);
      registerHandler(fields).then((res) => {
        if (res.ok) {
          setSuccess(res.message);
          dispatch({
            type: "register",
            payload: res,
          });
          setError("");
          history.push("/search");
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
      <form className="register__container" onSubmit={handleRegisterSubmit}>
        <i className="fas fa-address-card"></i>
        <Input
          placeholder="Nombre"
          name="nombre"
          fullWidth
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleRegisterSubmit}
          defaultValue={first_name}
          disabled={!edit}
        />
        <Input
          placeholder="Apellido"
          name="apellido"
          fullWidth
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleRegisterSubmit}
          defaultValue={last_name}
          disabled={!edit}
        />
        <Input
          placeholder="Correo electrónico"
          name="email"
          fullWidth
          type="email"
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleRegisterSubmit}
          defaultValue={email}
          disabled
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
