const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
  addReview,
  getRestaurantReviews,
} = require("../controllers/review.controller");

router.post(
  "/",
  authMiddleware,
  addReview
);

router.get(
  "/:restaurantId",
  getRestaurantReviews
);

module.exports = router;
