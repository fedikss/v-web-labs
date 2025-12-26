import { Header } from '../../widgets/header/Header'
import { ProductCard } from '../../widgets/product-card/ProductCard'
import { useStore } from '../../app/store'

export const HomePage = () => {
  const filteredProducts = useStore(state => state.getFilteredProducts())
  const cart = useStore(state => state.cart)
  const addToCart = useStore(state => state.addToCart)
  const removeFromCart = useStore(state => state.removeFromCart)

  const toggleCart = (productId: number) => {
    if (cart.includes(productId)) {
      removeFromCart(productId)
    } else {
      addToCart(productId)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-5">
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                inCart={cart.includes(product.id)}
                onToggleCart={toggleCart}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}
