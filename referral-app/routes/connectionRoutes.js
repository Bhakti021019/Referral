const express = require("express");
const { 
  createConnection, 
  getSeekersAndReferrers, 
  getConnectionsForReferrer, 
  acceptConnection, 
  rejectConnection 
} = require("../controllers/connectionController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Fetch all Seekers and Referrers
router.get("/", authMiddleware, getSeekersAndReferrers);

// Send connection request from Seeker to Referrer
router.post("/connect", authMiddleware, createConnection);

// Get connections for a Referrer (View connection requests)
router.get("/referrer", authMiddleware, getConnectionsForReferrer);

// Accept a connection request
router.put("/accept", authMiddleware, acceptConnection);

// Reject a connection request
router.put("/reject", authMiddleware, rejectConnection);

module.exports = router;
