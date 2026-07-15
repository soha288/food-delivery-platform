const Review = require("../models/review.model");
const Restaurant = require("../models/restaurant.model");

const addReview = async (req, res) => {
  try {
    const { restaurantId, rating, review } = req.body;

    // Check if restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    // Prevent duplicate review
    const existingReview = await Review.findOne({
      restaurant: restaurantId,
      user: req.user.id,
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this restaurant.",
      });
    }

    // Create review
    const newReview = await Review.create({
      restaurant: restaurantId,
      user: req.user.id,
      rating,
      review,
    });

    // Recalculate average rating
    const reviews = await Review.find({
      restaurant: restaurantId,
    });

    const totalRating = reviews.reduce(
      (sum, item) => sum + item.rating,
      0
    );

    restaurant.rating = Number(
      (totalRating / reviews.length).toFixed(1)
    );

    restaurant.totalReviews = reviews.length;

    await restaurant.save();

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review: newReview,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getRestaurantReviews = async (req, res) => {

  try {

    const reviews = await Review.find({
      restaurant: req.params.restaurantId,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      reviews,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  addReview,
  getRestaurantReviews,
};

