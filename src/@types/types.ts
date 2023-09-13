import { ICartOrders } from '../interfaces/interface'

export type UseLocalStorageTuple = [
  ICartOrders[],
  React.Dispatch<React.SetStateAction<ICartOrders[]>>
]

export type UseLocalStorageAllCartTuple = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
]

// export type UseLocalStorageAllCartTuple = [
//   boolean,
//   React.Dispatch<React.SetStateAction<boolean>>
// ]
