const Cart =
require('../models/cart.model')

const addToCart =
async (req, res) => {

  try {

    const cartItem =
      await Cart.create(
        req.body
      )

    res.status(201).json({
      success: true,
      data: cartItem
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}

module.exports = {
  addToCart
}
