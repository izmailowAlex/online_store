import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/context'
import Search from '../../Search/Search'
import './Actions.css'

function Actions (): JSX.Element {
  const { cartOrders } = useContext(AppContext)
  const [cartCount, setCartCount] = useState<number>(0)
  useEffect(() => {
    setCartCount(cartOrders.length)
  }, [cartOrders])
  return (
    <div className="actions-menu">
      <ul className="actions-menu__list">
        <li className="actions-menu__item">
          <Search />
        </li>
        <li className="actions-menu__item">
          <Link to="/cart" className="actions-menu__link">
            <span className="icon">
              <svg className="icon__svg">
                <use href="#bag"></use>
              </svg>
            </span>
            <span className="actions-menu__quantity">{cartCount}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Actions
