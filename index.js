const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
require("./database/config");
const cors = require("cors");
const validateToken = require("./middlewares/validateToken");
// const SurveyResponse = require('./database/surveyResponseModel');
const SurveyResponse = require('./database/surveyResponseModel');




const app = express();
app.use(express.json());
app.use(cors());

// user api --->
app.use("/login", require("./routes/LoginRoute"));
app.use("/register", require("./routes/registerRoute"));
app.use("/profile", validateToken, require("./routes/UserProfileRoute"));

// serveyData api --->
app.use("/serveyData", require("./routes/surveyDataRoute"));

// API endpoint to save survey response --->
app.use("/api/survey-response", require("./routes/SurveyResponseRoute"));


// API endpoint to save survey response --->
app.use("/last-result", require("./routes/LastResultRoute"));



// const getLastSurveyResponse = async (email) => {
//   try {
//     const surveyResponse = await SurveyResponse.findOne({ email })
//       .sort({ createdAt: -1 }) // Sort in descending order by createdAt field
//       .exec();
//     return surveyResponse;
//   } catch (error) {
//     console.error('Error retrieving survey response:', error);
//     throw error;
//   }
// };

// const getResult = async()=>{

//   const lastResult = await getLastSurveyResponse("test@gmail.com");
// console.log('Last result:', lastResult);
// }
// getResult();

app.listen(process.env.PORT, () =>
  console.log("Server is running on port : ", process.env.PORT)
);
