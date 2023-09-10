import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../images/logo.svg'

function Logo (): JSX.Element {
  return (
    <Link className="header__logo" to="/">
      <img src={LogoImage as string} alt="Balloon Logo" />
    </Link>
  )
}

export default Logo
