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

module.exports = {
  createRestaurant
}
