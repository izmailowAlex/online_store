import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ICardProps } from '../../../../interfaces/interface'
import Counter from '../../../UI/Counter/Counter'
import './Card.css'

function Card ({ product, handleAddToCart }: ICardProps): JSX.Element {
  const [val, setVal] = useState(1)
  function changeCounterValue (currentId: string, currentVal: number): void {
    setVal(currentVal)
  }
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          className="card__image"
          src={`../images/${product.image}`}
          alt={product.title}
        />
      </div>
      <div className="card__title">
        <Link className="card__title-link" to={`/productview/${product.id}/`}>
          {product.title}
        </Link>
      </div>
      <div className="card-controls">
        <h3 className="card-price">{product.price} Br</h3>
        <Counter
          id={product.id}
          count={val}
          min={product.min}
          max={product.max}
          changeCartOrdersContain={changeCounterValue}
        />
        <button
          className="card__button"
          onClick={() => {
            handleAddToCart(
              product.id,
              product.title,
              product.image,
              product.price,
              product.min,
              product.max,
              val
            )
          }}
        ></button>
      </div>
    </div>
  )
}

export default Card
