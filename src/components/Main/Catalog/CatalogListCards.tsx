import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../App'
import { ICartOrdered } from '../../../interfaces/interface'
import { CatalogContext } from './Catalog'
import Card from './Card/Card'

function CatalogListCards (): JSX.Element {
  const { cartOrders, setCartOrders, cartOrderedArray } = useContext(AppContext)
  const { filteredList } = useContext(CatalogContext)
  useEffect(() => {
    console.log(cartOrders)
  }, [cartOrders])
  function handleAddToCart (productID: string): void {
    const currentProductID = { id: productID }
    const tempCartOrderedItems: ICartOrdered[] = [...cartOrders]
    cartOrders.forEach((item) => {
      cartOrderedArray.push(Object.values(item).join())
    })
    if (cartOrders.length === 0) {
      setCartOrders([currentProductID])
      return
    } else {
      if (cartOrderedArray.includes(productID)) {
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
        return <Card key={index} product={product} onClick={handleAddToCart} />
      })}
    </div>
  )
}

export default CatalogListCards
