import { Link } from "react-router-dom";
import Nav from "./Nav";
import Order from "./Order";
import Logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header container">
      <Nav />
      <Link className="header__logo" to="/">
        <img src={Logo} alt="Balloons Logo" />
      </Link>
      <Order />
    </header>
  );
}

export default Header;
