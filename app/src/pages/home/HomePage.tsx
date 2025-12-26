import { useState } from 'react'
import { Header } from '../../widgets/header/Header'
import { ProductCard } from '../../widgets/product-card/ProductCard'
import { products } from '../../entities/product/products'

export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleCart = (productId: number) => {
    setCart(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
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
