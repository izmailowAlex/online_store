import Dualslider from "../UI/DualSlider/DualSlider";
import Counter from "../UI/Counter/Counter";
import Checkbox from "../UI/Checkbox/Checkbox";
import './Catalog.css';

function Catalog() {
  return (
    <div className="main-catalog">
      <h2 className="main-catalog__title">Каталог шаров</h2>
      <div className="main-catalog-contain">
        <div className="main-catalog-filter filter">
          <div className="filter">
            <div className="filter-category">
              <span className="filter-category__title">Price, $</span>
              <span className="filter-category-vector"></span>
            </div>
            <Dualslider min={0} max={1000} />
          </div>
          <div className="filter">
            <div className="filter-category">
              <span className="filter-category__title">Categories</span>
              <span className="filter-category-vector active"></span>
            </div>
            <ul className="filter-list">
              <li className="list-item">
                <Checkbox>Bublebox</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Composition</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Room</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Birthday</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Anniversary</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Wedding</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Popular</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Banket</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Meeting</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Places</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Number</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Sphere</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Chrome</Checkbox>
              </li>
            </ul>
          </div>
          <div className="filter">
            <div className="filter-category">
              <span className="filter-category__title">Materials</span>
              <span className="filter-category-vector"></span>
            </div>
            <ul className="filter-list">
              <li className="list-item">
                <Checkbox>Latex</Checkbox>
              </li>
              <li className="list-item">
                <Checkbox>Phoil</Checkbox>
              </li>
            </ul>
          </div>
          <div className="filter">
            <div className="filter-category">
              <span className="filter-category__title">Colors</span>
              <span className="filter-category-vector"></span>
            </div>
            <ul className="filter-list-colors">
              <li className="filter-colors-item">
                <Checkbox className="checkbox_colors checkbox_blue"></Checkbox>
              </li>
              <li className="filter-colors-item">
                <Checkbox className="checkbox_colors checkbox_red"></Checkbox>
              </li>
              <li className="filter-colors-item">
                <Checkbox className="checkbox_colors checkbox_green"></Checkbox>
              </li>
              <li className="filter-colors-item">
                <Checkbox className="checkbox_colors checkbox_yellow"></Checkbox>
              </li>
              <li className="filter-colors-item">
                <Checkbox className="checkbox_colors checkbox_purple"></Checkbox>
              </li>
              <li className="filter-colors-item">
                <Checkbox className="checkbox_colors checkbox_black"></Checkbox>
              </li>
              <li className="filter-colors-item">
                <Checkbox className="checkbox_colors checkbox_grey"></Checkbox>
              </li>
              <li className="filter-colors-item" >
                <Checkbox className="checkbox_colors checkbox_white"></Checkbox>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-catalog-list list">
          <div className="list-card">
            <div className="list-card-image">
              <img
                className="list-card-image__img"
                src="../images/cat.png"
                alt=""
              />
            </div>
            <div className="list-card-description">
              Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.
            </div>
            <div className="list-card-bottom">
              <h3 className="list-card-bottom-price">$ 5</h3>
              <Counter quantity={20} />
              <button className="list-card__button"></button>
            </div>
          </div>
          <div className="list-card">
            <div className="list-card-image">
              <img
                className="list-card_image__img"
                src="../images/cat.png"
                alt=""
              />
            </div>
            <div className="list-card-description">
              Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.
            </div>
            <div className="list-card-bottom">
              <span className="list-card-bottom-price">$ 5</span>
              <Counter quantity={20} />
              <button className="list-card__button"></button>
            </div>
          </div>
          <div className="list-card">
            <div className="list-card-image">
              <img
                className="list-card-image__img"
                src="../images/cat.png"
                alt=""
              />
            </div>
            <div className="list-card-description">
              Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.
            </div>
            <div className="list-card-bottom">
              <span className="list-card-bottom-price">$ 5</span>
              <Counter quantity={20} />
              <button className="list-card__button"></button>
            </div>
          </div>
          <div className="list-card">
            <div className="list-card-image">
              <img
                className="list-card-image__img"
                src="../images/cat.png"
                alt=""
              />
            </div>
            <div className="list-card-description">
              Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.
            </div>
            <div className="list-card-bottom">
              <span className="list-card-bottom-price">$ 5</span>
              <Counter quantity={20} />
              <button className="list-card__button"></button>
            </div>
          </div>
          <div className="list-card">
            <div className="list-card-image">
              <img
                className="list-card-image__img"
                src="../images/cat.png"
                alt=""
              />
            </div>
            <div className="list-card-description">
              Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.
            </div>
            <div className="list-card-bottom">
              <span className="list-card-bottom-price">$ 5</span>
              <Counter quantity={20} />
              <button className="list-card__button"></button>
            </div>
          </div>
          <div className="list-card">
            <div className="list-card-image">
              <img
                className="list-card-image__img"
                src="../images/cat.png"
                alt=""
              />
            </div>
            <div className="list-card-description">
              Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.
            </div>
            <div className="list-card-bottom">
              <span className="list-card-bottom-price">$ 5</span>
              <Counter quantity={20} />
              <button className="list-card__button"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
