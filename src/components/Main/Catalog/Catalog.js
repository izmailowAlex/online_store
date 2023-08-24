import React, { useState, useContext } from "react";
import { AppContext } from "../../../App";
import Filter from "./Filter/Filter";
import CatalogListCards from "./CatalogListCards";
import "./Catalog.css";

export const CatalogContext = React.createContext();

function Catalog() {
  const { productsLibrary } = useContext(AppContext);
  const [filteredList, setFilteredList] = useState(productsLibrary);

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
  );
}

export default Catalog;
