import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

 const handleCheckout = () => {

  if (!address || !phone) {

    alert("Please fill all fields")

    return

  }

  localStorage.setItem("address", address)
  localStorage.setItem("phone", phone)

  navigate("/cart?checkout=true")

};

  return (

    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">

        <h1 className="text-3xl font-bold mb-6">
          Checkout
        </h1>

        <input
          type="text"
          placeholder="Delivery Address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          className="border w-full p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          className="border w-full p-3 rounded-lg mb-4"
        />

        <select
          className="border w-full p-3 rounded-lg mb-6"
        >
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Card</option>
        </select>

        <button
          onClick={handleCheckout}
          className="w-full bg-orange-500 text-white py-3 rounded-lg"
        >
          Continue
        </button>

      </div>

    </div>

  );

}

export default Checkout;
