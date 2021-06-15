import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import { useAuth } from "../../context/authContext";
import passValidation, { infoValidation } from "../../services/validations";
import Loader from "react-loader-spinner";

export default function Register() {
  const [fields, setFields] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const history = useHistory();
  const [error, setError] = useState("");
  const [passError, setPassError] = useState(false);
  const [success, setSuccess] = useState("");
  const [spinner, showSpinner] = useState(false);
  const { dispatch } = useAuth();
  // TODO: importante cambiar el handler register para que tenga mas sentido
  const handleRegisterSubmit = (e) => {
    e?.preventDefault();
    let _error = true;
    let _passError = true;
    if (fields.password !== fields.password_confirmation) {
      setPassError(true);
    } else if (!passValidation(fields.password)) {
      setPassError(true);
    } else {
      setPassError(false);
      _passError = false;
    }
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
      dispatch({
        type: "register",
        payload: fields,
        callback: (res) => {
          if (res.ok) {
            setSuccess(res.message);
            setError("");
          } else {
            setError(res.message);
            setSuccess("");
          }
          showSpinner(false);
        },
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
        />
        <Input
          placeholder="Apellido"
          name="apellido"
          fullWidth
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleRegisterSubmit}
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
        />

        <Input
          placeholder="Contraseña"
          name="password"
          fullWidth
          type="password"
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleRegisterSubmit}
        />
        <Input
          placeholder="Confirmar contraseña"
          name="password_confirmation"
          fullWidth
          type="password"
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleRegisterSubmit}
        />
        {error && <span className="register__container__error">{error}</span>}
        {passError && (
          <>
            <span className="register__container__error">
              Las contraseñas no coinciden o la password es inválida
            </span>
            <span
              className="register__container__error"
              style={{ textAlign: "center" }}
            >
              La contraseña debe tener al menos 8 caracteres, al menos 1
              mayúscula, 1 minúscula, 1 número y 1 caracter especial
            </span>
          </>
        )}
        {success && (
          <span className="register__container__success">{success}</span>
        )}
        {spinner && (
          <Loader
            type="Circles"
            color="#313B72"
            height={100}
            width={100}
            visible={true}
          />
        )}
        {!spinner && (
          <button className="register__button" type="submit">
            Registrarse
          </button>
        )}
      </form>
    </div>
  );
}
