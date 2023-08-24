import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../App";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import DualSlider from "../../../UI/DualSlider/DualSlider";
import "./Filter.css";
import { CatalogContext } from "../Catalog";

function Filter() {
  const [currentindex, setCurrentIndex] = useState(0);
  const [allCategories, setAllCategories] = useState([]);
  const [allTypes, setAllTypes] = useState([]);
  const [allColors, setAllColors] = useState([]);

  useEffect(() => {
    if (productsLibrary && productsLibrary.length > 0) {
      let typesTmp = [];
      productsLibrary.forEach((item) => {
        typesTmp.push(item.type);
      });
      typesTmp = typesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1);
        return array.indexOf(item) === index;
      });
      setAllTypes(typesTmp);

      let categoriesTmp = [];
      productsLibrary.forEach((item) => {
        categoriesTmp.push(item.category);
      });
      categoriesTmp = categoriesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1);
        return array.indexOf(item) === index;
      });
      setAllCategories(categoriesTmp);

      let colorsTmp = [];
      productsLibrary.forEach((item) => {
        colorsTmp.push(item.color);
      });
      colorsTmp = colorsTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1);
        return array.indexOf(item) === index;
      });
      setAllColors(colorsTmp);
    }
  }, [currentindex, setCurrentIndex]);

  const { productsLibrary } = useContext(AppContext);
  const { setFilteredList } = useContext(CatalogContext);
  const [filters, setFilters] = useState({});

  function onChangeHandler(event, item, category) {
    const tempFilters = { ...filters };
    if (event.target.checked === true) {
      if (tempFilters[category]) {
        tempFilters[category].push(item);
      } else {
        tempFilters[category] = [item];
      }
    } else {
      tempFilters[category] = tempFilters[category].filter(
        (element) => element !== item
      );
      if (tempFilters[category].length === 0) {
        delete tempFilters[category];
      }
    }
    setFilters({ ...tempFilters });
  }

  function applyFilter() {
    const tempFilteredList = productsLibrary.filter((item) => {
      for (let key in filters) {
        if (!filters[key].includes(item[key])) {
          return false;
        }
      }
      return true;
    });
    setFilteredList([...tempFilteredList]);
  }

  useEffect(() => {
    applyFilter();
  }, [filters]);

  return (
    <div className="filter">
      <div className="filter-block">
        <div className="filter-category">
          <span className="filter-category__title">Price, Br</span>
          <span className="filter-category-vector"></span>
        </div>
        <DualSlider min={0} max={1000} />
      </div>
      <div className="filter-block">
        <div className="filter-category">
          <span className="filter-category__title">Categories</span>
          <span className="filter-category-vector active"></span>
        </div>
        <ul className="filter-list">
          {allCategories.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <Checkbox
                  onChange={(event) => onChangeHandler(event, item, "category")}
                >
                  {item}
                </Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter-block">
        <div className="filter-category">
          <span className="filter-category__title">Materials</span>
          <span className="filter-category-vector"></span>
        </div>
        <ul className="filter-list">
          {allTypes.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <Checkbox
                  onChange={(event) => onChangeHandler(event, item, "type")}
                >
                  {item}
                </Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter-block">
        <div className="filter-category">
          <span className="filter-category__title">Colors</span>
          <span className="filter-category-vector"></span>
        </div>
        <ul className="filter-list-colors">
          {allColors.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <Checkbox
                  className={`checkbox_colors checkbox_${item}`}
                  onChange={(event) => onChangeHandler(event, item, "color")}
                ></Checkbox>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
