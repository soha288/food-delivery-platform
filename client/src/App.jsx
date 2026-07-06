import { Routes, Route } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Home from './pages/Home'
import Restaurants from './pages/Restaurants'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Orders from './pages/Orders'

function App() {

  const isLoggedIn = localStorage.getItem("token")

  return (
    <Routes>

      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={isLoggedIn ? <Home /> : <Login />}
      />

      <Route
        path="/restaurants"
        element={isLoggedIn ? <Restaurants /> : <Login />}
      />

      <Route
        path="/menu/:restaurantId"
        element={isLoggedIn ? <Menu /> : <Login />}
      />

      <Route
        path="/cart"
        element={isLoggedIn ? <Cart /> : <Login />}
      />
      <Route
  path="/checkout"
  element={isLoggedIn ? <Checkout /> : <Login />}
/>
      <Route
        path="/orders"
        element={isLoggedIn ? <Orders /> : <Login />}
      />

    </Routes>
  )
}

export default App
