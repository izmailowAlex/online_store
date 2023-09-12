import React, { useContext, useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../../App'
import './Search.css'

function Search (): JSX.Element {
  const location = useLocation()
  const { productsLibrary, setSearchList } = useContext(AppContext)
  const [value, setValue] = useState('')
  const [isSearch, setIsSearch] = useState(true)
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement | null>
  useEffect(() => {
    applyFilter()
  }, [value])
  function handleKeyDown (event: React.KeyboardEvent<HTMLInputElement>): void {
    if (event.key === 'Enter') {
      inputRef.current?.blur()
      setIsSearch(!isSearch)
    }
  }
  function focusToInputElem (): void {
    inputRef.current?.focus()
    setValue('')
    setIsSearch(false)
  }
  function applyFilter (): void {
    const searchFilteredProducts = productsLibrary.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase())
    })
    setSearchList([...searchFilteredProducts])
  }
  return (
    <>
      {location.pathname === '/catalog' && (
        <div className="search">
          <input
            ref={inputRef}
            className="search__input"
            value={value}
            type="text"
            onChange={(event) => { setValue(event.target.value) }}
            onKeyDown={(event) => { handleKeyDown(event) }}
            onBlur={() => { setIsSearch(!isSearch) }}
            onFocus={() => { setIsSearch(false) }}
          />
          {String(isSearch) !== 'false'
            ? (
            <>
              <span className="search-icon" onClick={focusToInputElem}>
                <svg className="icon__svg">
                  <use href="#search"></use>
                </svg>
              </span>
            </>)
            : (
            <></>)
          }
        </div>
      )}
    </>
  )
}

export default Search
