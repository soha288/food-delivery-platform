import toast from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import StarRating from "../components/StarRating";
import api from '../services/api'

function Menu() {

  const { restaurantId } = useParams()

  const [menuItems, setMenuItems] = useState([])
  const [reviews, setReviews] = useState([]);
const [restaurant, setRestaurant] = useState(null);
const [rating, setRating] = useState(5);
const [reviewText, setReviewText] = useState("");
  useEffect(() => {

    fetchMenu()

  }, [])

 const fetchMenu = async () => {

  try {

    const menuRes =
      await api.get(`/menu/restaurant/${restaurantId}`);

    setMenuItems(menuRes.data.data);

    const restaurantRes =
      await api.get(`/restaurants/${restaurantId}`);

    setRestaurant(restaurantRes.data.data);

    const reviewRes =
      await api.get(`/reviews/${restaurantId}`);

    setReviews(reviewRes.data.reviews);

  } catch (error) {

    console.log(error);

  }

};
const addToCart = async (item) => {

  try {

    const userId = localStorage.getItem("userId");

    const cartRes = await api.get(`/cart/${userId}`);

    const cartItems = cartRes.data.data;

    if (cartItems.length > 0) {

      const existingRestaurant =
        cartItems[0].menuItem.restaurant;

      if (existingRestaurant.toString() !== restaurantId) {

        const confirmClear = window.confirm(
          "Your cart contains items from another restaurant.\n\nClick OK to clear the cart and add this item."
        );

        if (!confirmClear) return;

        for (const cartItem of cartItems) {
          await api.delete(`/cart/${cartItem._id}`);
        }

      }

    }

    await api.post("/cart", {
      user: userId,
      menuItem: item._id,
      quantity: 1
    });

    toast.success("Added to cart successfully");

  } catch (error) {

    console.log(error);
    toast.error("Something went wrong");

  }

};
const submitReview = async () => {

  try {

    await api.post(
      "/reviews",
      {
        restaurantId,
        rating,
        review: reviewText
      },
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );

    toast.success("Review submitted!");

    setReviewText("");

    setRating(5);

    fetchMenu();

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to submit review"
    );

  }

};
  return (

    <>

      <Navbar />

      <div className="p-8">

        <div className="mb-8">

  <h1 className="text-4xl font-bold">

    {restaurant?.name || "Restaurant"}

  </h1>

  <p className="text-gray-600 mt-2">

    ⭐ {restaurant?.rating || 0}

    {" "}({restaurant?.totalReviews || 0} Reviews)

  </p>

</div>
<div className="mt-12">

  <h2 className="text-3xl font-bold mb-6">

    Customer Reviews

  </h2>

  {reviews.length === 0 ? (

    <p>No reviews yet.</p>

  ) : (

    reviews.map((item) => (

      <div
        key={item._id}
        className="bg-white shadow rounded-xl p-5 mb-4"
      >

        <p className="text-xl">

          {"⭐".repeat(item.rating)}

        </p>

        <p className="mt-2">

          {item.review}

        </p>

        <p className="text-gray-500 mt-3">

          — {item.user?.name}

        </p>

      </div>

    ))

  )}

</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {menuItems.map(item => (

            <div
              key={item._id}
              className="bg-white shadow rounded-xl p-5"
            >

              <h2 className="text-xl font-bold">

                {item.name}

              </h2>

              <p className="text-gray-500 mt-2">

                {item.description}

              </p>

              <p className="mt-2">

                ₹ {item.price}

              </p>

              <button
  onClick={() => addToCart(item)}
  className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
>
  Add to Cart
</button>

            </div>

          ))}
          

        </div>
        <div className="bg-white shadow rounded-xl p-6 mt-8">

  <h2 className="text-2xl font-bold mb-4">

    Write a Review

  </h2>

  <StarRating

    rating={rating}

    onChange={setRating}

  />

  <textarea

    value={reviewText}

    onChange={(e)=>setReviewText(e.target.value)}

    className="border rounded-lg w-full mt-4 p-3"

    rows="4"

    placeholder="Share your experience..."

  />

  <button

    onClick={submitReview}

    className="bg-orange-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-orange-600"

  >

    Submit Review

  </button>

</div>

      </div>

    </>

  )
}

export default Menu
