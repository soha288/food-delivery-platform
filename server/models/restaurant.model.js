const mongoose = require('mongoose')

const restaurantSchema =
new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    cuisine: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    image: {
      type: String
    },

    rating: {
      type: Number,
      default: 0
    },

    isOpen: {
      type: Boolean,
      default: true
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

module.exports =
mongoose.model(
  'Restaurant',
  restaurantSchema
)
