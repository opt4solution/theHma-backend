const asyncHandler = require("express-async-handler");
const SurveyResponse = require('../database/surveyResponseModel');


const getLastResult = asyncHandler(async ( req, res ) => {
    try{
        const { email } = req.body;
        console.log("inside last result controller for mail : ", email, typeof email)
  if ( !userEmail ) {
    res.status(500);
    throw new Error("user Email mandatory!");
  }   
  const surveyResponse = await SurveyResponse.findOne({ email })
  .sort({ createdAt: -1 }) // Sort in descending order by createdAt field
  .exec();
  if( surveyResponse ){
      res.status(200).json(surveyResponse);
    }
    else{
        res.status(500);
    throw new Error("user result not found!");
    }
    }
    catch (err) {
        res.status(500).json(err.message)
      }
});


module.exports = { getLastResult };
