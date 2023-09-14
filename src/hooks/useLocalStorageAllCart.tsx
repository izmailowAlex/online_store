import { useState, useEffect } from 'react'
import { UseLocalStorageAllCartTuple } from '../@types/types'

function useLocalStorageAllCart (initValue: boolean, key: string): UseLocalStorageAllCartTuple {
  const getCartValue = (): boolean => {
    const storage: string | null = localStorage.getItem(key)

    if (storage !== null) {
      return JSON.parse(storage)
    }

    return initValue
  }

  const [cartValue, setCartValue] = useState(getCartValue)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(cartValue))
  }, [cartValue])

  return [cartValue, setCartValue]
}

export default useLocalStorageAllCart
