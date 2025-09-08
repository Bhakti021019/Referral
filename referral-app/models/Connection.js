// const mongoose = require("mongoose");

// const connectionSchema = new mongoose.Schema({
//   seekerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   referrerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   status: { type: String, enum: ["pending", "accepted", "rejected"], default: "pending" },
// }, { timestamps: true });

// module.exports = mongoose.model("Connection", connectionSchema);


const mongoose = require("mongoose");

const connectionSchema = new mongoose.Schema({
  seekerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Reference to the User model
    required: true,
  },
  referrerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",  // Reference to the User model
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending",  // Default status is "pending"
  },
});

module.exports = mongoose.model("Connection", connectionSchema);
