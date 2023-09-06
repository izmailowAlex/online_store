import React, {
  MouseEvent,
  ChangeEvent,
  FocusEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { To } from 'react-router-dom'

export interface ICheckboxProps {
  children?: string | undefined
  className?: string | undefined
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export type Callback<T> = (data?: T) => void

export interface IButtonProps {
  children: string
  className?: string
  to?: To
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export interface ICounterProps {
  id: string
  count: number
  min: number
  max: number
  changeCartOrdersContain: (id: string, currentVal: number) => void
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
  name: string
  price: number
  count: number
  min: number
  max: number
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

export interface IDualslider {
  min: number
  max: number
}

export interface IAppContext {
  productsLibrary: IProduct[]
  cartOrders: ICartOrders[]
  setCartOrders: React.Dispatch<React.SetStateAction<ICartOrders[]>>
  cartCount: number
  setCartCount: Dispatch<SetStateAction<number>>
}

export interface ICatalogContext {
  filteredList: IProduct[]
  setFilteredList: Dispatch<SetStateAction<IProduct[]>>
}

export interface IFilterCategories {
  category?: string[]
  type?: string[]
  color?: string[]
}

export interface ICheckoutProps {
  setPopupWindow: React.Dispatch<React.SetStateAction<boolean>>
}
