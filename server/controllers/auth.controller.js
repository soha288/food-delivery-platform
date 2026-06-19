const User =
require('../models/user.model')

const bcrypt =
require('bcryptjs')

const jwt =
require('jsonwebtoken')

const register =
async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      role
    } = req.body

    const existingUser =
      await User.findOne({
        email
      })

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message:
          'User already exists'
      })
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      )

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
        role
      })

    res.status(201).json({
      success: true,
      message:
        'User registered successfully',
      data: user
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
  register
}
