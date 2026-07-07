import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const role = localStorage.getItem("role");

  const logout = () => {

    localStorage.clear();

    navigate("/");

  };

  return (

    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        🍔 Food Delivery
      </h1>

      <div className="flex gap-6 items-center">

        {role === "Customer" && (
          <>
            <Link
              to="/home"
              className="hover:text-orange-400"
            >
              Home
            </Link>

            <Link
              to="/restaurants"
              className="hover:text-orange-400"
            >
              Restaurants
            </Link>

            <Link
              to="/cart"
              className="hover:text-orange-400"
            >
              Cart
            </Link>

            <Link
              to="/orders"
              className="hover:text-orange-400"
            >
              Orders
            </Link>
          </>
        )}

        {role === "Restaurant Partner" && (
          <>
            <Link
              to="/restaurant-dashboard"
              className="hover:text-orange-400"
            >
              Dashboard
            </Link>
          </>
        )}

        {role === "Delivery Partner" && (
          <>
            <Link
              to="/delivery-dashboard"
              className="hover:text-orange-400"
            >
              Delivery Dashboard
            </Link>
          </>
        )}

        <button
          onClick={logout}
          className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Logout
        </button>

      </div>

    </nav>

  );

}

export default Navbar;
