import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../App'
import Search from '../../Search/Search'
import './Actions.css'

function Actions (): JSX.Element {
  const { cartOrders, price, setPrice } = useContext(AppContext)
  const [cartCount, setCartCount] = useState<number>(0)
  useEffect(() => {
    setCartCount(cartOrders.length)
    setPrice(calcTotalPrice)
  }, [cartOrders])
  function calcTotalPrice (): number {
    const total = cartOrders.reduce((total, item) => {
      if (String(item.isOrder) === 'false') {
        return total
      }
      return total + (item.price * item.order)
    }, 0)
    return total
  }
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
            <span className="actions-menu__amount">{price}</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Actions
