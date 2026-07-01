import { Link } from 'react-router-dom'

function RestaurantCard({ restaurant }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600"
        alt="Restaurant"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">{restaurant.name}</h2>

        <p className="text-gray-500 mt-2">
          {restaurant.description}
        </p>

        <div className="mt-4 space-y-2">
          <p>🍽️ {restaurant.cuisine}</p>
          <p>⭐ {restaurant.rating}</p>
          <p>📍 {restaurant.address}</p>
        </div>

        <Link to={`/menu/${restaurant._id}`}>
          <button className="mt-5 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
            View Menu
          </button>
        </Link>

      </div>
    </div>
  )
}

export default RestaurantCard
