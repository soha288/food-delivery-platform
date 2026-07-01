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

  if (token) {
    navigate("/home")
  }

}, [])
  const handleLogin = async () => {

  try {

    const res = await api.post("/auth/login", {
      email,
      password
    })

    localStorage.setItem("token", res.data.token)

    localStorage.setItem("userId", res.data.user.id)

    localStorage.setItem("name", res.data.user.name)

    toast.success("Login Successful!")

    navigate("/home")

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

      </div>

    </div>
  )
}

export default Login
