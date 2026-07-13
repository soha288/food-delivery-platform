const Menu = require('../models/menu.model')
const Restaurant = require('../models/restaurant.model')
const Order = require('../models/order.model')


const placeOrder = async (req, res) => {

  try {

    const firstMenu = await Menu.findById(
      req.body.items[0].menuItem
    );

    const order = await Order.create({

      user: req.body.user,

      items: req.body.items,

      totalAmount: req.body.totalAmount,

      deliveryAddress: req.body.deliveryAddress,

      paymentMethod: req.body.paymentMethod,

      restaurant: firstMenu.restaurant

    });

    res.status(201).json({

      success: true,

      message: 'Order placed successfully',

      data: order

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

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
const getMyOrders = async (req, res) => {

  try {

    const restaurant = await Restaurant.findOne({
      owner: req.user.id
    });

    if (!restaurant) {

      return res.status(404).json({
        success: false,
        message: "Restaurant not found"
      });

    }

    const orders = await Order.find({
      restaurant: restaurant._id
    })
      .populate("user", "name email")
      .populate("items.menuItem", "name price");

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
const updateOrderStatus = async (req, res) => {

  try {

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status
      },
      {
        new: true
      }
    );

    res.status(200).json({
      success: true,
      data: order
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
module.exports = {
  placeOrder,
  getOrders,
  getMyOrders,
  updateOrderStatus
}
