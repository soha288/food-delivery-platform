import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import api from '../services/api'

function Orders() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {

    try {

      const res = await api.get('/orders')

      setOrders(res.data.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <>
      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          My Orders
        </h1>

        {orders.map(order => (

          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 mb-6"
          >

            <div className="flex items-center gap-2 mb-3">

  <span className="font-semibold">
    Status:
  </span>

  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
    {order.status}
  </span>

</div>

            <p>
              <strong>Total:</strong> ₹{order.totalAmount}
            </p>

            <p>
              <strong>Payment:</strong> {order.paymentMethod}
            </p>

            <p>
              <strong>Delivery:</strong> {order.deliveryAddress}
            </p>
            
         <p className="text-gray-500 mt-3">
  Ordered on{" "}
  {new Date(order.createdAt).toLocaleDateString()}
</p>
          </div>

        ))}

      </div>

    </>

  )

}

export default Orders
