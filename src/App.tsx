import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { IAppContext, IProduct, ICartOrdered } from './interfaces/interface'
import data from './data'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './App.css'

export const AppContext = React.createContext<IAppContext>({
  productsLibrary: [],
  cartOrders: [{ id: '' }],
  setCartOrders: () => undefined,
  cartOrderedArray: [],
  cartCount: 0,
  setCartCount: () => undefined
})

function App (): JSX.Element {
  const [productsLibrary] = useState<IProduct[]>(data)
  const [cartOrders, setCartOrders] = useState([] as ICartOrdered[])
  const [cartCount, setCartCount] = useState<number>(0)
  const cartOrderedArray: string[] = []

  useEffect(() => {
    setCartCount(cartOrders.length)
  }, [cartOrders])

  return (
    <div className="balloon">
      <AppContext.Provider value={{ productsLibrary, cartOrders, setCartOrders, cartOrderedArray, cartCount, setCartCount }}>
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
