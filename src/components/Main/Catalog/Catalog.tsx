import React, { useState } from 'react'
import Filter from '../Filter/Filter'
import CatalogList from '../CatalogList/CatalogList'
import './Catalog.css'

function Catalog (): JSX.Element {
  const [isFilter, setFilter] = useState<boolean>(false)
  const overlayClassName = String(isFilter) !== 'true' ? '' : ' visible'

  function handleOverlayClick (): void {
    setFilter(false)
  }

  return (
    <>
      <div className="main-catalog">
        <h2 className="main-catalog__title">Каталог шаров</h2>
        <div className="main-catalog-contain">
          <Filter isFilter={isFilter} setFilter={setFilter} />
          <CatalogList />
          <div className={`filter-overlay${overlayClassName}`} onClick={handleOverlayClick}></div>
        </div>
      </div>
    </>
  )
}

export default Catalog
