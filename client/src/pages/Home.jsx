import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white min-h-[80vh] flex items-center">

        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl font-bold leading-tight">
              Delicious Food
              <br />
              Delivered To Your Door
            </h1>

            <p className="mt-6 text-lg">
              Discover your favorite restaurants and enjoy fresh meals with a seamless ordering experience.
            </p>

            <Link to="/restaurants">
              <button className="mt-8 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
                Explore Restaurants
              </button>
            </Link>

          </div>

          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900"
              alt="Food"
              className="rounded-3xl shadow-2xl w-full max-w-lg"
            />

          </div>

        </div>

      </section>
    </>
  )
}

export default Home
