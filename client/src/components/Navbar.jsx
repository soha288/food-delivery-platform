import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Navbar() {
const navigate = useNavigate()

const logout = () => {

  localStorage.removeItem("token")
  localStorage.removeItem("userId")
  localStorage.removeItem("name")

  navigate("/")

}
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold flex items-center gap-2">
        🍔 Food Delivery
      </h1>

      <div className="flex gap-6 items-center">
        <Link to="/home" className="hover:text-orange-400 transition-colors">Home</Link>
        <Link to="/restaurants" className="hover:text-orange-400 transition-colors">Restaurants</Link>
        <Link to="/cart" className="hover:text-orange-400 transition-colors">Cart</Link>
        <Link to="/orders" className="hover:text-orange-400 transition-colors">Orders</Link>
        <button
  onClick={logout}
  className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
>
  Logout
</button>
      </div>

    </nav>
  )
}

export default Navbar
