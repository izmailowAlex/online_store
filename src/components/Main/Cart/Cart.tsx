import React, { useContext, useState } from 'react'
import { AppContext } from '../../../App'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Product from '../Product/Product'
import Checkout from '../Checkout/Checkout'
import './Cart.css'

function Cart (): JSX.Element {
  const [popupWindow, setPopupWindow] = useState(false)
  const { cartOrders } = useContext(AppContext)
  return (
    <div className="cart">
      <h2 className="cart__title">Корзина</h2>
      <div className="cart__content">
        <div className="cart__table">
          <div className="cart__list-head">
            <span className="cart__select-all">
              <Checkbox />
            </span>
            <a className="cart__cart-clear" href="#">
              Очистить корзину
            </a>
          </div>
          <ul className="cart__list">
            {cartOrders.length > 0 && (
              cartOrders.map((order) => {
                return (
                  <Product
                    key={order.id}
                    name={order.title}
                    image={order.image}
                    price={order.price}
                    count={order.count}
                    min={order.min}
                    max={order.max}
                  />
                )
              })
            )}
          </ul>
        </div>
        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__amount">800</p>
          <Input
            className="cart__promocode"
            name="promocode"
            placeholder="Введите промокод"
            maxlength={8}
          />
          <Button
            className="cart__checkout"
            onClick={() => { setPopupWindow(true) }}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {popupWindow ? <Checkout setPopupWindow={setPopupWindow} /> : ''}
    </div>
  )
}

export default Cart
