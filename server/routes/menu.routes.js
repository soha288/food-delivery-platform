const express =
require('express')

const router =
express.Router()

const {
  createMenuItem,getMenuItems
} =
require(
'../controllers/menu.controller'
)

router.post(
  '/',
  createMenuItem
)
router.get(
  '/',
  getMenuItems
)
module.exports =
router
