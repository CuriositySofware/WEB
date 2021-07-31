import React from "react";
import PropTypes from "prop-types";

export default function InputFilter(props) {
  const {
    label,
    setfields,
    name,
    fields,
    //  empty,
    //  size,
    submit,
    //  textarea,
    text,
    //  fullWidth,
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
    <div className="input-filter">
      <label className={`input-filter-label text-secondary fw-bold`}>
        {label && `${label}:`}
      </label>
      <input
        type={text ?? "text"}
        placeholder={placeholder}
        className="input-filter-box form-control border-0"
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
  );
}

InputFilter.propTypes = {
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
