export type TProduct = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const products: TProduct[] = [
  {
    id: 1,
    name: 'Ноутбук ASUS',
    description: 'Мощный ноутбук для работы и игр',
    price: 75000,
    image: 'https://via.placeholder.com/250x200/4A90E2/ffffff?text=Laptop',
  },
  {
    id: 2,
    name: 'Смартфон Samsung',
    description: 'Флагманский смартфон с отличной камерой',
    price: 55000,
    image: 'https://via.placeholder.com/250x200/E24A90/ffffff?text=Phone',
  },
  {
    id: 3,
    name: 'Наушники Sony',
    description: 'Беспроводные наушники с шумоподавлением',
    price: 15000,
    image: 'https://via.placeholder.com/250x200/4AE290/ffffff?text=Headphones',
  },
  {
    id: 4,
    name: 'Клавиатура Logitech',
    description: 'Механическая игровая клавиатура',
    price: 8000,
    image: 'https://via.placeholder.com/250x200/E2904A/ffffff?text=Keyboard',
  },
  {
    id: 5,
    name: 'Мышь Razer',
    description: 'Игровая мышь с высокой точностью',
    price: 5000,
    image: 'https://via.placeholder.com/250x200/904AE2/ffffff?text=Mouse',
  },
  {
    id: 6,
    name: 'Монитор LG',
    description: '4K монитор 27 дюймов',
    price: 25000,
    image: 'https://via.placeholder.com/250x200/E2E24A/ffffff?text=Monitor',
  },
]
