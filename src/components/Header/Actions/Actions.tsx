import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { AppContext } from '../../../App'
import './Actions.css'

function Actions (): JSX.Element {
  const { cartCount } = useContext(AppContext)
  return (
    <div className="actions-menu">
      <ul className="actions-menu__list">
        <li className="actions-menu__item">
          <Link to="/search/" className="actions-menu__link">
            <span className="icon">
              <svg className="icon__svg">
                <use href="#search"></use>
              </svg>
            </span>
          </Link>
        </li>
        <li className="actions-menu__item">
          <Link to="/cart/" className="actions-menu__link">
            <span className="icon">
              <svg className="icon__svg">
                <use href="#bag"></use>
              </svg>
            </span>
            <span className="actions-menu__quantity">{cartCount}</span>
            <span className="actions-menu__amount">200</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Actions
