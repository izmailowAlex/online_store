import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../../context/context'
import useLocalStorageAllCart from '../../../hooks/useLocalStorageAllCart'
import { ICartOrders } from '../../../interfaces/interface'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Product from '../Product/Product'
import Checkout from '../Checkout/Checkout'
import Pagination from '../Pagination/Pagination'
import './Cart.css'

function Cart (): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const [popupWindow, setPopupWindow] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [checkedAllProducts, setCheckedAllProducts] = useLocalStorageAllCart(false, 'checkedAllCart')
  const [price, setPrice] = useState<number>(0)
  const [currentCartPage, setCurrentCartPage] = useState(1)
  const [productsPerCartPage] = useState(10)
  const lastProductIndexToCartPage = currentCartPage * productsPerCartPage
  const firstProductIndexToCartPage = lastProductIndexToCartPage - productsPerCartPage
  const currentProductPageOfCartProducts = cartOrders.slice(firstProductIndexToCartPage, lastProductIndexToCartPage)
  const PROMO_CODE = process.env.REACT_APP_PROMO_CODE
  const countCartPages = (cartOrders.length % productsPerCartPage) === 0
    ? Math.floor(cartOrders.length / productsPerCartPage)
    : Math.floor(cartOrders.length / productsPerCartPage) + 1
  useEffect(() => {
    if (currentCartPage > countCartPages) {
      setCurrentCartPage(countCartPages)
    }
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

  function paginate (pageNumber: number): void {
    setCurrentCartPage(pageNumber)
  }

  function pageNavigate (dir: string): void {
    setCurrentCartPage(dir === 'next'
      ? (currentCartPage !== countCartPages
          ? currentCartPage + 1
          : currentCartPage)
      : (currentCartPage !== 1
          ? currentCartPage - 1
          : currentCartPage
        )
    )
  }

  function comparePromoCode (value: string): void {
    if (value === PROMO_CODE) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  return (
    <div className="cart">
      <div className="cart-content">
        {cartOrders.length !== 0
          ? (
          <>
          <div className="cart-table">
            <div className="cart-table-upper">
              <h2 className="cart__title">Корзина</h2>
              <div
                className="cart-clear"
                onClick={() => { clearAllOrders() }}
              >
                Очистить корзину
              </div>
            </div>
            <div className="cart-list-head">
              <span className="cart-select-all">
                <Checkbox onChange={handleCheckedAllCartProducts} isOrder={checkedAllProducts} />
                <span>Выбрать все</span>
              </span>
            </div>
            <ul className="cart-list">
              {currentProductPageOfCartProducts.map((order) => {
                return (
                  <Product
                    key={order.id}
                    id={order.id}
                    title={order.title}
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
            <div className="pagination">
              <ul className="page-list">
                <li className="page-item page-item-nav" onClick={() => { pageNavigate('prev') }} >Назад</li>
                <Pagination
                  currentPage={currentCartPage}
                  productsPerPage={productsPerCartPage}
                  totalProducts={cartOrders.length}
                  paginate={paginate}
                />
                <li className="page-item page-item-nav" onClick={() => { pageNavigate('next') }} >Вперёд</li>
              </ul>
            </div>
          </div>
          <div className="cart-summary">
            <h2 className="cart-summary__title">Итого:</h2>
            <p className="cart-amount">{String(success) === 'false' ? price.toFixed(2) : (price - (price * 0.2)).toFixed(2)}</p>
            <Input
              className="cart-promocode"
              name="promocode"
              placeholder="Введите промокод E020PB3P"
              success={success}
              maxlength={8}
              onChange={(event) => { comparePromoCode(event.target.value) }}
            />
            <Button
              className="cart-checkout"
              onClick={() => { setPopupWindow(true) }}
            >
              Оформить заказ
            </Button>
          </div>
          </>)
          : (
          <>
          <div className="cart-empty-block">
            <h2 className="cart__title">Корзина пуста</h2>
            <p className="cart-description">Выберите товар в каталоге</p>
          </div>
          </>)
        }
      </div>
      {String(popupWindow) !== 'false' ? <Checkout setPopupWindow={setPopupWindow} /> : ''}
    </div>
  )
}

export default Cart
