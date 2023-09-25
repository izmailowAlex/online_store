import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context/context'
import { ICardProps } from '../../../interfaces/interface'
import Counter from '../../UI/Counter/Counter'
import './Card.css'

function Card ({ product, handleAddToCart }: ICardProps): JSX.Element {
  const { cartOrders } = useContext(AppContext)
  const [val, setVal] = useState(1)
  let productIsCart = false
  const simileProductInCart = cartOrders.find(item => item.id === product.id)
  if (simileProductInCart !== undefined) {
    productIsCart = true
  }
  function changeCounterValue (currentId: string, currentVal: number): void {
    if (currentVal > product.max) {
      setVal(product.max)
    } else setVal(currentVal)
  }
  return (
    <div className="card">
      <Link className="card-wrapper-link" to={`/productview/${product.id}/`}>
        <div className="card-image-wrapper">
          <img
            className="card__image"
            src={`../images/${product.image}`}
            alt={product.title}
          />
        </div>
        <div className="card__title">
          {product.title}
        </div>
        {String(productIsCart) !== 'true'
          ? (
            <>
              <div className="card-controls">
                <h3 className="card-price">{product.price} Br</h3>
                <Counter
                  id={product.id}
                  count={val}
                  min={product.min}
                  balance={product.max}
                  changeCartOrdersContain={changeCounterValue}
                />
                <button
                  className="card__button"
                  onClick={(e) => {
                    e.preventDefault()
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
            </>)
          : <div className="card-controls">
              <span className="card-message">Этот товар уже в корзине!</span>
            </div>
        }
      </Link>
    </div>
  )
}

export default Card
