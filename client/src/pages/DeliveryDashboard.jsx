import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function DeliveryDashboard() {

  const [orders, setOrders] = useState([]);

 

  const fetchOrders = async () => {

    try {

      const res = await api.get("/orders");

      setOrders(
        res.data.data.filter(
          order => order.status === "Out for Delivery"
        )
      );

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const markDelivered = async (id) => {

    try {

      await api.put(`/orders/${id}`, {
        status: "Delivered"
      });

      fetchOrders();

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

                <th className="text-left py-3">
                  Customer
                </th>

                <th className="text-left">
                  Address
                </th>

                <th className="text-left">
                  Total
                </th>

                <th className="text-left">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map(order => (

                <tr
                  key={order._id}
                  className="border-b"
                >

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

                    {order.status === "Delivered" ? (

                      <span className="text-green-600 font-bold">
                        Delivered
                      </span>

                    ) : (

                      <button
                        onClick={() =>
                          markDelivered(order._id)
                        }
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                      >
                        Mark Delivered
                      </button>

                    )}

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
