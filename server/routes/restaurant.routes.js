const express =
require('express')

const router =
express.Router()

const {
  createRestaurant
} =
require(
'../controllers/restaurant.controller'
)

router.post(
  '/',
  createRestaurant
)

module.exports =
router
