const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Food Delivery API Running')
})

module.exports = app
