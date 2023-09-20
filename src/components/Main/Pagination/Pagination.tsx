import React from 'react'
import { IPaginationProps } from '../../../interfaces/interface'
import './Pagination.css'

function Pagination ({ currentPage, productsPerPage, totalProducts, paginate }: IPaginationProps): JSX.Element {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <>
      {
        pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? 'page-item page-active' : 'page-item'} onClick={() => { paginate(number) }} >
            {number}
          </li>
        ))
      }
    </>
  )
}

export default Pagination
