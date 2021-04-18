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
      history.push("/search");
    } else {
      setError(true);
    }
    console.log(fields);
  };
  return (
    <div className="login">
      <form className="login__container" onSubmit={handleLoginSubmit}>
        <i className="fas fa-user-cog"></i>
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
            Credenciales Invalidas
          </span>
        )}

        <button className="login__button" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}
