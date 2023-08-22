import Filter from "./Filter/Filter";
import CatalogListCards from "./CatalogListCards";
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
