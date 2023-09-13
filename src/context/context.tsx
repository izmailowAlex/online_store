import React from 'react'
import { IAppContext } from '../interfaces/interface'

export const AppContext = React.createContext<IAppContext>({
  productsLibrary: [],
  filteredList: [],
  setFilteredList: () => undefined,
  searchList: [],
  setSearchList: () => undefined,
  cartOrders: [],
  setCartOrders: () => undefined,
  price: 0,
  setPrice: () => undefined
})
