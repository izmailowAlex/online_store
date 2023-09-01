import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../App'
import { ICartOrdered } from '../../../interfaces/interface'
import { CatalogContext } from './Catalog'
import Card from './Card/Card'

function CatalogListCards (): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const { filteredList } = useContext(CatalogContext)
  useEffect(() => {
    console.log(cartOrders)
  }, [cartOrders])
  function handleAddToCart (productID: string): void {
    const currentProductID = { id: productID }
    const tempCartOrderedItems: ICartOrdered[] = [...cartOrders]
    const tempCartOrderedArray: string[] = []
    cartOrders.forEach((item) => {
      tempCartOrderedArray.push(Object.values(item).join())
    })
    if (cartOrders.length === 0) {
      setCartOrders([currentProductID])
      return
    } else {
      if (tempCartOrderedArray.includes(productID)) {
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
