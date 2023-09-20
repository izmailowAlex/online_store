import React from 'react'
import Filter from '../Filter/Filter'
import CatalogList from '../CatalogList/CatalogList'
import './Catalog.css'

function Catalog (): JSX.Element {
  return (
    <>
      <div className="main-catalog">
        <h2 className="main-catalog__title">Каталог шаров</h2>
        <div className="main-catalog-contain">
          <Filter />
          <CatalogList />
        </div>
      </div>
    </>
  )
}

export default Catalog
