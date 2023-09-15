import React, { useState, useRef, useEffect } from 'react'
import { ICounterProps } from '../../../interfaces/interface'
import './Counter.css'

function Counter ({ id, count, min, balance, setBalance, changeCartOrdersContain }: ICounterProps): JSX.Element {
  const [mainBalance] = useState(balance + count)
  const [currentVal, setCurrentVal] = useState(count)
  const [isOver, setOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (balance === 0) {
      setOver(true)
    }
  }, [balance])
  useEffect(() => {
    changeCartOrdersContain(id, currentVal, balance)
  }, [currentVal])

  function increment (): void {
    if (String(isOver) === 'true') return
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
    if (String(isOver) === 'true' && balance === 0) {
      setOver(false)
    }
    let value: number = currentVal
    value = value - 1
    if (isRange(value)) {
      setCurrentVal(value)
      if (setBalance !== undefined) {
        setBalance(balance + 1)
      }
    }
  }

  function changeEventHandler (): void {
    let value = 0
    if (inputRef.current !== null) {
      value = +inputRef.current.value
      if (value !== +inputRef.current.value) return
      if (value > mainBalance) return
    }
    if (isRange(value)) {
      setCurrentVal(value)
    }
  }

  function focusOutEventHandler (): void {
    if (setBalance !== undefined) {
      switch (setBalance !== undefined) {
        case currentVal > mainBalance:
          setCurrentVal(mainBalance - balance)
          break
        default:
          setBalance(mainBalance - currentVal)
      }
    }
  }

  function focusInEventHandler (): void {
    if (inputRef.current !== null) {
      inputRef.current.select()
    }
  }

  function isRange (value: number): boolean {
    return value >= min
  }
  function handleKeyDown (event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      event.currentTarget.blur()
    }
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
        onChange={changeEventHandler}
        onFocus={focusInEventHandler}
        onKeyDown={(event) => { handleKeyDown(event) }}
        onBlur={focusOutEventHandler}
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
