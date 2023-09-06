import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import { ICartOrders } from '../../../interfaces/interface'
import { CatalogContext } from './Catalog'
import Card from './Card/Card'

function CatalogListCards (): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const { filteredList } = useContext(CatalogContext)
  function handleAddToCart (orderId: string, val: number): void {
    const newProduct = cartOrders.find(item => item.id === orderId)
    const currentProductOrder = { id: orderId, order: val }
    console.log(currentProductOrder)
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
