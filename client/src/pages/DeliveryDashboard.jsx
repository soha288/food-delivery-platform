import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function DeliveryDashboard() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);
const role = localStorage.getItem("role")

if (role !== "Delivery Partner") {
  return (
    <div className="flex justify-center items-center h-screen text-3xl font-bold">
      Access Denied
    </div>
  )
}
  const fetchOrders = async () => {
    try {

      const res = await api.get("/orders");
      setOrders(res.data.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-8">
          🛵 Delivery Dashboard
        </h1>

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-5">
            Assigned Orders
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Customer</th>
                <th className="text-left">Address</th>
                <th className="text-left">Total</th>
                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {orders.map(order => (

                <tr key={order._id} className="border-b">

                  <td className="py-3">
                    {order.user?.name}
                  </td>

                  <td>
                    {order.deliveryAddress}
                  </td>

                  <td>
                    ₹{order.totalAmount}
                  </td>

                  <td>
                    {order.status}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </>
  );
}

export default DeliveryDashboard;
