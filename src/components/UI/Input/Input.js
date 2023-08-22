import "./Input.css";

function Input({ className, name, defaultValue, placeholder, message, maxlength }) {
  const classname = className ? "input " + className : "input";

  return (
    <div className={classname}>
      <input
        className="input__textbox"
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxlength}
      />
      {message ? <span className="input__message">{message}</span> : ""}
    </div>
  );
}

export default Input;
