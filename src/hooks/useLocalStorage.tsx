import { useState, useEffect } from 'react'
import { ICartOrders } from '../interfaces/interface'
import { UseLocalStorageTuple } from '../types/types'

function useLocalStorage (initialValue: [], key: string): UseLocalStorageTuple {
  const getValue = (): ICartOrders[] => {
    const storage: string | null = localStorage.getItem(key)

    if (storage !== null) {
      return JSON.parse(storage)
    }

    return initialValue
  }

  const [value, setValue] = useState<ICartOrders[]>(getValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage
