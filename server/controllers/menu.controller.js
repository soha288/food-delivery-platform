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

module.exports = {
  createMenuItem
}
