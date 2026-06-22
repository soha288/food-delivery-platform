const Menu =
require('../models/menu.model')

const createMenuItem =
async (req, res) => {

  try {

    const menuItem =
      await Menu.create(
        req.body
      )

    res.status(201).json({
      success: true,
      data: menuItem
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
const getMenuItems =
async (req, res) => {

  try {

    const menuItems =
      await Menu.find()
      .populate(
        'restaurant',
        'name cuisine'
      )

    res.status(200).json({
      success: true,
      count:
        menuItems.length,
      data: menuItems
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
const getMenuByRestaurant =
async (req, res) => {

  try {

    const menuItems =
      await Menu.find({
        restaurant:
        req.params.restaurantId
      })

    res.status(200).json({
      success: true,
      count:
        menuItems.length,
      data: menuItems
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message:
        error.message
    })
  }
}
const updateMenuItem =
async (req, res) => {

  try {

    const menuItem =
      await Menu.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      )

    res.status(200).json({
      success: true,
      data: menuItem
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
  createMenuItem,
  getMenuItems,
  getMenuByRestaurant,
  updateMenuItem
}
