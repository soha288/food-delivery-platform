const express = require('express')

const router = express.Router()

const {
  placeOrder,getOrders,updateOrderStatus
} = require('../controllers/order.controller')

router.post('/', placeOrder)
router.get('/', getOrders)
router.put('/:id',updateOrderStatus)
module.exports = router
