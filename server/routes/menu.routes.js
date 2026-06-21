const express =
require('express')

const router =
express.Router()

const {
  createMenuItem
} =
require(
'../controllers/menu.controller'
)

router.post(
  '/',
  createMenuItem
)

module.exports =
router
