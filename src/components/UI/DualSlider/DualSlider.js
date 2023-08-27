import React, { useState, useRef, useCallback, useEffect } from 'react'
import './DualSlider.css'
import Input from '../Input/Input'

function Dualslider (/* eslint-disable react/prop-types */{ min, max }) {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const range = useRef(null)

  const getPercent = useCallback(
    (value) => {
      return Math.round(((value - min) / (max - min)) * 100)
    },
    [min, max]
  )

  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, maxVal])

  const changeMinValHandler = (value) => {
    if (value < min || value > max) {
      value = minVal
    }
    if (value > maxVal) {
      setMaxVal(value)
    }
    setMinVal(value)
  }

  const changeMaxValHandler = (value) => {
    if (value < min || value > max) {
      value = maxVal
    }
    if (value < minVal) {
      setMinVal(value)
    }
    setMaxVal(value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.target.blur()
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
          value={minVal}
          label={'от'}
          maxlength={String(max).length}
          onFocus={(event) => event.target.select()}
          onChange={(event) => changeMinValHandler(Number(event.target.value))}
          onKeyDown={(event) => handleKeyDown(event)}
        />
        <Input
          className="dualslider__max-value"
          value={String(maxVal)}
          label={'до'}
          maxlength={String(max).length}
          onFocus={(event) => event.target.select()}
          onChange={(event) => changeMaxValHandler(Number(event.target.value))}
          onKeyDown={(event) => handleKeyDown(event)}
        />
      </div>
    </div>
  )
}

export default Dualslider
