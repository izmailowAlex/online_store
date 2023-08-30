import React, { useContext } from 'react'
import { AppContext } from '../../../App'
import { CatalogContext } from './Catalog'
import { IProduct } from '../../../interfaces/interface'
import Card from './Card/Card'

function CatalogListCards (): JSX.Element {
  const { cartOrders, setCartOrders } = useContext(AppContext)
  const { filteredList } = useContext(CatalogContext)
  function handleClickButton (product: IProduct): void {
    const currentProduct = product
    // console.log(cartOrders)
    if (cartOrders.length !== 0) {
      const includes: boolean = cartOrders.includes(currentProduct)
      if (includes) {
        return
      } else {
        setCartOrders([...cartOrders, ...[currentProduct]])
      }
    } else {
      setCartOrders([...cartOrders, ...[currentProduct]])
    }
    // if (cartOrders.includes(tempOrderProduct)) {
    //   setCartOrders([...cartOrders, ...tempOrderProduct])
    // }
    console.log(cartOrders)
  }

  return (
    <div className="catalog-list">
      {filteredList.map((product, index) => {
        return <Card key={index} product={product} onClick={() => { handleClickButton(product) }} />
      })}
    </div>
  )
}

export default CatalogListCards
