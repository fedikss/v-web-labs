import { type TProduct } from '../../entities/product/products'

type TProductCardProps = {
  product: TProduct
  inCart: boolean
  onToggleCart: (id: number) => void
}

export const ProductCard = ({
  product,
  inCart,
  onToggleCart,
}: TProductCardProps) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="w-full h-[200px] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h2 className="text-xl mb-2 text-slate-800 font-semibold">
          {product.name}
        </h2>
        <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
        <p className="text-2xl font-bold text-blue-500 mb-4">
          {product.price.toLocaleString()} ₽
        </p>
        <button
          onClick={() => onToggleCart(product.id)}
          className={`w-full px-5 py-3 text-white border-none rounded-md text-base font-semibold cursor-pointer transition-all active:scale-[0.98] ${
            inCart
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {inCart ? 'В корзине' : 'Добавить в корзину'}
        </button>
      </div>
    </article>
  )
}
