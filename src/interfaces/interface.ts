import React, {
  MouseEvent,
  ChangeEvent,
  FocusEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { To } from 'react-router-dom'

export interface ICheckboxProps {
  id?: string
  children?: string | undefined
  className?: string | undefined
  isOrder?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  changeCartOrdersContain?: (id: string, currentVal?: number) => void
}

export type Callback<T> = (data?: T) => void

export interface IButtonProps {
  children: string
  className?: string
  disabled?: boolean
  to?: To
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export interface ICounterProps {
  id: string
  count: number
  min: number
  balance: number
  setBalance?: Dispatch<SetStateAction<number>>
  changeCartOrdersContain: (
    id: string,
    currentVal: number,
    balance: number,
    isOrder?: boolean
  ) => void
}

export interface ICardProps {
  product: IProduct
  handleAddToCart: (
    productID: string,
    title: string,
    image: string,
    price: number,
    min: number,
    max: number,
    val: number
  ) => void
}

export interface ICartOrders {
  id: string
  title: string
  image: string
  price: number
  min: number
  max: number
  order: number
  isOrder: boolean
  isCart: boolean
}

export interface IProduct {
  id: string
  title: string
  image: string
  count: number
  min: number
  max: number
  price: number
  instock: boolean
  discount: number
  category: string
  type: string
  color: string
  size: string
  producer: string
  country: string
  description: string
}

export interface IProductProps {
  id: string
  image: string
  title: string
  price: number
  count: number
  min: number
  max: number
  istatusOrder: boolean
  setCheckedAllProducts: Dispatch<SetStateAction<boolean>>
  onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export interface IInputProps {
  className: string
  name?: string
  value?: string
  placeholder?: string
  label?: string
  error?: boolean
  errorMessage?: string
  success?: boolean
  successMessage?: string
  maxlength: number
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface IDualsliderProps {
  id: string
  min: number
  max: number
  onChangeHandlerSlider: (
    id: string,
    targetElem: HTMLInputElement,
    max: number,
    value: number,
    limit: number
  ) => void
}

export interface IAppContext {
  productsLibrary: IProduct[]
  filteredList: IProduct[]
  setFilteredList: Dispatch<SetStateAction<IProduct[]>>
  searchList: IProduct[]
  setSearchList: Dispatch<SetStateAction<IProduct[]>>
  cartOrders: ICartOrders[]
  setCartOrders: Dispatch<SetStateAction<ICartOrders[]>>
}

export interface IFilterCategories {
  category?: string[]
  type?: string[]
  color?: string[]
}

export interface ICheckoutProps {
  setPopupWindow: Dispatch<SetStateAction<boolean>>
}

export interface IPaginationProps {
  currentPage: number
  productsPerPage: number
  totalProducts: number
  paginate: (pageNumber: number) => void
}
