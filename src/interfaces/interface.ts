export interface ICheckboxProps {
  children: string | undefined
  className: string | undefined
  onChange: () => Event | undefined
}

export type Callback<T> = (data?: T) => void

export interface IButtonProps {
  children: string
  className: string
  to: string
  button: boolean
  onClick: () => Event | undefined
}
