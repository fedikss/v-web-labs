import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { StoreProvider } from './app/store'
import { products } from './entities/product/products'

function App() {
  return (
    <StoreProvider initialState={{ products }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  )
}

export default App
