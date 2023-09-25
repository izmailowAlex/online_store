import React from 'react'
import { IFilterAnchor } from '../../../interfaces/interface'

function FilterAnchor ({ isFilter, setFilter, setApplyDelayFilter }: IFilterAnchor): JSX.Element {
  function handleChangeFilterStatus (): void {
    const tmpStatus: boolean = isFilter
    setFilter(!tmpStatus)
    setApplyDelayFilter(!tmpStatus)
  }
  return (
    <>
      <div className="filter-anchor-wrapper">
        <button className="filter-anchor" onClick={handleChangeFilterStatus}>{String(isFilter) !== 'true' ? 'Фильтр' : 'Свернуть'}</button>
      </div>
    </>
  )
}

export default FilterAnchor
