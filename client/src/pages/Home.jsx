import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen bg-[#0B0B0B] flex items-center justify-center overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">

            <div className="bg-[#FF6B00] text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-lg">
              🍔 Delicious Food, Fast Delivery
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 text-white">
              Delicious Food
              <br />
              <span className="text-[#FF6B00]">Delivered</span>
              <br />
              To Your Door
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-md">
              Experience the finest cuisines prepared with love and delivered with care, right to your doorstep.
            </p>

            <Link to="/restaurants">
              <button className="bg-[#FF6B00] hover:bg-[#e65a00] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Restaurants
              </button>
            </Link>

          </div>

          {/* Right Side - Floating Food Image */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">

            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0 bg-[#FF6B00]/20 blur-3xl rounded-full"></div>

            {/* Main Food Image */}
            <div className="relative z-10" data-aos="zoom-in">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80"
                alt="Delicious Food"
                className="w-full max-w-md lg:max-w-xl floating-animation hover:scale-105 transition-transform duration-500 cursor-pointer"
              />

              {/* Floating Vegetables */}
              <div className="absolute -top-8 -left-8 text-4xl floating-vegetable-1 animate-bounce" style={{ animationDelay: '0s' }}>
                🥦
              </div>
              <div className="absolute -top-4 -right-12 text-3xl floating-vegetable-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
                🍅
              </div>
              <div className="absolute -bottom-6 -left-12 text-3xl floating-vegetable-3 animate-bounce" style={{ animationDelay: '1s' }}>
                🥕
              </div>
              <div className="absolute -bottom-4 -right-8 text-4xl floating-vegetable-4 animate-bounce" style={{ animationDelay: '1.5s' }}>
                🥬
              </div>
              <div className="absolute top-1/2 -right-16 text-3xl floating-vegetable-5 animate-bounce" style={{ animationDelay: '2s' }}>
                🌽
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Second Section - Hand Holding Plate */}
      <section className="bg-white py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Hand Holding Plate Image */}
          <div className="flex items-center justify-center order-2 lg:order-1" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
              alt="Hand holding plate with food"
              className="w-full max-w-md lg:max-w-lg floating-animation"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2" data-aos="fade-left">

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Good Food, <span className="text-[#FF6B00]">Great Moments</span>
            </h2>

            <p className="text-lg text-gray-600 mb-12 max-w-md">
              We bring your favorite restaurants to your fingertips. Enjoy a wide variety of cuisines, fast delivery and secure ordering.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl mb-3">🚚</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Get your food delivered in minutes</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl mb-3">🍽</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Best Restaurants</h4>
                <p className="text-sm text-gray-600">Choose from top-rated restaurants</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl mb-3">🛡</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h4>
                <p className="text-sm text-gray-600">Your payments are safe with us</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:bg-orange-50 transition-colors duration-300" data-aos="fade-up" data-aos-delay="400">
                <div className="text-3xl mb-3">🎧</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">We're here to help anytime</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get your favorite food delivered to your doorstep
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 - Search Restaurant */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e65a00] transition-colors duration-300">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Search Restaurant</h3>
              <p className="text-gray-600 text-center text-sm">
                Browse through our wide selection of restaurants near you
              </p>
            </div>

            {/* Card 2 - Choose Food */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e65a00] transition-colors duration-300">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Choose Food</h3>
              <p className="text-gray-600 text-center text-sm">
                Pick your favorite dishes from the menu
              </p>
            </div>

            {/* Card 3 - Fast Delivery */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e65a00] transition-colors duration-300">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Fast Delivery</h3>
              <p className="text-gray-600 text-center text-sm">
                We deliver your food to your doorstep quickly
              </p>
            </div>

            {/* Card 4 - Enjoy Meal */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e65a00] transition-colors duration-300">
                <span className="text-3xl">😋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Enjoy Meal</h3>
              <p className="text-gray-600 text-center text-sm">
                Sit back and enjoy your delicious food
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Premium Footer */}
      <footer className="bg-[#0B0B0B] text-white pt-16 pb-8">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <div data-aos="fade-right">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                🍔 Food Delivery
              </h3>
              <p className="text-gray-400 mb-6">
                Delivering happiness to your doorstep with the best restaurants in town.
              </p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-lg font-semibold mb-4 text-[#FF6B00]">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/home" className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/restaurants" className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-300">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-300">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="text-gray-400 hover:text-[#FF6B00] transition-colors duration-300">
                    Orders
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-semibold mb-4 text-[#FF6B00]">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <span>📍</span>
                  <span>123 Food Street, City</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span>📞</span>
                  <span>+1 234 567 890</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span>✉️</span>
                  <span>support@fooddelivery.com</span>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div data-aos="fade-left">
              <h4 className="text-lg font-semibold mb-4 text-[#FF6B00]">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300">
                  <span className="text-xl">🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300">
                  <span className="text-xl">📸</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors duration-300">
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2026 Food Delivery. All rights reserved. Made with ❤️
            </p>
          </div>

        </div>

      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .floating-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

    </>
  )
}

export default Home
