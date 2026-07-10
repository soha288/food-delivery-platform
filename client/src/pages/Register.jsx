import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("customer");

  const handleRegister = async () => {

    if (!name || !email || !password || !confirmPassword) {

      toast.error("Please fill all fields");
      return;

    }

    if (password !== confirmPassword) {

      toast.error("Passwords do not match");
      return;

    }

    try {

      await api.post("/auth/register", {
        name,
        email,
        password,
        role
      });

      toast.success("Registration Successful!");

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-xl rounded-xl p-8 w-96">

        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <select
          value={role}
          onChange={(e)=>setRole(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
        >
          <option value="customer">
            👤 Customer
          </option>

          <option value="restaurant_owner">
            🍽 Restaurant Owner
          </option>

          <option value="delivery_partner">
            🛵 Delivery Partner
          </option>

        </select>

        <button
          onClick={handleRegister}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Register
        </button>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            to="/"
            className="text-orange-600 font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;
