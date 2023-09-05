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
  const { productsLibrary, cartOrders, setCartOrders } = useContext(AppContext)

  function handleDeleteProduct (id: string): void {
    setCartOrders(cartOrders.filter(item => item.id !== id))
  }

  function clearAllOrders (): void {
    setCartOrders([])
  }

  return (
    <div className="cart">
      <div className="cart__content">
        <div className="cart__table">
            {cartOrders.length !== 0
              ? (
                <>
                  <div className="cart__table-upper">
                    <h2 className="cart__title">Корзина</h2>
                    <div
                      className="cart__cart-clear"
                      onClick={() => { clearAllOrders() }}
                    >
                      Очистить корзину
                    </div>
                  </div>
                  <div className="cart__list-head">
                    <span className="cart__select-all">
                      <Checkbox />
                      <span>Выбрать все</span>
                    </span>
                  </div>
                  <ul className="cart__list">
                    {productsLibrary.filter((product) => {
                      const newProduct = cartOrders.find(item => item.id === product.id)
                      if (newProduct !== undefined) {
                        return true
                      }
                      return false
                    }).map((order) => {
                      return (
                        <Product
                          key={order.id}
                          name={order.title}
                          image={order.image}
                          price={order.price}
                          count={order.count}
                          min={order.min}
                          max={order.max}
                          onClick={() => { handleDeleteProduct(order.id) }}
                        />
                      )
                    })}
                  </ul>
                </>)
              : <>
                  <h2 className="cart__title">Корзина пуста</h2>
                  <p>Выберите товар в каталоге</p>
                </>
            }
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
