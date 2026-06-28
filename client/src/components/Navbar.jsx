import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Food Delivery
      </h1>

      <div className="flex gap-6">
        <Link to="/home">Home</Link>
        <Link to="/restaurants">Restaurants</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>
      </div>

    </nav>
  )
}

export default Navbar
