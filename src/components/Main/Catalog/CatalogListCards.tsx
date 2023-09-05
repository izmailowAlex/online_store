import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import { ICartOrders } from '../../../interfaces/interface'
import { CatalogContext } from './Catalog'
import Card from './Card/Card'

function CatalogListCards (): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const { filteredList } = useContext(CatalogContext)
  function handleAddToCart (productID: string): void {
    const currentProductID = { id: productID }
    const tempCartOrderedItems: ICartOrders[] = [...cartOrders]
    const newProduct = cartOrders.find(item => item.id === productID)
    if (cartOrders.length === 0) {
      setCartOrders([currentProductID])
      return
    } else {
      if (newProduct !== undefined) {
        return
      } else {
        tempCartOrderedItems.push(currentProductID)
      }
    }
    setCartOrders([...tempCartOrderedItems])
  }

  return (
    <div className="catalog-list">
      {filteredList.map((product, index) => {
        return <Card key={index} product={product} handleAddToCart={handleAddToCart} />
      })}
    </div>
  )
}

export default CatalogListCards
