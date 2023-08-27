import React, { createRef, ChangeEvent, FocusEvent } from 'react'

export interface ICheckboxProps {
  children?: string | undefined
  className: string | undefined
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export type Callback<T> = (data?: T) => void

export interface IButtonProps {
  children: string
  className: string
  to: string
  button: boolean
  onClick: () => Event | undefined
}

export interface ICounterProps {
  count: number
  min: number
  max: number
}

export interface ICardProps {
  product: IProduct
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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: FocusEvent<HTMLInputElement>) => void
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
