const express = require("express");
const {
  createReferral,
  getAllReferrals,
  getReferralById,
  updateReferral,
  deleteReferral
} = require("../controllers/referralController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createReferral);
router.get("/", getAllReferrals);
router.get("/:id", getReferralById);
router.put("/:id", authMiddleware, updateReferral);
router.delete("/:id", authMiddleware, deleteReferral);

module.exports = router;
