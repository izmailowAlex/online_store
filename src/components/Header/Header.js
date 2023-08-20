import { Link } from 'react-router-dom';
import Nav from './Nav';
import Order from './Order';

function Header() {
  return (
    <header className="header container">
      <Nav />
      <Link className="header__logo" to='/'><img src="../Logo.png" alt="Logo" /></Link>
      <Order />
    </header>
  );
}
  
export default Header;