import React, { useState } from "react";
import "./Form.css";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        required
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
