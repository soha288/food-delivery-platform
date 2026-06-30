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
            className="bg-white shadow rounded-xl p-5 mb-5"
          >

            <p>
              <strong>Status:</strong> {order.status}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.totalAmount}
            </p>

            <p>
              <strong>Payment:</strong> {order.paymentMethod}
            </p>

            <p>
              <strong>Delivery:</strong> {order.deliveryAddress}
            </p>

          </div>

        ))}

      </div>

    </>

  )

}

export default Orders
