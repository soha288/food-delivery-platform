const express = require('express')

const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware');
const {
  placeOrder,getOrders,getMyOrders,getMyCustomerOrders, updateOrderStatus
} = require('../controllers/order.controller')

router.post('/', placeOrder)
router.get(
  '/my-customer-orders',
  authMiddleware,
  getMyCustomerOrders
);
router.get(
  '/my-orders',
  authMiddleware,
  getMyOrders
);
router.get('/', getOrders)
router.put('/:id',updateOrderStatus)
module.exports = router
