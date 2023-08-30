import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home/Home'
import Catalog from './Catalog/Catalog'
import ProductView from './ProductView/ProductView'
import Page404 from './Page404/Page404'
import Cart from './Cart/Cart'
import './Main.css'

function Main (): JSX.Element {
  return (
    <main className="main">
      <div className="main__container container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/" element={<Catalog />} />
          <Route path="/productview/:id" element={<ProductView />} />
          <Route path="/page404/" element={<Page404 />} />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
      </div>
    </main>
  )
}

export default Main
