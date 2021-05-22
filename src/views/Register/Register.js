import React, { useState } from "react";
import { useHistory } from "react-router";
import Input from "../../components/Input";
import { useAdmin } from "../../context/adminContext";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function Register() {
  const [fields, setFields] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });
  const history = useHistory();
  const [error, setError] = useState(false);
  const { dispatch } = useAdmin();

  const handleRegisterSubmit = (e) => {
    e?.preventDefault();
    if (fields.username === "admin" && fields.password === "admin") {
      dispatch({ type: "register" });
      history.push("applications");
    } else {
      setError(true);
    }
  };
  const [selectedDate, handleDateChange] = useState(new Date());

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
        <div style={{display: "flex", justifyItems: "space-between"}}>
        <p>Fecha de nacimiento</p>
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <DatePicker format="dd/MM/yyyy" value={selectedDate} onChange={handleDateChange} inputVariant="outlined" style={{padding: 0}}/>
        </MuiPickersUtilsProvider>
        </div>
        {error && (
          <span className="register__container__error">
            Información inválida
          </span>
        )}
        <button className="register__button" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}
