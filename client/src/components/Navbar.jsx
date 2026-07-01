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
    <nav className="bg-orange-500 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        🍔 Food Delivery
      </h1>

      <div className="flex gap-6">
        <Link to="/home">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
        <button
  onClick={logout}
  className="bg-white text-orange-600 px-4 py-1 rounded-lg font-medium hover:bg-gray-100"
>
  Logout
</button>
      </div>

    </nav>
  )
}

export default Navbar
