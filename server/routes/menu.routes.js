const express =
require('express')

const router =
express.Router()
const authMiddleware = require('../middleware/auth.middleware');
const {
  createMenuItem,
  getMenuItems,
  getMenuByRestaurant,
  getMyMenu,
  updateMenuItem,
  deleteMenuItem
} =
require('../controllers/menu.controller')

router.post(
  '/',
  authMiddleware,
  createMenuItem
);
router.get(
  '/',
  getMenuItems
)
router.get(
  '/my-menu',
  authMiddleware,
  getMyMenu
)
router.get(
  '/restaurant/:restaurantId',
  getMenuByRestaurant
)
router.put(
  '/:id',
  updateMenuItem
)
router.delete(
  '/:id',
  deleteMenuItem
)
module.exports =
router
