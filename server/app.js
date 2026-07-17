

const express =
require('express')
const cors=require('cors')

const authRoutes =
require(
'./routes/auth.routes'
)
const userRoutes =
require(
'./routes/user.routes'
)
const restaurantRoutes =
require(
'./routes/restaurant.routes'
)
const menuRoutes =
require(
'./routes/menu.routes'
)
const cartRoutes =
require(
'./routes/cart.routes'
)
const reviewRoutes =
require("./routes/review.routes");
const orderRoutes = require('./routes/order.routes')
const paymentRoutes =
require("./routes/payment.routes");
const app =
express()
app.use(cors())

app.use(
express.json()
)

app.use(
'/api/auth',
authRoutes
)
app.use(
'/api/cart',
cartRoutes
)
app.use(
'/api/menu',
menuRoutes
)
app.use(
'/api/users',
userRoutes
)
app.use(
'/api/restaurants',
restaurantRoutes
)
app.use(
  "/api/reviews",
  reviewRoutes
);
app.use('/api/orders', orderRoutes)
app.get(
'/',
(req, res) => {
  res.send(
'Food Delivery API Running'
  )
})
app.use(
  "/api/payment",
  paymentRoutes
);
app.get(
  '/health',
  (req, res) => {

    res.status(200).json({
      success: true,
      message:
        'API is healthy'
    })

  }
)
module.exports =
app
