const express = require("express");
const { getDashboardData } = require("../controllers/dashboardController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get dashboard data for the logged-in user
router.get("/", authMiddleware, getDashboardData);

module.exports = router;
