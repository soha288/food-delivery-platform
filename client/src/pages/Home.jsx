import Navbar from '../components/Navbar'

function Home() {

  return (

    <>

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold">
          Welcome to Food Delivery 🍔
        </h1>

        <p className="mt-4 text-gray-600">
          Order delicious food from your favourite restaurants.
        </p>

      </div>

    </>

  )

}

export default Home
