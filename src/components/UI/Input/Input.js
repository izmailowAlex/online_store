import React from "react";

import "./Input.css";

function Input(
  {
    className,
    name,
    placeholder,
    message,
    maxlength,
  },
  ref
) {
  let classname = className ? "input " + className : "input";

  return (
    <div className={classname}>
      <input
        className="input__textbox"
        type="text"
        ref={ref}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxlength}
      />
      {message ? <span className="input__message">{message}</span> : ""}
    </div>
  );
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
