const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  jobType: { type: String },
  location: { type: String },
  salaryRange: { type: String },
  jobDescription: { type: String },
  requiredSkills: [String],
  referralContact: { type: String },
  applicationDeadline: { type: Date },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Referral", referralSchema);
