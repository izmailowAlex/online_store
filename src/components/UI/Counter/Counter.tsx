import React, { useState, useRef, useEffect } from 'react'
import { ICounterProps } from '../../../interfaces/interface'
import './Counter.css'

function Counter ({ id, count, min, balance, setBalance, changeCartOrdersContain }: ICounterProps): JSX.Element {
  const [currentVal, setCurrentVal] = useState(count)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    changeCartOrdersContain(id, currentVal, balance)
  }, [currentVal])

  function increment (): void {
    let value: number = currentVal
    value = value + 1
    if (isRange(value)) {
      setCurrentVal(value)
      if (setBalance !== undefined) {
        setBalance(balance - 1)
      }
    }
  }

  function decrement (): void {
    let value: number = currentVal
    value = value - 1
    if (isRange(value)) {
      setCurrentVal(value)
      if (setBalance !== undefined) {
        setBalance(balance + 1)
      }
    }
  }

  function focusOutEventHandler (): void {
    let value = 0
    if (inputRef.current !== null) {
      if (typeof inputRef.current.value === 'string') {
        value = +inputRef.current.value
      } else {
        value = 0
      }
    }
    if (isRange(value)) {
      setCurrentVal(value)
    }
  }

  function focusInEventHandler (): void {
    if (inputRef.current !== null) {
      inputRef.current.select()
    }
  }

  function isRange (value: number): boolean {
    return value >= min && value <= balance
  }

  return (
    <div className="counter">
      <button onClick={decrement} className="counter__button-minus">
        <svg className="counter__svg">
          <use href="#minus"></use>
        </svg>
      </button>
      <input
        className="counter__value"
        type="text"
        ref={inputRef}
        value={currentVal}
        onChange={focusOutEventHandler}
        onFocus={focusInEventHandler}
      />
      <button onClick={increment} className="counter__button-plus">
        <svg className="counter__svg">
          <use href="#plus"></use>
        </svg>
      </button>
    </div>
  )
}

export default Counter
