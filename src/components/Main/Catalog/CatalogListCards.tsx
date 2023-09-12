import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import { ICartOrders } from '../../../interfaces/interface'
import Card from './Card/Card'

function CatalogListCards (): JSX.Element {
  const { filteredList, cartOrders, setCartOrders } = useContext(AppContext)
  function handleAddToCart (
    orderId: string,
    orderTitle: string,
    orderImage: string,
    orderPrice: number,
    orderMin: number,
    orderMax: number,
    orderVal: number): void {
    const newProduct = cartOrders.find(item => item.id === orderId)
    const currentProductOrder = {
      id: orderId,
      title: orderTitle,
      image: orderImage,
      price: orderPrice,
      min: orderMin,
      max: orderMax,
      order: orderVal,
      isOrder: false,
      isCart: true
    }
    const tempCartOrderedItems: ICartOrders[] = [...cartOrders]
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
    <div className="catalog-list">
      {filteredList.map((product, index) => {
        return <Card
          key={index}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      })}
    </div>
  )
}

export default CatalogListCards
