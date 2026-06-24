const express =
require('express')

const router =
express.Router()

const {
  createMenuItem,getMenuItems,getMenuByRestaurant,updateMenuItem,deleteMenuItem
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
router.put(
  '/:id',
  updateMenuItem
)
router.delete(
  '/:id',
  deleteMenuItem
)
module.exports =
router
