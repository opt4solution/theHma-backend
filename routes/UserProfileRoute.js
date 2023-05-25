const express = require("express");
const router = express.Router();
const { getUserProfile } = require("../controllers/UserDetailController");


router.route("/").get( getUserProfile );

module.exports = router;

