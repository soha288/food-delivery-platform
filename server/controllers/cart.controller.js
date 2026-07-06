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
const getCart =
async (req, res) => {

  try {

    const cartItems =
      await Cart.find({
        user:
        req.params.userId
      })
      .populate(
        'menuItem'
      )

    res.status(200).json({
      success: true,
      count:
        cartItems.length,
      data: cartItems
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
const removeFromCart =
async (req, res) => {

  try {

    const cartItem =
      await Cart.findByIdAndDelete(
        req.params.id
      )

    if (!cartItem) {

      return res.status(404).json({
        success: false,
        message:
          'Cart item not found'
      })
    }

    res.status(200).json({
      success: true,
      message:
        'Item removed from cart'
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
const updateCartQuantity = async (req, res) => {

  try {

    const { quantity } = req.body

    const cartItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    ).populate("menuItem")

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found"
      })
    }

    res.status(200).json({
      success: true,
      data: cartItem
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    })

  }

}
module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  updateCartQuantity
}
