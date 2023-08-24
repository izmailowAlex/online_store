import React from 'react'

import Checkbox from '../../UI/Checkbox/Checkbox'
import Counter from '../../UI/Counter/Counter'
import './Product.css'

function Product (/* eslint-disable react/prop-types */{ image, name, price, count, min, max }) {
  return (
    <div className="product">
      <span className="product__checkbox">
        <Checkbox />
      </span>
      <img className="product__image" src={image} alt="Product"></img>
      <span className="product__name">{name}</span>
      <span className="product__price">{price}</span>
      <span className="product__count">
        <Counter count={count} min={min} max={max} />
      </span>
      <span className="product__amount">1000</span>
      <button className="product__remove">
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
