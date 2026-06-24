const express =
require('express')

const router =
express.Router()

const {
  createRestaurant,getRestaurants,getRestaurantById,updateRestaurant
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
router.put(
  '/:id',
  updateRestaurant
)
module.exports =
router
