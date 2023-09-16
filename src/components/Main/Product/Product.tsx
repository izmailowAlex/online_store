import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/context'
import { IProductProps, ICartOrders } from '../../../interfaces/interface'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Counter from '../../UI/Counter/Counter'
import './Product.css'

function Product ({ id, image, title, price, count, min, max, istatusOrder, onClick, setCheckedAllProducts }: IProductProps): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const [currentBalance, setCurrentBalance] = useState(max)
  const [isOrder, setOrder] = useState<boolean>(istatusOrder)
  useEffect(() => {
    setOrder(istatusOrder)
  }, [istatusOrder])
  useEffect(() => {
    if (String(isOrder) === 'false') {
      setCheckedAllProducts(false)
    }
  }, [isOrder])
  function onChangeFlag (): void {
    setOrder(!isOrder)
  }
  function changeCartOrdersContain (currentOrderId: string, currentOrderVal?: number, balance?: number): void {
    const tempNewArray: ICartOrders[] = []
    cartOrders.forEach((item) => {
      if (item.id === currentOrderId) {
        if (currentOrderVal !== undefined) {
          item.order = currentOrderVal
        }
        if (balance !== undefined) {
          item.max = balance
        }
        item.isOrder = isOrder
      }
      tempNewArray.push(item)
    })
    setCartOrders([...tempNewArray])
  }
  return (
    <div className="product">
      <span className="product__checkbox">
        <Checkbox id={id} onChange={onChangeFlag} isOrder={isOrder} changeCartOrdersContain={changeCartOrdersContain} />
      </span>
      <img className="product__image" src={`../images/${image}`} alt="Product"></img>
      <span className="product__title">
        <Link className="product__title-link" to={`/productview/${id}/`}>
          {title}
        </Link>
      </span>
      <span className="product__price">{price}</span>
      <span className="product__count">
        <Counter id={id} count={count} min={min} balance={currentBalance} setBalance={setCurrentBalance} changeCartOrdersContain={changeCartOrdersContain} />
      </span>
      <span className="product__amount">{currentBalance}</span>
      <button className="product__remove" onClick={onClick}>
        <span className="icon">
          <svg className="icon__svg">
            <use href="#cross"></use>
          </svg>
        </span>
      </button>
    </div>
  )
}

export default Product
