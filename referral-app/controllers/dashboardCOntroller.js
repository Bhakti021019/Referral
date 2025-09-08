const User = require("../models/User");
const Connection = require("../models/Connection");

exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user;

    // Fetch user details (profile)
    const user = await User.findById(userId).select("fullName role email");

    // Fetch user connections (if any)
    const connections = await Connection.find({
      $or: [
        { seekerId: userId },
        { referrerId: userId },
      ],
    }).populate("seekerId referrerId", "fullName email status");

    res.json({ user, connections });
  } catch (err) {
    console.error("Error fetching dashboard data:", err);
    res.status(500).json({ error: err.message });
  }
};
