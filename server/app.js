const express =
require('express')

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
const app =
express()

app.use(
express.json()
)

app.use(
'/api/auth',
authRoutes
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
app.get(
'/',
(req, res) => {
  res.send(
'Food Delivery API Running'
  )
})
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
