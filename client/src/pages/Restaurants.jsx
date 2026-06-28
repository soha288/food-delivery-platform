import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard'

import api from '../services/api'

function Restaurants() {

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

  return (

    <>

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">

          Restaurants

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {restaurants.map((restaurant) => (

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
