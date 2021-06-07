import React from "react";
import PropTypes from "prop-types";

export default function Input(props) {
  const {
    label,
    setfields,
    name,
    fields,
    empty,
    size = "md",
    submit,
    textarea,
    text,
    fullWidth,
    onFocus,
    onBlur,
    required,
    placeholder = "Busqueda",
    ...restProps
  } = props;
    
  const handleOnChange = ({ target }) => {
    setfields({
      ...fields,
      [target.name]: target.value,
    });
  };
  return (
      <div className="input-prueba">
          <label className="input-prueba-label text-primary fw-bold">{label && `${label}:`}</label>
          <input 
              type={text ?? "text"}
              placeholder={placeholder}
              className="input-prueba-box form-control border-0" 
              aria-label={placeholder}
              name={name}
              onFocus={onFocus}
              onBlur={onBlur}
              required={required ?? false}
              autoComplete="off"
              onChange={(e) => handleOnChange(e)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              {...restProps}
          />
      </div>
)
}

Input.propTypes = {
  label: PropTypes.string,
  setfields: PropTypes.func,
  name: PropTypes.string,
  fields: PropTypes.object,
  empty: PropTypes.bool,
  size: PropTypes.string,
  submit: PropTypes.func,
  textarea: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  text: PropTypes.string,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
};
