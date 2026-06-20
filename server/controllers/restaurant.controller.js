const Restaurant =
require(
'../models/restaurant.model'
)

const createRestaurant =
async (req, res) => {

  try {

    const restaurant =
      await Restaurant.create(
        req.body
      )

    res.status(201).json({
      success: true,
      data: restaurant
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
const getRestaurants =
async (req, res) => {

  try {

    const restaurants =
      await Restaurant.find()

    res.status(200).json({
      success: true,
      count:
        restaurants.length,
      data: restaurants
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
const getRestaurantById =
async (req, res) => {

  try {

    const restaurant =
      await Restaurant.findById(
        req.params.id
      )

    if (!restaurant) {

      return res.status(404).json({
        success: false,
        message:
          'Restaurant not found'
      })
    }

    res.status(200).json({
      success: true,
      data: restaurant
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurantById
}
