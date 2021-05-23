import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import { useAdmin } from "../../context/adminContext";

export default function Login() {
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const [error, setError] = useState(false);
  const { dispatch } = useAdmin();

  const handleLoginSubmit = (e) => {
    e?.preventDefault();
    if (fields.username === "admin" && fields.password === "admin") {
      dispatch({ type: "login" });
      history.push("applications");
    } else {
      setError(true);
    }
  };
  return (
    <div className="login">
      <form className="login__container" onSubmit={handleLoginSubmit}>
        <i className="fas fa-sign-in-alt"></i>
        <Input
          placeholder="Usuario"
          name="username"
          fullWidth
          fields={fields}
          setfields={setFields}
          submit={handleLoginSubmit}
        />
        <Input
          placeholder="Contraseña"
          name="password"
          fullWidth
          fields={fields}
          setfields={setFields}
          type="password"
          submit={handleLoginSubmit}
        />
        {error && (
          <span className="login__container__error">
            Credenciales inválidas
          </span>
        )}

        <button className="login__button" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}
