import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from './Home/Home'
import Catalog from './Catalog/Catalog'
import ProductView from './ProductView/ProductView'
import Page404 from './Page404/Page404'
import Cart from './Cart/Cart'
import './Main.css'

function Main (): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="catalog/" element={<Catalog />} />
        <Route path="productview/:id" element={<ProductView />} />
        <Route path="*" element={<Page404 />} />
        <Route path="cart/" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default Main
