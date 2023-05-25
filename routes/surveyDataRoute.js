const express = require("express");
const router = express.Router();
const { getSurveyData, postSurveyData } = require("../controllers/surveyDataController")


router.route("/").get( getSurveyData ).post( postSurveyData )

module.exports = router;

