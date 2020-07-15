import React from "react";
import "./form-input.css";
const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="form">
    <input className="form-input" onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
