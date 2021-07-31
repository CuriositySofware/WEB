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
    placeholder = "Búsqueda",
    ...restProps
  } = props;
  const handleOnChange = ({ target }) => {
    setfields({
      ...fields,
      [target.name]: target.value,
    });
  };
  return (
    <div
      className={`input-container ${
        size === "sm" ? "input-container-sm" : ""
      } ${fullWidth && "fullWidth"} ${!label && "input-container--center"}`}
    >
      <label>{label && `${label}:`} </label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          className={empty ? "empty" : ""}
          name={name}
          autoComplete="off"
          onChange={(e) => handleOnChange(e)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          {...restProps}
        />
      ) : (
        <input
          type={text ?? "text"}
          placeholder={placeholder}
          className={empty ? "empty" : ""}
          name={name}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required ?? false}
          autoComplete="off"
          onChange={(e) => handleOnChange(e)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          {...restProps}
        />
      )}
    </div>
  );
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
