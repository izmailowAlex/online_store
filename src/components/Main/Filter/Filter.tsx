import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import { IProduct, IFilterCategories } from '../../../interfaces/interface'
import { AppContext } from '../../../context/context'
import Checkbox from '../../UI/Checkbox/Checkbox'
import DualSlider from '../../UI/DualSlider/DualSlider'
import FilterAnchor from '../FilterAnchor/FilterAnchor'
import './Filter.css'
import Button from '../../UI/Button/Button'

function Filter (): JSX.Element {
  const { productsLibrary, setFilteredList, searchList } = useContext(AppContext)
  const [allCategories, setAllCategories] = useState<string[]>([])
  const [allTypes, setAllTypes] = useState<string[]>([])
  const [allColors, setAllColors] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [minAmount, setMinAmount] = useState(0)
  const [maxAmount, setMaxAmount] = useState(10000)
  const [currentindex, setCurrentIndex] = useState(0)
  const [filters, setFilters] = useState<IFilterCategories>({})
  const [isFilter, setFilter] = useState<boolean>(false)
  const [applyDelayFilter, setApplyDelayFilter] = useState<boolean>(false)
  const checkboxes = document.querySelectorAll('[type="checkbox"]')
  let className = ''

  if (String(isFilter) === 'true') {
    className = 'active'
  } else {
    className = ''
  }
  let classname = 'filter'

  if (className !== undefined && className !== '') {
    classname = `filter ${String(className)}`
  }

  useEffect(() => {
    if (productsLibrary.length > 0) {
      let typesTmp: string[] = []
      let categoriesTmp: string[] = []
      let colorsTmp: string[] = []
      productsLibrary.forEach((item: IProduct) => {
        typesTmp.push(item.type)
        categoriesTmp.push(item.category)
        colorsTmp.push(item.color)
      })
      typesTmp = typesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      categoriesTmp = categoriesTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      colorsTmp = colorsTmp.filter((item, index, array) => {
        setCurrentIndex(index + 1)
        return array.indexOf(item) === index
      })
      setAllTypes(typesTmp)
      setAllCategories(categoriesTmp)
      setAllColors(colorsTmp)
    }
  }, [productsLibrary, currentindex])

  useEffect(() => {
    if (String(applyDelayFilter) !== 'true') {
      applyFilter()
    }
  }, [filters, minPrice, maxPrice, minAmount, maxAmount, searchList])

  function onChangeHandler (event: ChangeEvent<HTMLInputElement>, item: string, key: keyof IFilterCategories): void {
    const tempFilters: IFilterCategories = { ...filters }
    if (event.target.checked) {
      if (tempFilters[key] !== undefined) {
        tempFilters[key]?.push(item)
      } else {
        tempFilters[key] = [item]
      }
    } else {
      tempFilters[key] = tempFilters[key]?.filter(
        (element: string) => element !== item
      )
      if (tempFilters[key]?.length === 0) {
        delete tempFilters[key]
      }
    }
    setFilters({ ...tempFilters })
  }

  function onChangeHandlerSlider (
    id: string,
    targetElem: HTMLInputElement,
    max: number,
    value: number,
    limit: number
  ): void {
    let minPriceValue = minPrice
    let maxPriceValue = maxPrice
    let minAmountValue = minAmount
    let maxAmountValue = maxAmount
    switch (value !== undefined) {
      case value > limit && id === 'price':
        maxPriceValue = max
        break
      case value > limit && id === 'amount':
        maxAmountValue = max
        break
      case value < minPriceValue &&
      targetElem.parentElement?.className === 'input dualslider__max-value input_labeled' && id === 'price':
        minPriceValue = value
        maxPriceValue = value
        break
      case value < minAmountValue &&
      targetElem.parentElement?.className === 'input dualslider__max-value input_labeled' && id === 'amount':
        minAmountValue = value
        maxAmountValue = value
        break
      case value > maxPriceValue &&
      targetElem.parentElement?.className === 'input dualslider__min-value input_labeled' && id === 'price':
        minPriceValue = value
        maxPriceValue = value
        break
      case value > maxAmountValue &&
      targetElem.parentElement?.className === 'input dualslider__min-value input_labeled' && id === 'amount':
        minAmountValue = value
        maxAmountValue = value
        break
      case (targetElem.className === 'dualslider__thumb dualslider__thumb_left' ||
      targetElem.parentElement?.className === 'input dualslider__min-value input_labeled') &&
      id === 'price':
        minPriceValue = value
        break
      case (targetElem.className === 'dualslider__thumb dualslider__thumb_left' ||
      targetElem.parentElement?.className === 'input dualslider__min-value input_labeled') &&
      id === 'amount':
        minAmountValue = value
        break
      case (targetElem.className === 'dualslider__thumb dualslider__thumb_right' ||
      targetElem.parentElement?.className === 'input dualslider__max-value input_labeled') &&
      id === 'price':
        maxPriceValue = value
        break
      case (targetElem.className === 'dualslider__thumb dualslider__thumb_right' ||
      targetElem.parentElement?.className === 'input dualslider__max-value input_labeled') &&
      id === 'amount':
        maxAmountValue = value
        break
    }
    setMinPrice(minPriceValue)
    setMaxPrice(maxPriceValue)
    setMinAmount(minAmountValue)
    setMaxAmount(maxAmountValue)
  }

  function applyFilter (): void {
    const tempFilteredList = searchList.filter((item) => {
      let key: keyof IFilterCategories
      for (key in filters) {
        const includes = filters[key]?.includes(item[key])
        if (includes === false) {
          return false
        }
      }
      if (item.price >= minPrice && item.price <= maxPrice && item.max >= minAmount && item.max <= maxAmount) {
        return true
      } else return false
    })
    setFilteredList([...tempFilteredList])
  }

  function handleResetFilter (): void {
    setApplyDelayFilter(true)
    setFilters({})
    setMinPrice(0)
    setMaxPrice(1000)
    setMinAmount(0)
    setMaxAmount(10000)
    setFilteredList([...productsLibrary])
    Array.from(checkboxes).forEach((item) => {
      const inp = item as HTMLInputElement
      inp.checked = false
    })
  }

  return (
    <div className={classname}>
      <FilterAnchor isFilter={isFilter} setFilter={setFilter} setApplyDelayFilter={setApplyDelayFilter} />
      <div className="filter-block">
        <h3 className="filter-category__title">Категория</h3>
        <ul className="filter-list">
          {allCategories.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <Checkbox
                  onChange={(event) => { onChangeHandler(event, item, 'category') }}
                >
                  {item}
                </Checkbox>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="filter-block">
        <h3 className="filter-category__title">Материал</h3>
        <ul className="filter-list">
          {allTypes.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <Checkbox
                  onChange={(event) => { onChangeHandler(event, item, 'type') }}
                >
                  {item}
                </Checkbox>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="filter-block">
        <h3 className="filter-category__title">Цвет</h3>
        <ul className="filter-list-colors">
          {allColors.map((item, index) => {
            return (
              <li key={index} className="list-item">
                <Checkbox
                  className={`checkbox_colors checkbox_${item}`}
                  onChange={(event) => { onChangeHandler(event, item, 'color') }}
                ></Checkbox>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="filter__block">
        <div className="filter-category__slider-title">Цена, Br</div>
        <DualSlider
          id={'price'}
          min={0}
          max={1000}
          minVal={minPrice}
          setMinVal={setMinPrice}
          maxVal={maxPrice}
          setMaxVal={setMaxPrice}
          onChangeHandlerSlider={onChangeHandlerSlider}
        />
      </div>
      <div className="filter__block">
        <div className="filter-category__slider-title">Количество, шт</div>
        <DualSlider
          id={'amount'}
          min={0}
          max={10000}
          minVal={minAmount}
          setMinVal={setMinAmount}
          maxVal={maxAmount}
          setMaxVal={setMaxAmount}
          onChangeHandlerSlider={onChangeHandlerSlider}
        />
      </div>
      <Button className='filter-block__btn btn-apply' onClick={() => {
        applyFilter()
      }}>
        Применить
      </Button>
      <Button className='filter-block__btn btn-reset' onClick={() => {
        handleResetFilter()
        setApplyDelayFilter(true)
      }}>
        Сбросить
      </Button>
    </div>
  )
}

export default Filter
