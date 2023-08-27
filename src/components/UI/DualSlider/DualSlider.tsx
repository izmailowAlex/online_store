import React, { useState, useRef, useCallback, useEffect } from 'react'
import { IDualslider } from '../../../interfaces/interface'

import './DualSlider.css'
import Input from '../Input/Input'

function Dualslider ({ min, max }: IDualslider): JSX.Element {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const range = useRef<HTMLDivElement>(null)

  const getPercent = useCallback(
    (value: number) => {
      return Math.round(((value - min) / (max - min)) * 100)
    },
    [min, max]
  )

  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxVal)

    const currentElem = range.current

    if (currentElem !== null) {
      currentElem.style.left = `${minPercent}%`
      currentElem.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, maxVal])

  const changeMinValHandler = (value: number): void => {
    if (value < min || value > max) {
      value = minVal
    }
    if (value > maxVal) {
      setMaxVal(value)
    }
    setMinVal(value)
  }

  const changeMaxValHandler = (value: number): void => {
    if (value < min || value > max) {
      value = maxVal
    }
    if (value < minVal) {
      setMinVal(value)
    }
    setMaxVal(value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const eventTarget = event.target as HTMLInputElement
    if (event.key === 'Enter') {
      eventTarget.blur()
    }
  }

  return (
    <div className="dualslider">
      <input
        className={
          minVal >= max - 10
            ? 'dualslider__thumb dualslider__thumb_upper'
            : 'dualslider__thumb dualslider__thumb_left'
        }
        type="range"
        min={min}
        max={max}
        value={String(minVal)}
        onChange={(event) => {
          const value = Math.min(+event.target.value, +maxVal)
          changeMinValHandler(value)
        }}
      />
      <input
        className="dualslider__thumb dualslider__thumb_right"
        type="range"
        min={min}
        max={max}
        value={String(maxVal)}
        onChange={(event) => {
          const value = Math.max(+event.target.value, +minVal)
          changeMaxValHandler(value)
        }}
      />
      <div className="dualslider__wrapper">
        <div className="dualslider__track"></div>
        <div className="dualslider__range" ref={range}></div>
        <Input
          className="dualslider__min-value"
          value={String(minVal)}
          label={'от'}
          maxlength={String(max).length}
          onFocus={(event) => {
            event.target.select()
          }}
          onChange={(event) => {
            changeMinValHandler(Number(event.target.value))
          }}
          onKeyDown={(event) => {
            handleKeyDown(event)
          }}
        />
        <Input
          className="dualslider__max-value"
          value={String(maxVal)}
          label={'до'}
          maxlength={String(max).length}
          onFocus={(event) => {
            event.target.select()
          }}
          onChange={(event) => {
            changeMaxValHandler(Number(event.target.value))
          }}
          onKeyDown={(event) => {
            handleKeyDown(event)
          }}
        />
      </div>
    </div>
  )
}

export default Dualslider
