import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../context/context'
import { ICartOrders } from '../../../interfaces/interface'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import './CatalogList.css'

function CatalogList (): JSX.Element {
  const { filteredList, cartOrders, setCartOrders } = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(6)
  // console.log(filteredList)
  const lastProductIndexToPage = currentPage * productsPerPage
  const firstProductIndexToPage = lastProductIndexToPage - productsPerPage
  const currentProductPageOfProducts = filteredList.slice(firstProductIndexToPage, lastProductIndexToPage)
  const countPages = (filteredList.length % productsPerPage) === 0 && filteredList.length !== 0
    ? Math.floor(filteredList.length / productsPerPage)
    : Math.floor(filteredList.length / productsPerPage) + 1
  useEffect(() => {
    if (currentPage > countPages) {
      setCurrentPage(countPages)
    }
  }, [currentProductPageOfProducts])
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
      max: orderMax - orderVal,
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

  function paginate (pageNumber: number): void {
    setCurrentPage(pageNumber)
  }

  function pageNavigate (dir: string): void {
    setCurrentPage(dir === 'next'
      ? (currentPage !== countPages
          ? currentPage + 1
          : currentPage)
      : (currentPage !== 1
          ? currentPage - 1
          : currentPage)
    )
  }

  return (
    <div className="catalog-list">
      {currentProductPageOfProducts.length !== 0
        ? (
        <>
          <div className="catalog-list-wrapper">
            {currentProductPageOfProducts.map((product, index) => {
              return <Card
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            })}
          </div>
          <div className="pagination">
            <ul className="page-list">
              <li className="page-item page-item-nav" onClick={() => { pageNavigate('prev') }} >Назад</li>
              <Pagination
                currentPage={currentPage}
                productsPerPage={productsPerPage}
                totalProducts={filteredList.length}
                paginate={paginate}
              />
              <li className="page-item page-item-nav" onClick={() => { pageNavigate('next') }} >Вперёд</li>
            </ul>
          </div>
        </>)
        : (
        <>
          <div className="catalog-list-empty">
            <h2 className="empty-message">Ничего не найдено</h2>
          </div>
        </>)
      }
    </div>
  )
}

export default CatalogList
