import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContext } from './context/context'
import { IProduct } from './interfaces/interface'
import useLocalStorage from './hooks/useLocalStorage'
import data from './data'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

function App (): JSX.Element {
  const [productsLibrary, setProductsLibrary] = useState<IProduct[]>([])
  const [filteredList, setFilteredList] = useState<IProduct[]>(productsLibrary)
  const [searchList, setSearchList] = useState<IProduct[]>(productsLibrary)
  const [cartOrders, setCartOrders] = useLocalStorage([], 'cartOrders')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    storeData()
    const getProductsData = (): void => {
      setLoading(true)
      const response = localStorage.getItem('dataBalloons')
      if (response !== null) {
        setProductsLibrary(JSON.parse(response))
      }
      setLoading(false)
    }
    getProductsData()
  }, [])
  function storeData (): void {
    try {
      localStorage.setItem('dataBalloons', JSON.stringify(data))
    } catch (err) {
      console.log(err)
    }
  }

  if (String(loading) === 'true') {
    return (
      <div className="loading">
        <div className="loading-wrapper">
          <h2 className="loading__title">Loading...</h2>
          <p className="loading__text">Please, wait!</p>
        </div>
      </div>
    )
  }

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
          setCartOrders
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
