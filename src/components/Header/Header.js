import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../../images/logo.svg";
import Actions from "./Actions";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Nav />
        <Link className="header__logo" to="/">
          <img src={Logo} alt="Balloon Logo" />
        </Link>
        <Actions />
      </div>
    </header>
  );
}

export default Header;
