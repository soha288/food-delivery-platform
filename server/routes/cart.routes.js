const express =
require('express')

const router =
express.Router()

const {
  addToCart,getCart,removeFromCart
} =
require(
'../controllers/cart.controller'
)

router.post(
  '/',
  addToCart
)
router.get(
  '/:userId',
  getCart
)
router.delete(
'/:id',removeFromCart)
module.exports =
router
