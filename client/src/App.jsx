import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";

function App() {

  const isLoggedIn = localStorage.getItem("token");

  return (

    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
  path="/home"
  element={
    <ProtectedRoute allowedRole="customer">
      <Home />
    </ProtectedRoute>
  }
/>

     <Route
  path="/restaurants"
  element={
    <ProtectedRoute allowedRole="customer">
      <Restaurants />
    </ProtectedRoute>
  }
/>

     <Route
  path="/menu/:restaurantId"
  element={
    <ProtectedRoute allowedRole="customer">
      <Menu />
    </ProtectedRoute>
  }
/>

     <Route
  path="/cart"
  element={
    <ProtectedRoute allowedRole="customer">
      <Cart />
    </ProtectedRoute>
  }
/>

      <Route
  path="/checkout"
  element={
    <ProtectedRoute allowedRole="customer">
      <Checkout />
    </ProtectedRoute>
  }
/>

     <Route
  path="/orders"
  element={
    <ProtectedRoute allowedRole="customer">
      <Orders />
    </ProtectedRoute>
  }
/>

      <Route
  path="/restaurant-dashboard"
  element={
    <ProtectedRoute allowedRole="restaurant_owner">
      <RestaurantDashboard />
    </ProtectedRoute>
  }
/>

      <Route
  path="/delivery-dashboard"
  element={
    <ProtectedRoute allowedRole="delivery_partner">
      <DeliveryDashboard />
    </ProtectedRoute>
  }
/>

    </Routes>

  );

}

export default App;
