import React, { useEffect } from 'react'
import { ICheckboxProps } from '../../../interfaces/interface'

import './Checkbox.css'

function Checkbox ({
  id,
  children,
  className,
  isOrder,
  onChange,
  changeCartOrdersContain
}: ICheckboxProps): JSX.Element {
  let classname = 'checkbox'

  if (className !== undefined) {
    classname = `checkbox ${String(className)}`
  }
  useEffect(() => {
    if (changeCartOrdersContain !== undefined && id !== undefined) {
      changeCartOrdersContain(id)
    }
  }, [isOrder])

  return (
    <label className={classname}>
      <input className="checkbox__input" type="checkbox" onChange={onChange} checked={isOrder} />
      <span className="checkbox__wrapper">
        <span className="checkbox__icon">
          <svg className="checkbox__svg">
            <use href="#check"></use>
          </svg>
        </span>
        <span className="checkbox__label">{children}</span>
      </span>
    </label>
  )
}

export default Checkbox
