const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    items: [
      {
        menuItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Menu',
          required: true
        },

        quantity: {
          type: Number,
          required: true
        }
      }
    ],

    totalAmount: {
      type: Number,
      required: true
    },

    deliveryAddress: {
      type: String,
      required: true
    },
    restaurant: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Restaurant',
  required: true
},

    paymentMethod: {
      type: String,
      enum: ['Cash', 'UPI', 'Card'],
      default: 'Cash'
    },

    status: {
      type: String,
      enum: [
        'Pending',
        'Preparing',
        'Out for Delivery',
        'Delivered'
      ],
      default: 'Pending'
    }
  },
  {
    timestamps: true
  }
)

module.exports =
mongoose.model(
  'Order',
  orderSchema
)
