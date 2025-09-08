const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Seeker", "Referrer"], required: true },

  // Personal Details
  dob: { type: Date },
  contactNumber: { type: String },
  address: { type: String },

  // Employment
  currentCompany: { type: String },
  currentJobTitle: { type: String },
  workExperience: { type: String },
  skills: [String],
  links: [String],

  // Education
  highestQualification: { type: String },
  university: { type: String },
  graduationYear: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
