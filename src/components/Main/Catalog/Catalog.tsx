import React, { useState, useContext, } from 'react'
import { AppContext } from '../../../App'
import { ICatalogContext, IProduct } from '../../../interfaces/interface'
import Filter from './Filter/Filter'
import CatalogListCards from './CatalogListCards'
import './Catalog.css'

export const CatalogContext = React.createContext<ICatalogContext>({ filteredList: [], setFilteredList: () => undefined })

function Catalog (): JSX.Element {
  const { productsLibrary } = useContext(AppContext)
  const [filteredList, setFilteredList] = useState<IProduct[]>(productsLibrary)

  return (
    <div className="main-catalog">
      <h2 className="main-catalog__title">Каталог шаров</h2>
      <div className="main-catalog-contain">
        <CatalogContext.Provider value={{ filteredList, setFilteredList }}>
          <Filter />
          <CatalogListCards />
        </CatalogContext.Provider>
      </div>
    </div>
  )
}

export default Catalog
