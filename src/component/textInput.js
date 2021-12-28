import React from "react";
import "../css/textinput.css";

function TextInput({
  label,
  name,
  value,
  type,
  placeHolder,
  onChange,
  required,
}) {
  return (
    <div style={{ margin: 10 }}>
      {label && <p>{label}</p>}
      <input
        className="textinput"
        name={name}
        placeholder={placeHolder}
        value={value}
        type={type}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default TextInput;
