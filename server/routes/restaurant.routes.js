const express =
require('express')

const router =
express.Router()

const {
  createRestaurant,getRestaurants,getRestaurantById
} =
require(
'../controllers/restaurant.controller'
)

router.post(
  '/',
  createRestaurant
)
router.get(
  '/',
  getRestaurants
)
router.get(
  '/:id',
  getRestaurantById
)
module.exports =
router
