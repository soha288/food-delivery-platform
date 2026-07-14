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

      const res = await api.get('/orders/my-customer-orders')

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

        {orders.length === 0 ? (

  <div className="bg-white shadow rounded-xl p-10 text-center">

    <h2 className="text-2xl font-bold mb-3">
      📦 No Orders Yet
    </h2>

    <p className="text-gray-500">
      Your placed orders will appear here.
    </p>

  </div>

) : (

  orders.map(order => (

          <div
            key={order._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 mb-6"
          >

            <div className="flex items-center gap-2 mb-3">

  <span className="font-semibold">
    Status:
  </span>

 <span
  className={`px-3 py-1 rounded-full text-sm font-medium
    ${
      order.status === "Pending"
        ? "bg-yellow-100 text-yellow-700"
        : order.status === "Preparing"
        ? "bg-blue-100 text-blue-700"
        : order.status === "Out for Delivery"
        ? "bg-orange-100 text-orange-700"
        : "bg-green-100 text-green-700"
    }`}
>
  {order.status}
</span>
</div>

            <p>
              <strong>Total:</strong> ₹{order.totalAmount}
            </p>

            <p>
              <strong>Payment:</strong> {order.paymentMethod}
            </p>
            <div className="mt-3">

  <strong>Items:</strong>

  <ul className="list-disc ml-6 mt-2">

    {order.items.map((item, index) => (

      <li key={index}>

        {item.menuItem?.name} × {item.quantity}

      </li>

    ))}

  </ul>

</div>
            <p>
              <strong>Delivery:</strong> {order.deliveryAddress}
            </p>
            
         <p className="text-gray-500 mt-3">
  Ordered on{" "}
  {new Date(order.createdAt).toLocaleDateString()}
</p>
          </div>

        ))
        )}

      </div>

    </>

  )

}

export default Orders
