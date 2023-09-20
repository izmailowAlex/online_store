import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../../images/logo.svg'

function Logo (): JSX.Element {
  return (
    <Link className="header-logo" to="/">
      <img className="header-logo__img" src={LogoImage as string} alt="Balloon Logo" />
    </Link>
  )
}

export default Logo
