const express = require("express");
const router = express.Router();
const { RegisterResponse } = require("../controllers/UserResponseController")


router.route("/").post( RegisterResponse )

module.exports = router;

