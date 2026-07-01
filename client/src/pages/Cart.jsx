import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import api from '../services/api'

function Cart() {

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetchCart()
  }, [])
  const navigate = useNavigate()
  const fetchCart = async () => {

    try {

      const userId = localStorage.getItem('userId')

      const res = await api.get(`/cart/${userId}`)

      setCartItems(res.data.data)

    } catch (error) {

      console.log(error)

    }

  }
const placeOrder = async () => {

  try {

    const userId = localStorage.getItem("userId")

    const items = cartItems.map(item => ({
      menuItem: item.menuItem._id,
      quantity: item.quantity
    }))

    const totalAmount = cartItems.reduce(
      (sum, item) =>
        sum + item.menuItem.price * item.quantity,
      0
    )

    await api.post("/orders", {
      user: userId,
      items,
      totalAmount,
      deliveryAddress: "RGUKT Basar Hostel",
      paymentMethod: "Cash"
    })

    // Remove all cart items
    for (const item of cartItems) {
      await api.delete(`/cart/${item._id}`)
    }

    // Clear frontend cart
    setCartItems([])

    toast.success("Order placed successfully!")

    navigate("/orders")

  } catch (error) {

    console.log(error)

    toast.error("Failed to place order")

  }

}
  return (

    <>
      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          My Cart
        </h1>

        {
          cartItems.length === 0
          ? (
            <p>Your cart is empty.</p>
          )
          : (
            cartItems.map(item => (

              <div
                key={item._id}
                className="bg-white shadow rounded-xl p-5 mb-4"
              >

                <h2 className="text-xl font-bold">
                  {item.menuItem.name}
                </h2>

                <p>
                  ₹ {item.menuItem.price}
                </p>

                <p>
                  Quantity: {item.quantity}
                </p>

              </div>

            ))
          )
        }
        {cartItems.length > 0 && (
        <button
  onClick={placeOrder}
  className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
>
  Place Order
</button>
      )}
      </div>

    </>

  )

}

export default Cart
