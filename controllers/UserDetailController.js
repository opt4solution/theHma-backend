// @desc get user login
// @route GET / api/login
// @access public
const User = require("../database/users");

const getUserProfile = async (req, res) => {
  try {
    const profile = req.user;
    if (!profile) {
      res.status(401);
      throw new Error("Invalid user or token has been expired");
    }
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getUserProfile };
