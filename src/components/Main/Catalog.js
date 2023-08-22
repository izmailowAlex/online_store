import Filter from "./CatalogParts/Filter/Filter";
import CatalogListCards from "./CatalogParts/CatalogListCards";
import './Catalog.css';

function Catalog() {
  return (
    <div className="main-catalog">
      <h2 className="main-catalog__title">Каталог шаров</h2>
      <div className="main-catalog-contain">
        <Filter />
        <CatalogListCards />
      </div>
    </div>
  );
}

export default Catalog;
