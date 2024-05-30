import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
