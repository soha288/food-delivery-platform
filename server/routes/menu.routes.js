const express =
require('express')

const router =
express.Router()

const {
  createMenuItem,getMenuItems,getMenuByRestaurant
} =
require(
'../controllers/menu.controller'
)

router.post(
  '/',
  createMenuItem
)
router.get(
  '/',
  getMenuItems
)
router.get(
  '/restaurant/:restaurantId',
  getMenuByRestaurant
)
module.exports =
router
