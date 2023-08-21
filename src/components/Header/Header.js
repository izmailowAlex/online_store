import { Link } from "react-router-dom";
import Nav from "./Nav";
import Order from "./Order";
import Logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Nav />
        <Link className="header__logo" to='/'><img src={Logo} alt="Balloon Logo"/></Link>
        <Order />
      </div>
    </header>
  );
}

export default Header;
