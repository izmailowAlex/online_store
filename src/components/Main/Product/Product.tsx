import React from 'react'
import { IProductProps } from '../../../interfaces/interface'
import Checkbox from '../../UI/Checkbox/Checkbox'
import Counter from '../../UI/Counter/Counter'
import './Product.css'

function Product ({ image, name, price, count, min, max, onClick }: IProductProps): JSX.Element {
  return (
    <div className="product">
      <span className="product__checkbox">
        <Checkbox />
      </span>
      <img className="product__image" src={`../images/${image}`} alt="Product"></img>
      <span className="product__name">{name}</span>
      <span className="product__price">{price}</span>
      <span className="product__count">
        <Counter count={count} min={min} max={max} />
      </span>
      <span className="product__amount">1000</span>
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
