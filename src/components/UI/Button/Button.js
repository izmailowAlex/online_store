import {Link} from "react-router-dom";

import "./Button.css";

function Button({ children, className, to, button }) {
  const classname = className ? "button " + className : "button";

  return (
    <>
      {button ? (
        <button className={classname}>{children}</button>
      ) : (
        <Link className={classname} to={to}>
          {children}
        </Link>
      )}
    </>
  );
}

export default Button;
