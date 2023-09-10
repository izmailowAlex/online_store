import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../../App'
import { ICartOrders } from '../../../interfaces/interface'
import Counter from '../../UI/Counter/Counter'
import Button from '../../UI/Button/Button'
import './ProductView.css'

function ProductView (): JSX.Element {
  const productItemPath = useParams()
  const { productsLibrary, cartOrders, setCartOrders } = useContext(AppContext)
  const [prodValue, setProdValue] = useState(0)
  const tempProductItem = { image: '', title: '', price: 0, min: 0, max: 0 }
  const currentProduct = productsLibrary.find(
    (item) => item.id === productItemPath.id
  )
  if (currentProduct !== undefined) {
    tempProductItem.image = currentProduct.image
    tempProductItem.title = currentProduct.title
    tempProductItem.price = currentProduct.price
    tempProductItem.min = currentProduct.min
    tempProductItem.max = currentProduct.max
  }
  let productIsCart = false
  const simileProductInCart = cartOrders.find(item => item.id === productItemPath.id)
  if (simileProductInCart !== undefined) {
    productIsCart = true
  }
  function changeCartOrdersContain (currentOrderId: string, currentOrderVal: number): void {
    setProdValue(currentOrderVal)
  }
  function handleAddToCart (orderId: string): void {
    const currentProductOrder = {
      id: orderId,
      image: tempProductItem.image,
      title: tempProductItem.title,
      price: tempProductItem.price,
      min: tempProductItem.min,
      max: tempProductItem.max,
      order: prodValue,
      isOrder: false,
      isCart: true
    }
    const tempCartOrderedItems: ICartOrders[] = [...cartOrders]
    const newProduct = cartOrders.find(item => item.id === orderId)
    if (cartOrders.length === 0) {
      setCartOrders([currentProductOrder])
      return
    } else {
      if (newProduct !== undefined) {
        return
      } else {
        tempCartOrderedItems.push(currentProductOrder)
      }
    }
    setCartOrders([...tempCartOrderedItems])
  }

  return (
    <>{currentProduct !== undefined &&
      (<div className="product-view">
        <div className="product-view__image-container">
          <img
            className="product-view__image"
            src={`../../images/${currentProduct.image}`}
            alt={currentProduct.title}
          />
        </div>
        <div className="product-view__content">
          <h2 className="product-view__title">{currentProduct.title}</h2>
          {currentProduct.instock
            ? <span className="product-view__tag product-view__tag_instock">В наличии</span>
            : <span className='product-view__tag product-view__tag_outstock'>Нет в наличии</span>
          }
          <div className="product-view__price">
            <span className="product-view__current-price">
              {currentProduct.price}
            </span>
            {currentProduct.discount !== 0
              ? <span className="product-view__old-price">
                  {Math.round(currentProduct.price * ((currentProduct.discount + 100) / 100))}
                </span>
              : ''
            }
          </div>
          <div className="product-view__control-group">
            <span className="product-view__quantity">
              <Counter
                id={currentProduct.id}
                count={currentProduct.count}
                min={currentProduct.min}
                max={currentProduct.max}
                changeCartOrdersContain={changeCartOrdersContain}
              />
            </span>
            <Button
              className="product-view__to-cart-button"
              disabled={productIsCart}
              onClick={() => { handleAddToCart(currentProduct.id) }}
              >
                {String(productIsCart) !== 'true' ? 'В корзину' : 'Товар в корзине'}
            </Button>
          </div>
          <div className="product-view__description">
            <div className="product-view__description-title">Характеристики</div>
            <ul className="product-view__description-list">
              <li className="product-view__description-item">
                <span className="product-view__property">Артикул:</span>
                <span className="product-view__value">{currentProduct.id}</span>
              </li>
              <li className="product-view__description-item">
                <span className="product-view__property">Размер:</span>
                <span className="product-view__value">{currentProduct.size}</span>
              </li>
              <li className="product-view__description-item">
                <span className="product-view__property">Производитель:</span>
                <span className="product-view__value">{currentProduct.producer}</span>
              </li>
              <li className="product-view__description-item">
                <span className="product-view__property">Страна:</span>
                <span className="product-view__value">{currentProduct.country}</span>
              </li>
            </ul>
          </div>
          <div className="product-view__description">
            <div className="product-view__description-title">Описание</div>
            <p className="product-view__description-text">{currentProduct.description}</p>
          </div>
        </div>
      </div>)}
    </>
  )
}

export default ProductView
