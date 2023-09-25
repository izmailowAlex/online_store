import React from 'react'
import { IInputProps } from '../../../interfaces/interface'

import './Input.css'

function Input (
  {
    id,
    className,
    name,
    value,
    placeholder,
    label,
    error,
    errorMessage,
    success,
    successMessage,
    maxlength,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
  }: IInputProps
): JSX.Element {
  let classname = 'input'
  if (className !== undefined) {
    classname = 'input ' + className
  }
  if (label !== undefined) {
    classname = classname + ' input_labeled'
  }
  if (error === true) {
    classname = classname + ' input_error'
  }
  if (success === true) {
    classname = classname + ' input_success'
  }

  return (
    <div className={classname}>
      <input
        id={id}
        className="input__textbox"
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        maxLength={maxlength}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {label !== '' && <label className="input__label">{label}</label>}
      {error === true && <span className="input__message">{errorMessage}</span>}
      {success === true && <span className="input__message">{successMessage}</span>}
    </div>
  )
}

export default Input
