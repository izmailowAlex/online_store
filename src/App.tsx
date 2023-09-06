import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { IAppContext, IProduct } from './interfaces/interface'
import useLocalStorage from './hooks/useLocalStorage'
import data from './data'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

export const AppContext = React.createContext<IAppContext>({
  productsLibrary: [],
  cartOrders: [],
  setCartOrders: () => undefined,
  cartCount: 0,
  setCartCount: () => undefined
})

function App (): JSX.Element {
  const [productsLibrary] = useState<IProduct[]>(data)
  const [cartOrders, setCartOrders] = useLocalStorage([], 'cartOrders')
  const [cartCount, setCartCount] = useState<number>(0)

  useEffect(() => {
    console.log(cartOrders)
    setCartCount(cartOrders.length)
  }, [cartOrders])

  return (
    <div className="balloon">
      <AppContext.Provider
        value={{
          productsLibrary,
          cartOrders,
          setCartOrders,
          cartCount,
          setCartCount
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
