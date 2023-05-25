const User = require("../database/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const SurveyResponse = require('../database/surveyResponseModel');


const RegisterResponse = asyncHandler(async ( req, res ) => {
    try{
      
        const { userEmail, responses, result } = req.body;
  if ( !responses || responses.length === 0 || !result) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }   
  const surveyResponse = new SurveyResponse({
    userEmail,
    responses,
    result
  });   
  surveyResponse.save()
    .then(savedResponse => {
      res.status(200).json(savedResponse);
    })
    }
    catch(err){
        res.status(500).json({
            message : err.message
        });
    }
});



module.exports = { RegisterResponse };
