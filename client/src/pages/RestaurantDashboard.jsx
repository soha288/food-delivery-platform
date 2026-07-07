import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function RestaurantDashboard() {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const orderRes = await api.get("/orders");
      const menuRes = await api.get("/menu");

      setOrders(orderRes.data.data);
      setMenuItems(menuRes.data.data);
    } catch (error) {
      console.log(error);
    }
  };
const role = localStorage.getItem("role")

if (role !== "Restaurant Partner") {
  return (
    <div className="flex justify-center items-center h-screen text-3xl font-bold">
      Access Denied
    </div>
  )
}
  const totalOrders = orders.length;

  const revenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const totalMenuItems = menuItems.length;

  return (
    <>
      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-8">
          🍽 Restaurant Dashboard
        </h1>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-gray-500">Total Orders</h2>
            <p className="text-3xl font-bold mt-2">
              {totalOrders}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-gray-500">Revenue</h2>
            <p className="text-3xl font-bold mt-2">
              ₹{revenue}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-gray-500">Menu Items</h2>
            <p className="text-3xl font-bold mt-2">
              {totalMenuItems}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-gray-500">Pending Orders</h2>
            <p className="text-3xl font-bold mt-2">
              {pendingOrders}
            </p>
          </div>

        </div>

        {/* Menu Management */}

        <div className="bg-white shadow rounded-xl p-6 mb-10">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Menu Management
            </h2>

            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              + Add Menu Item
            </button>

          </div>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">Name</th>
                <th className="text-left">Category</th>
                <th className="text-left">Price</th>
                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {menuItems.map((item) => (

                <tr key={item._id} className="border-b">

                  <td className="py-3">
                    {item.name}
                  </td>

                  <td>
                    {item.category}
                  </td>

                  <td>
                    ₹{item.price}
                  </td>

                  <td>
                    {item.isAvailable
                      ? "🟢 Available"
                      : "🔴 Unavailable"}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Customer Orders */}

        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Customer Orders
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-3">
                  Customer
                </th>

                <th className="text-left">
                  Total
                </th>

                <th className="text-left">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order._id} className="border-b">

                  <td className="py-3">
                    {order.user?.name}
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

export default RestaurantDashboard;
