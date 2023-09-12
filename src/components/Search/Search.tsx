import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import './Search.css'

function Search (): JSX.Element {
  const { productsLibrary, setFilteredList } = useContext(AppContext)
  const [value, setValue] = useState('')
  useEffect(() => {
    applyFilter()
  }, [value])
  function applyFilter (): void {
    const searchFilteredProducts = productsLibrary.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredList([...searchFilteredProducts])
  }
  return (
    <>
      <div className="search">
        <input className="search__input" type="text" onChange={(event) => { setValue(event.target.value) }} />
      </div>
    </>
  )
}

export default Search
