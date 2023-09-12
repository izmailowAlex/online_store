import React, { useContext, useState } from 'react'
import { AppContext } from '../../../App'
import { IProductProps, ICartOrders } from '../../../interfaces/interface'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Counter from '../../UI/Counter/Counter'
import './Product.css'

function Product ({ id, image, name, price, count, min, max, istatusOrder, onClick }: IProductProps): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const [isOrder, setOrder] = useState<boolean>(istatusOrder)
  function onChangeFlag (): void {
    setOrder(!isOrder)
  }
  function changeCartOrdersContain (currentOrderId: string, currentOrderVal?: number): void {
    const tempNewArray: ICartOrders[] = []
    cartOrders.forEach((item) => {
      if (item.id === currentOrderId) {
        if (currentOrderVal !== undefined) {
          item.order = currentOrderVal
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
      <span className="product__name">{name}</span>
      <span className="product__price">{price}</span>
      <span className="product__count">
        <Counter id={id} count={count} min={min} max={max} changeCartOrdersContain={changeCartOrdersContain} />
      </span>
      <span className="product__amount">{max}</span>
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
