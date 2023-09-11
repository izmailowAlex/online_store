import React from 'react'

import Button from '../../UI/Button/Button'
import './Page404.css'

function PageNotFound (): JSX.Element {
  return (
    <div className="page-not-found">
      <h1 className="page-not-found__number">404</h1>
      <h2 className="page-not-found__text">Товара не существует</h2>
      <Button className="page-not-found__button" to="/catalog">
        В Каталог
      </Button>
    </div>
  )
}

export default PageNotFound
