import { ICartOrders } from '../interfaces/interface'

export type UseLocalStorageTuple = [
  ICartOrders[],
  React.Dispatch<React.SetStateAction<ICartOrders[]>>
]
