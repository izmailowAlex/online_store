import React from 'react'

import Button from '../../UI/Button/Button'
import './Home.css'

function Home (): JSX.Element {
  return (
    <div className="home">
      <div className="home-image">
        <img
          className="home-image__img"
          src="../images/balloon-cover.jpg"
          alt="Balloons"
        />
      </div>
      <div className="home-content">
        <h1 className="home__title">Воздушные шары</h1>
        <p className="home__description">
          Воздушные шары на любой праздник. Доставляйте радость с нами!
        </p>
        <Button className="home__button" to="/catalog">Смотреть каталог</Button>
      </div>
    </div>
  )
}

export default Home
