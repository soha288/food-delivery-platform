import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard'

import api from '../services/api'

function Restaurants() {
  const [search, setSearch] = useState("")
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {

    fetchRestaurants()

  }, [])

  const fetchRestaurants = async () => {

    try {

      const res = await api.get('/restaurants')

      setRestaurants(res.data.data)

    } catch (error) {

      console.log(error)

    }

  }
const filteredRestaurants = restaurants.filter((restaurant) =>
  restaurant.name.toLowerCase().includes(search.toLowerCase())
)
  return (

    <>

      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-6">
  🍽️ Explore Restaurants
</h1>
         <input
  type="text"
  placeholder="Search restaurants..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border p-3 rounded-lg w-full mb-6"
/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredRestaurants.map((restaurant) => (

            <RestaurantCard
              key={restaurant._id}
              restaurant={restaurant}
            />

          ))}

        </div>

      </div>

    </>

  )

}

export default Restaurants
