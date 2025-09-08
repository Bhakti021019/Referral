const Referral = require("../models/Referral");

exports.createReferral = async (req, res) => {
  try {
    const referral = await Referral.create({ ...req.body, postedBy: req.user });
    res.json(referral);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllReferrals = async (req, res) => {
  try {
    const referrals = await Referral.find().populate("postedBy", "fullName email role");
    res.json(referrals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReferralById = async (req, res) => {
  try {
    const referral = await Referral.findById(req.params.id).populate("postedBy", "fullName email");
    res.json(referral);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReferral = async (req, res) => {
  try {
    const referral = await Referral.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(referral);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteReferral = async (req, res) => {
  try {
    await Referral.findByIdAndDelete(req.params.id);
    res.json({ message: "Referral deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
