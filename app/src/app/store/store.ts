import { type StoreApi, createStore } from 'zustand'
import { type TProduct } from '../../entities/product/products'

export type TState = {
  products: TProduct[]
  cart: number[]
  searchQuery: string
  addToCart: (id: number) => void
  removeFromCart: (id: number) => void
  setSearchQuery: (query: string) => void
  getFilteredProducts: () => TProduct[]
}

export const populateStore = (
  initialState: Pick<TState, 'products'>
): StoreApi<TState> =>
  createStore<TState>((set, get) => ({
    ...initialState,
    cart: [],
    searchQuery: '',
    addToCart: id =>
      set(state => ({
        cart: state.cart.includes(id)
          ? state.cart
          : [...state.cart, id],
      })),
    removeFromCart: id =>
      set(state => ({
        cart: state.cart.filter(productId => productId !== id),
      })),
    setSearchQuery: query =>
      set({
        searchQuery: query,
      }),
    getFilteredProducts: () => {
      const { products, searchQuery } = get()
      if (!searchQuery.trim()) return products
      return products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    },
  }))
