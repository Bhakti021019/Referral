const User = require("../models/User");
const Connection = require("../models/Connection");

// Create a connection request (Seeker to Referrer)
exports.createConnection = async (req, res) => {
  try {
    const { referrerId } = req.body;
    const seekerId = req.user;

    // Check if the user is a Seeker
    const seeker = await User.findById(seekerId);
    if (!seeker || seeker.role !== "Seeker") {
      return res.status(400).json({ message: "Only Seekers can send connection requests" });
    }

    // Check if the connection already exists
    const existingConnection = await Connection.findOne({ seekerId, referrerId });
    if (existingConnection) {
      return res.status(400).json({ message: "You have already sent a connection request" });
    }

    // Create new connection request
    const connection = new Connection({ seekerId, referrerId, status: "pending" });  // Set status to 'pending'
    await connection.save();
    res.status(201).json({ message: "Connection request sent" });
  } catch (err) {
    console.error("Error in createConnection: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Fetch all Seekers and Referrers (for Seeker to view and send requests)
exports.getSeekersAndReferrers = async (req, res) => {
  try {
    const users = await User.find({ role: { $in: ["Seeker", "Referrer"] } }).select("fullName role email");
    res.json(users);
  } catch (err) {
    console.error("Error in getSeekersAndReferrers: ", err);
    res.status(500).json({ error: err.message });
  }
};

// Get connection requests for a Referrer (view pending requests)
exports.getConnectionsForReferrer = async (req, res) => {
  try {
    const referrerId = req.user;

    const connections = await Connection.find({ referrerId, status: "pending" })
      .populate("seekerId", "fullName email")
      .select("seekerId status");

    res.json(connections);
  } catch (err) {
    console.error("Error fetching connections for referrer:", err);
    res.status(500).json({ error: err.message });
  }
};

// Accept a connection request (Referrer accepting Seeker's request)
exports.acceptConnection = async (req, res) => {
  try {
    const { seekerId } = req.body;
    const referrerId = req.user;

    const connection = await Connection.findOneAndUpdate(
      { seekerId, referrerId, status: "pending" },
      { status: "accepted" },  // Update status to 'accepted'
      { new: true }
    );

    if (!connection) {
      return res.status(404).json({ message: "Connection not found or already accepted" });
    }

    res.json({ message: "Connection accepted" });
  } catch (err) {
    console.error("Error accepting connection:", err);
    res.status(500).json({ error: err.message });
  }
};

// Reject a connection request (Referrer rejecting Seeker's request)
exports.rejectConnection = async (req, res) => {
  try {
    const { seekerId } = req.body;
    const referrerId = req.user;

    const connection = await Connection.findOneAndUpdate(
      { seekerId, referrerId, status: "pending" },
      { status: "rejected" },  // Update status to 'rejected'
      { new: true }
    );

    if (!connection) {
      return res.status(404).json({ message: "Connection not found or already rejected" });
    }

    res.json({ message: "Connection rejected" });
  } catch (err) {
    console.error("Error rejecting connection:", err);
    res.status(500).json({ error: err.message });
  }
};
