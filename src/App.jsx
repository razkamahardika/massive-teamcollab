import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Chart from './pages/Chart'
import DetailProduk from './pages/DetailProduk'
import Payment from './pages/Payment'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/detailproduk" element={<DetailProduk/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
