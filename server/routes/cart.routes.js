const express =
require('express')

const router =
express.Router()

const {
  addToCart,getCart,removeFromCart,updateCartQuantity
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
router.put('/:id', updateCartQuantity)
module.exports =
router
