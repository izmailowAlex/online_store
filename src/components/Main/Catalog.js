function Catalog() {
    return (
      <div className="main__catalog">
        <h2 className="main__catalog-title">Каталог шаров</h2>
        <div className="main__catalog-contain">
            <div className="main__catalog-filter filter">
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Price, $ </span>
                        <span className="filter__block_category-vector"></span>
                    </div>
                    <input className="filter__block_dual-slide" type="range"></input>
                    <div className="filter__block_wrapper">
                        <input className="filter__block-input" type="text" placeholder="от 100"></input>
                        <input className="filter__block-input" type="text" placeholder="до 1000"></input>
                    </div>
                </div>
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Categories </span>
                        <span className="filter__block_category-vector active"></span>
                    </div>
                    <div className="filter__block_list">
                        <div className="list__item">
                            <input id="bublebox" type="checkbox"></input>
                            <label htmlFor="bublebox">Bublebox</label>
                        </div>
                        <div className="list__item">
                            <input id="composition" type="checkbox"></input>
                            <label htmlFor="composition">Composition</label>
                        </div>
                        <div className="list__item">
                            <input id="room" type="checkbox"></input>
                            <label htmlFor="room">Room</label>
                        </div>
                        <div className="list__item">
                            <input id="birthday" type="checkbox"></input>
                            <label htmlFor="birthday">Birthday</label>
                        </div>
                        <div className="list__item">
                            <input id="anniversary" type="checkbox"></input>
                            <label htmlFor="anniversary">Anniversary</label>
                        </div>
                        <div className="list__item">
                            <input id="wedding" type="checkbox"></input>
                            <label htmlFor="wedding">Wedding</label>
                        </div>
                        <div className="list__item">
                            <input id="popular" type="checkbox"></input>
                            <label htmlFor="popular">Popular</label>
                        </div>
                        <div className="list__item">
                            <input id="banket" type="checkbox"></input>
                            <label htmlFor="banket">Banket</label>
                        </div>
                        <div className="list__item">
                            <input id="meeting" type="checkbox"></input>
                            <label htmlFor="meeting">Meeting</label>
                        </div>
                        <div className="list__item">
                            <input id="places" type="checkbox"></input>
                            <label htmlFor="places">Places</label>
                        </div>
                        <div className="list__item">
                            <input id="Number" type="checkbox"></input>
                            <label htmlFor="Number">Number</label>
                        </div>
                        <div className="list__item">
                            <input id="sphere" type="checkbox"></input>
                            <label htmlFor="sphere">Sphere</label>
                        </div>
                        <div className="list__item">
                            <input id="chrome" type="checkbox"></input>
                            <label htmlFor="chrome">Chrome</label>
                        </div>
                    </div>
                </div>
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Materials </span>
                        <span className="filter__block_category-vector"></span>
                    </div>
                    <div className="filter__block_list">
                        <div className="list__item">
                            <input id="latex" type="checkbox"></input>
                            <label htmlFor="latex">Latex</label>
                        </div>
                        <div className="list__item">
                            <input id="phoil" type="checkbox"></input>
                            <label htmlFor="phoil">Phoil</label>
                        </div>
                    </div>
                </div>
                <div className="filter__block">
                    <div className="filter__block_category">
                        <span className="filter__block_category-title">Colors </span>
                        <span className="filter__block_category-vector"></span>
                    </div>
                    <div className="filter__block_list-colors">
                        <div className="colors__input input-blue" name="blue" type="checkbox"></div>
                        <div className="colors__input input-red" name="red" type="checkbox"></div>
                        <div className="colors__input input-green" name="green" type="checkbox"></div>
                        <div className="colors__input input-yellow" name="yellow" type="checkbox"></div>
                        <div className="colors__input input-purple" name="purple" type="checkbox"></div>
                        <div className="colors__input input-black" name="black" type="checkbox"></div>
                        <div className="colors__input input-grey" name="gray" type="checkbox"></div>
                        <div className="colors__input input-white" name="white" type="checkbox"></div>
                    </div>
                </div>
            </div>
            <div className="main__catalog_list list">
                <div className="list__card">
                    <div className="list__card_image">
                        <img className="list__card_image-img" src="../images/cat.png" alt=""/>
                    </div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <span className="list__card_bottom-count">
                            <button className="count-minus">-</button>
                            <span className="count">20</span>
                            <button className="count-plus">+</button>
                        </span>
                        <button className="list__cart-button"></button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image">
                        <img className="list__card_image-img" src="../images/cat.png" alt=""/>
                    </div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <span className="list__card_bottom-count">
                            <button className="count-minus">-</button>
                            <span className="count">20</span>
                            <button className="count-plus">+</button>
                        </span>
                        <button className="list__cart-button"></button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image">
                        <img className="list__card_image-img" src="../images/cat.png" alt=""/>
                    </div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <span className="list__card_bottom-count">
                            <button className="count-minus">-</button>
                            <span className="count">20</span>
                            <button className="count-plus">+</button>
                        </span>
                        <button className="list__cart-button"></button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image">
                        <img className="list__card_image-img" src="../images/cat.png" alt=""/>
                    </div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <span className="list__card_bottom-count">
                            <button className="count-minus">-</button>
                            <span className="count">20</span>
                            <button className="count-plus">+</button>
                        </span>
                        <button className="list__cart-button"></button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image">
                        <img className="list__card_image-img" src="../images/cat.png" alt=""/>
                    </div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <span className="list__card_bottom-count">
                            <button className="count-minus">-</button>
                            <span className="count">20</span>
                            <button className="count-plus">+</button>
                        </span>
                        <button className="list__cart-button"></button>
                    </div>
                </div>
                <div className="list__card">
                    <div className="list__card_image">
                        <img className="list__card_image-img" src="../images/cat.png" alt=""/>
                    </div>
                    <div className="list__card_description">Шар (22''/56 см) Фигура, Крутой Кот, 1 шт.</div>
                    <div className="list__card_bottom">
                        <span className="list__card_bottom-price">$ 5</span>
                        <span className="list__card_bottom-count">
                            <button className="count-minus">-</button>
                            <span className="count">20</span>
                            <button className="count-plus">+</button>
                        </span>
                        <button className="list__cart-button"></button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
  
export default Catalog;