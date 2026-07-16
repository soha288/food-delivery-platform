import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import RestaurantCard from '../components/RestaurantCard'

import api from '../services/api'

function Restaurants() {
  const [search, setSearch] = useState("");
const [cuisine, setCuisine] = useState("All");
const [sort, setSort] = useState("");
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
let filteredRestaurants = restaurants.filter((restaurant) => {
  const matchesSearch =
    restaurant.name.toLowerCase().includes(search.toLowerCase());

  const matchesCuisine =
    cuisine === "All" || restaurant.cuisine === cuisine;

  return matchesSearch && matchesCuisine;
});

if (sort === "rating") {
  filteredRestaurants.sort((a, b) => b.rating - a.rating);
}

if (sort === "name") {
  filteredRestaurants.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}
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
<div className="flex gap-4 mb-6">

<select
value={cuisine}
onChange={(e)=>setCuisine(e.target.value)}
className="border p-3 rounded-lg"
>

<option>All</option>
<option>Indian</option>
<option>Chinese</option>
<option>Italian</option>
<option>Fast Food</option>

</select>

<select
value={sort}
onChange={(e)=>setSort(e.target.value)}
className="border p-3 rounded-lg"
>

<option value="">Sort</option>
<option value="rating">Highest Rating</option>
<option value="name">A-Z</option>

</select>

</div>
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
