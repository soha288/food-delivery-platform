import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../services/api'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {

    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")

    if (token && role) {

      if (role === "customer") {
        navigate("/home")
      }

      else if (role === "restaurant_owner") {
        navigate("/restaurant-dashboard")
      }

      else if (role === "delivery_partner") {
        navigate("/delivery-dashboard")
      }

    }

  }, [navigate])

  const handleLogin = async () => {

    try {

      const res = await api.post("/auth/login", {
        email,
        password
      })

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userId", res.data.user.id)
      localStorage.setItem("name", res.data.user.name)
      localStorage.setItem("role", res.data.user.role)

      toast.success("Login Successful!")

      if (res.data.user.role === "customer") {

        navigate("/home")

      }

      else if (res.data.user.role === "restaurant_owner") {

        navigate("/restaurant-dashboard")

      }

      else if (res.data.user.role === "delivery_partner") {

        navigate("/delivery-dashboard")

      }

      else {

        navigate("/")

      }

    } catch (error) {

      toast.error("Invalid Email or Password")
      console.log(error)

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-96">

        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Food Delivery
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
        >
          Login
        </button>
       <p className="text-center mt-5">

  Don't have an account?

  <span
    onClick={() => navigate("/register")}
    className="text-orange-600 cursor-pointer font-semibold ml-2"
  >
    Register
  </span>

</p>
      </div>

    </div>

  )

}

export default Login
