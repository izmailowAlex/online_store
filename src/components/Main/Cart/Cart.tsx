import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../../context/context'
import useLocalStorageAllCart from '../../../hooks/useLocalStorageAllCart'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Product from '../Product/Product'
import Checkout from '../Checkout/Checkout'
import { ICartOrders } from '../../../interfaces/interface'
import './Cart.css'

function Cart (): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const [popupWindow, setPopupWindow] = useState<boolean>(false)
  const [checkedAllProducts, setCheckedAllProducts] = useLocalStorageAllCart(false, 'checkedAllCart')
  const [price, setPrice] = useState<number>(0)
  useEffect(() => {
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
  function handleDeleteProduct (id: string): void {
    setCartOrders(cartOrders.filter(item => item.id !== id))
  }

  function handleCheckedAllCartProducts (): void {
    setCheckedAllProducts(!checkedAllProducts)
    const tmpFlag = checkedAllProducts
    const tmp: ICartOrders[] = []
    cartOrders.forEach((item) => {
      item.isOrder = !tmpFlag
      tmp.push(item)
    })
    setCartOrders([...tmp])
  }

  function clearAllOrders (): void {
    setCartOrders([])
    setCheckedAllProducts(false)
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
                      <Checkbox onChange={handleCheckedAllCartProducts} isOrder={checkedAllProducts} />
                      <span>Выбрать все</span>
                    </span>
                  </div>
                  <ul className="cart__list">
                    {cartOrders.map((order) => {
                      return (
                        <Product
                          key={order.id}
                          id={order.id}
                          name={order.title}
                          image={order.image}
                          price={order.price}
                          count={order.order}
                          min={order.min}
                          max={order.max}
                          istatusOrder={order.isOrder}
                          setCheckedAllProducts={setCheckedAllProducts}
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
          <p className="cart__amount">{price}</p>
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
      {String(popupWindow) !== 'false' ? <Checkout setPopupWindow={setPopupWindow} /> : ''}
    </div>
  )
}

export default Cart
