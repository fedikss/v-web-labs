import { useContext } from 'react'
import { useStore as defaultUseStore } from 'zustand'
import { StoreContext } from './provider'
import { type TState } from './store'

export const useStore = <S,>(selector: (state: TState) => S): S => {
  const store = useContext(StoreContext)

  if (!store)
    throw new Error('[ERROR] useStore must be used within a StoreProvider')

  return defaultUseStore(store, selector)
}
