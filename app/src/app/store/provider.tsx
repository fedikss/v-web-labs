import {
  type ReactNode,
  createContext,
  useState,
} from 'react'
import { type StoreApi } from 'zustand'
import { type TState, populateStore } from './store'
import { type TProduct } from '../../entities/product/products'

export const StoreContext = createContext<StoreApi<TState> | null>(null)

type TStoreProviderProps = {
  initialState: Pick<TState, 'products'>
  children?: ReactNode
}

export const StoreProvider = ({
  initialState,
  children,
}: TStoreProviderProps) => {
  const [store] = useState(populateStore(initialState))

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
