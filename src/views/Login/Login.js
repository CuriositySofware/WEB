import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import { useAuth } from "../../context/authContext";
import Loader from "react-loader-spinner";
import { loginHandler } from "../../services/users";

export default function Login() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const [spinner, showSpinner] = useState(false);
  const [error, setError] = useState(false);
  const { dispatch } = useAuth();

  const handleLoginSubmit = (e) => {
    e?.preventDefault();
    let _error = true;

    if (!fields.email || !fields.password) {
      setError("Información inválida. Todos los campos son necesarios");
    } else {
      _error = false;
      setError("");
    }

    if (!_error) {
      showSpinner(true);
      loginHandler(fields).then((res) => {
        if (res.ok) {
          // setSuccess(res.message);
          dispatch({
            type: "login",
            payload: res,
          });
          history.push("/home")

          setError("");
        } else {
          setError(res.message);
          // setSuccess("");
        }
        showSpinner(false);
      });
    }
  };
  return (
    <div className="login">
      <form className="login__container" onSubmit={handleLoginSubmit}>
        <i className="fas fa-sign-in-alt"></i>
        <Input
          placeholder="Correo electrónico"
          name="email"
          fullWidth
          fields={fields}
          setfields={setFields}
          type="email"
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
        {error && <span className="login__container__error">{error}</span>}
        {spinner && (
          <Loader
            type="Circles"
            color="#233d4d"
            height={100}
            width={100}
            visible={true}
          />
        )}
        {!spinner && (
          <button className="login__button" type="submit">
            Ingresar
          </button>
        )}
      </form>
    </div>
  );
}
