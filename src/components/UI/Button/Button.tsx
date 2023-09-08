import React from 'react'
import { Link } from 'react-router-dom'

import type { IButtonProps } from '../../../interfaces/interface'
import './Button.css'

function Button ({ children, className, disabled, to, onClick }: IButtonProps): JSX.Element {
  let classname = 'button'

  if (className !== undefined) {
    classname = 'button ' + `${String(className)}`
  }

  return (
    <>
      {to !== undefined
        ? (<Link className={classname} onClick={onClick} to={to}>
          {children}
        </Link>)
        : (<button className={classname} onClick={onClick} disabled={disabled}>
          {children}
        </button>)
      }
    </>
  )
}

export default Button
