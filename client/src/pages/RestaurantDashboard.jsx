import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function RestaurantDashboard() {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
const [newItem, setNewItem] = useState({
  name: "",
  description: "",
  price: "",
  category: "",
  image: "",
  isAvailable: true
});

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const orderRes = await api.get("/orders/my-orders");
      const menuRes = await api.get("/menu/my-menu");

      setOrders(orderRes.data.data);
      setMenuItems(menuRes.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateStatus = async (id, status) => {

  try {

    await api.put(`/orders/${id}`, {
      status
    });

    fetchDashboardData();

  } catch (error) {

    console.log(error);

  }

};
const addMenuItem = async () => {

  try {

    if (editingId) {

      await api.put(`/menu/${editingId}`, newItem);

    } else {

      await api.post("/menu", newItem);

    }

    fetchDashboardData();

    setShowModal(false);

    setEditingId(null);

    setNewItem({
  name: "",
  description: "",
  price: "",
  category: "",
  image: "",
  isAvailable: true
});

  } catch (error) {

    console.log(error);

  }

};
const deleteMenuItem = async (id) => {

  try {

    await api.delete(`/menu/${id}`);

    fetchDashboardData();

  } catch (error) {

    console.log(error);

  }

};
const editMenuItem = (item) => {

  setEditingId(item._id);

  setNewItem({
  name: item.name,
  description: item.description,
  price: item.price,
  category: item.category,
  image: item.image,
  isAvailable: item.isAvailable
});

  setShowModal(true);

};
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

            <button
  onClick={() => setShowModal(true)}
  className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
>
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
                <th className="text-left">
  Actions
</th>

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
                  

  <td className="flex gap-2 py-3">

  <button
    onClick={() => editMenuItem(item)}
    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
  >
    Edit
  </button>

  <button
    onClick={() => deleteMenuItem(item._id)}
    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
  >
    Delete
  </button>

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
      Items
    </th>

    <th className="text-left">
      Payment
    </th>

    <th className="text-left">
      Total
    </th>

    <th className="text-left">
      Status
    </th>

    <th className="text-left">
      Actions
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

{order.items.map((item, index) => (

<div key={index}>

{item.menuItem?.name} × {item.quantity}

</div>

))}

</td>

<td>

{order.paymentMethod}

</td>

<td>

₹{order.totalAmount}

</td>

                  <td>

  {order.status === "Delivered" ? (

  <span className="bg-green-100 text-green-700 px-3 py-2 rounded-lg font-semibold">
    ✅ Delivered
  </span>

) : (

  <select
    value={order.status}
    onChange={(e) =>
      updateStatus(order._id, e.target.value)
    }
    className="border rounded-lg p-2"
  >

    {order.status === "Pending" && (
      <>
        <option>Pending</option>
        <option>Preparing</option>
      </>
    )}

    {order.status === "Preparing" && (
      <>
        <option>Preparing</option>
        <option>Out for Delivery</option>
      </>
    )}

    {order.status === "Out for Delivery" && (
      <>
        <option>Out for Delivery</option>
      </>
    )}

  </select>

)}
 

</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
{showModal && (

<div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

  <div className="bg-white rounded-xl p-6 w-[450px]">

   <h2 className="text-2xl font-bold mb-5">
  {editingId ? "Edit Menu Item" : "Add Menu Item"}
</h2>

    <input
      type="text"
      placeholder="Name"
      value={newItem.name}
      onChange={(e) =>
        setNewItem({
          ...newItem,
          name: e.target.value
        })
      }
      className="border w-full p-3 rounded-lg mb-3"
    />

    <textarea
      placeholder="Description"
      value={newItem.description}
      onChange={(e) =>
        setNewItem({
          ...newItem,
          description: e.target.value
        })
      }
      className="border w-full p-3 rounded-lg mb-3"
    />

    <input
      type="number"
      placeholder="Price"
      value={newItem.price}
      onChange={(e) =>
        setNewItem({
          ...newItem,
          price: e.target.value
        })
      }
      className="border w-full p-3 rounded-lg mb-3"
    />

    <input
      type="text"
      placeholder="Category"
      value={newItem.category}
      onChange={(e) =>
        setNewItem({
          ...newItem,
          category: e.target.value
        })
      }
      className="border w-full p-3 rounded-lg mb-3"
    />

    <input
      type="text"
      placeholder="Image URL"
      value={newItem.image}
      onChange={(e) =>
        setNewItem({
          ...newItem,
          image: e.target.value
        })
      }
      className="border w-full p-3 rounded-lg mb-3"
    />

    

    <div className="flex justify-end gap-3">

      <button
        onClick={() => setShowModal(false)}
        className="bg-gray-400 text-white px-5 py-2 rounded-lg"
      >
        Cancel
      </button>

      <button
  onClick={addMenuItem}
  className="bg-orange-500 text-white px-5 py-2 rounded-lg"
>
  {editingId ? "Update" : "Save"}
</button>

    </div>

  </div>

</div>

)}
    </>
  );
}

export default RestaurantDashboard;
