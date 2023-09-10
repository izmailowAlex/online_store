import React from 'react'
import Nav from './Nav/Nav'
import Logo from '../Logo/Logo'
import Actions from './Actions/Actions'
import './Header.css'

function Header (): JSX.Element {
  return (
    <header className="header">
      <div className="header__container container">
        <Nav />
        <Logo />
        <Actions />
      </div>
    </header>
  )
}

export default Header
