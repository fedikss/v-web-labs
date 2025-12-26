type THeaderProps = {
  searchQuery: string
  onSearchChange: (value: string) => void
}

export const Header = ({ searchQuery, onSearchChange }: THeaderProps) => {
  return (
    <header className="bg-slate-800 text-white py-5 shadow-md">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl font-bold mb-4">Интернет-магазин</h1>
        <div className="w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full px-5 py-3 text-base rounded-full outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(74,144,226,0.3)] text-gray-900"
            placeholder="Поиск товаров..."
          />
        </div>
      </div>
    </header>
  )
}
