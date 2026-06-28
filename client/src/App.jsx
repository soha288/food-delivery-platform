import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Orders from './pages/Orders'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/menu/:restaurantId" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  )
}

export default App
