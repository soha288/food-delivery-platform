import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import api from '../services/api'

function Menu() {

  const { restaurantId } = useParams()

  const [menuItems, setMenuItems] = useState([])

  useEffect(() => {

    fetchMenu()

  }, [])

  const fetchMenu = async () => {

    try {

      const res =
        await api.get(
          `/menu/restaurant/${restaurantId}`
        )

      setMenuItems(res.data.data)

    } catch (error) {

      console.log(error)

    }

  }
const addToCart = async (item) => {

  try {

    const userId = localStorage.getItem("userId");

    const cartRes = await api.get(`/cart/${userId}`);

    const cartItems = cartRes.data.data;

    if (cartItems.length > 0) {

      const existingRestaurant =
        cartItems[0].menuItem.restaurant;

      if (existingRestaurant.toString() !== restaurantId) {

        const confirmClear = window.confirm(
          "Your cart contains items from another restaurant.\n\nClick OK to clear the cart and add this item."
        );

        if (!confirmClear) return;

        for (const cartItem of cartItems) {
          await api.delete(`/cart/${cartItem._id}`);
        }

      }

    }

    await api.post("/cart", {
      user: userId,
      menuItem: item._id,
      quantity: 1
    });

    toast.success("Added to cart successfully");

  } catch (error) {

    console.log(error);
    toast.error("Something went wrong");

  }

};
  return (

    <>

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">

          Restaurant Menu

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {menuItems.map(item => (

            <div
              key={item._id}
              className="bg-white shadow rounded-xl p-5"
            >

              <h2 className="text-xl font-bold">

                {item.name}

              </h2>

              <p className="text-gray-500 mt-2">

                {item.description}

              </p>

              <p className="mt-2">

                ₹ {item.price}

              </p>

              <button
  onClick={() => addToCart(item)}
  className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
>
  Add to Cart
</button>

            </div>

          ))}
          

        </div>

      </div>

    </>

  )
}

export default Menu
