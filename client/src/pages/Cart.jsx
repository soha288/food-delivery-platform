import toast from 'react-hot-toast'
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import api from '../services/api'

function Cart() {

  const [cartItems, setCartItems] = useState([])
  const subtotal = cartItems.reduce(
  (sum, item) => sum + item.menuItem.price * item.quantity,
  0
)

const deliveryFee = subtotal > 0 ? 40 : 0

const grandTotal = subtotal + deliveryFee

  useEffect(() => {
    fetchCart()
  }, [])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

const isCheckout = searchParams.get("checkout") === "true"
  const fetchCart = async () => {

    try {

      const userId = localStorage.getItem('userId')

      const res = await api.get(`/cart/${userId}`)

      setCartItems(res.data.data)

    } catch (error) {

      console.log(error)

    }

  }
const updateQuantity = async (id, quantity) => {

  try {

    if (quantity < 1) {

      await api.delete(`/cart/${id}`)

      toast.success("Item removed from cart")

      fetchCart()

      return

    }

    await api.put(`/cart/${id}`, {
      quantity
    })

    fetchCart()

  } catch (error) {

    console.log(error)

    toast.error("Failed to update cart")

  }

}
const placeOrder = async () => {

  try {

    const userId = localStorage.getItem("userId")

    const items = cartItems.map(item => ({
      menuItem: item.menuItem._id,
      quantity: item.quantity
    }))

    const totalAmount = grandTotal

    await api.post("/orders", {
      user: userId,
      items,
      totalAmount,
      deliveryAddress: localStorage.getItem("address"),
paymentMethod: localStorage.getItem("paymentMethod")
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

console.log(error.response?.data)

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

                <div className="flex items-center gap-4 mt-3">

  <button
    onClick={() => updateQuantity(item._id, item.quantity - 1)}
    className="bg-red-500 text-white w-8 h-8 rounded-full"
  >
    -
  </button>

  <span className="font-bold">
    {item.quantity}
  </span>

  <button
    onClick={() => updateQuantity(item._id, item.quantity + 1)}
    className="bg-green-500 text-white w-8 h-8 rounded-full"
  >
    +
  </button>
  <button
  onClick={() => updateQuantity(item._id, 0)}
  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
>
  Remove Item
</button>

</div>

              </div>

            ))
          )
        }
        <div className="bg-white shadow rounded-xl p-5 mt-6">

  <h2 className="text-2xl font-bold mb-4">
    Order Summary
  </h2>

  <div className="flex justify-between mb-2">
    <span>Subtotal</span>
    <span>₹ {subtotal}</span>
  </div>

  <div className="flex justify-between mb-2">
    <span>Delivery Fee</span>
    <span>₹ {deliveryFee}</span>
  </div>

  <hr className="my-3" />

  <div className="flex justify-between text-xl font-bold">
    <span>Grand Total</span>
    <span>₹ {grandTotal}</span>
  </div>

</div>
       {!isCheckout ? (

  <button
    onClick={() => navigate("/checkout")}
    className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
  >
    Proceed to Checkout
  </button>

) : (

  <button
    onClick={placeOrder}
    className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
  >
    Place Order
  </button>

)}
      </div>

    </>

  )

}

export default Cart
