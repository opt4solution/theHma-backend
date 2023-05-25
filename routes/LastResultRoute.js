const express = require("express");
const router = express.Router();
const { getLastResult }  = require("../controllers/LastResultController")
router.route("/").post( getLastResult );

module.exports = router;
