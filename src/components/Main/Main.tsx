import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from './Home/Home'
import Catalog from './Catalog/Catalog'
import ProductView from './ProductView/ProductView'
import Page404 from './PagesError/Page404'
import PageNotFound from './PagesError/PageNotFound'
import Cart from './Cart/Cart'
import './Main.css'

function Main (): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="productview/:id" element={<ProductView />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/page404" />} />
      </Route>
    </Routes>
  )
}

export default Main
