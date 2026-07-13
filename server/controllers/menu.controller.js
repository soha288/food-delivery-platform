const Restaurant = require('../models/restaurant.model');
const Menu =
require('../models/menu.model')

const createMenuItem = async (req, res) => {

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

    const menuItem = await Menu.create({

      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
      isAvailable: req.body.isAvailable,

      restaurant: restaurant._id

    });

    res.status(201).json({

      success: true,
      data: menuItem

    });

  }

  catch (error) {

    res.status(500).json({

      success: false,
      message: error.message

    });

  }

};
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
const getMyMenu = async (req, res) => {

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

    const menuItems = await Menu.find({
      restaurant: restaurant._id
    });

    res.status(200).json({
      success: true,
      count: menuItems.length,
      data: menuItems
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

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
  returnDocument: 'after'
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
const deleteMenuItem =
async (req, res) => {

  try {

    const menuItem =
      await Menu.findByIdAndDelete(
        req.params.id
      )

    if (!menuItem) {

      return res.status(404).json({
        success: false,
        message:
          'Menu item not found'
      })
    }

    res.status(200).json({
      success: true,
      message:
        'Menu item deleted successfully'
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
  getMyMenu,
  updateMenuItem,
  deleteMenuItem
}
