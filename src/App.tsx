import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContext } from './context/context'
import { IProduct, ICartOrders } from './interfaces/interface'
import useLocalStorage from './hooks/useLocalStorage'
import data from './data'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

function App (): JSX.Element {
  const [productsLibrary] = useState<IProduct[]>(data)
  const [filteredList, setFilteredList] = useState<IProduct[]>(productsLibrary)
  const [searchList, setSearchList] = useState<IProduct[]>(productsLibrary)
  const [cartOrders, setCartOrders] = useLocalStorage([], 'cartOrders')
  const [orderProductList, setOrderProductList] = useState<ICartOrders[]>([])
  const [price, setPrice] = useState<number>(0)

  useEffect(() => {
    const tmpCartOrders: ICartOrders[] = []
    cartOrders.forEach((item) => {
      if (String(item.isOrder) === 'true') {
        tmpCartOrders.push(item)
      }
    })
    setOrderProductList(tmpCartOrders)
  }, [cartOrders])

  return (
    <div className="balloon">
      <AppContext.Provider
        value={{
          productsLibrary,
          filteredList,
          setFilteredList,
          searchList,
          setSearchList,
          cartOrders,
          setCartOrders,
          orderProductList,
          price,
          setPrice
        }}>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </AppContext.Provider>
      <span className="balloon__circle balloon_red"></span>
      <span className="balloon__circle balloon_yellow"></span>
      <span className="balloon__circle balloon_blue"></span>
    </div>
  )
}

export default App
