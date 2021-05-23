import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import { useAdmin } from "../../context/adminContext";
import passValidation from "../../services/validations";

export default function Register() {
  const [fields, setFields] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    birthday: "",
    password: "",
    password_confirmation: "",
  });
  const history = useHistory();
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const { dispatch } = useAdmin();
  // TODO: importante cambiar el handler register para que tenga mas sentido
  const handleRegisterSubmit = (e) => {
    e?.preventDefault();
    if (fields.username === "admin" && fields.password === "admin") {
      dispatch({ type: "register" });
      history.push("applications");
      setError(false);
    } else {
      setError(true);
    }
    if (fields.password !== fields.password_confirmation) {
      setPassError(true);
    } else if (!passValidation(fields.password)) {
      setPassError(true);
    } else {
      setPassError(false);
    }
  };

  return (
    <div className="register">
      <form className="register__container" onSubmit={handleRegisterSubmit}>
        <i className="fas fa-address-card"></i>
        <Input
          placeholder="Nombre"
          name="name"
          fullWidth
          fields={fields}
          required={true}
          setfields={setFields}
          submit={handleRegisterSubmit}
        />
        <Input
          placeholder="Apellido"
          name="last_name"
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
          placeholder="Fecha de nacimiento"
          name="birthday"
          fullWidth
          type="text"
          onFocus={(e) => {
            e.currentTarget.type = "date";
          }}
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
        {error && (
          <span className="register__container__error">
            Información inválida
          </span>
        )}
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
        <button className="register__button" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}
