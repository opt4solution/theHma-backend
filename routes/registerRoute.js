const express = require("express");
const router = express.Router();
const { RegisterUser } = require("../controllers/RegisterController");

// here we cna generate jwt token, and make user register --->
// authorize new user --->

router.route("/").post( RegisterUser );

module.exports = router;
