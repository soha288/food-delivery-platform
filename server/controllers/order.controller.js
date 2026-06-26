const Order = require('../models/order.model')

const placeOrder = async (req, res) => {
  try {

    const order = await Order.create(req.body)

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: order
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}
const getOrders = async (req, res) => {

  try {

    const orders = await Order.find()
      .populate('user', 'name email')
      .populate('items.menuItem', 'name price')

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}

module.exports = {
  placeOrder,
  getOrders
}
