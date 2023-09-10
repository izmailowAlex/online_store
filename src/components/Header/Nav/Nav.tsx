import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import './Nav.css'

function Nav (): JSX.Element {
  const location = useLocation()
  return (
    <nav className="nav">
    {location.pathname !== '/catalog/' && (
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/catalog/">Каталог</Link>
        </li>
      </ul>)
    }
    </nav>
  )
}

export default Nav
