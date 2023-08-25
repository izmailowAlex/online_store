import React from 'react'
import { Link } from 'react-router-dom'

import './Button.css'
import type { IButtonProps } from '../../../interfaces/interface'

function Button ({ children, className, to, button, onClick }: IButtonProps): JSX.Element {
  let classname = 'button'

  if (className !== undefined) {
    classname = 'button ' + `${String(className)}`
  }

  return (
    <>
      {button !== undefined
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ? <button className={classname} onClick={onClick}>{children}</button>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        : <Link className={classname} onClick={onClick} to={to}>{children}</Link>
      }
    </>
  )
}

export default Button
