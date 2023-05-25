const Survey = require("../database/survey");

const getSurveyData = async (req, res) => {
  try {
    let surveyData = await Survey.find();
    if (!surveyData) {
      res.status(400);
      throw new Error("Try again, network unreachable");
    }
    res.status(200).json(surveyData);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const postSurveyData = async (req, res) => {
  try {
    const {
      factor,
      subfactor,
      option1,
      rating1,
      option2,
      rating2,
      option3,
      rating3,
      option4,
      rating4,
      question,
    } = req.body;

    if (!factor || !subfactor || !option1 || !rating1 || !question) {
      res.status(400);
      throw new Error("category, question, and subcategory1 cant be empty.");
    }

    let surveyData = await Survey.findOne({ question });
    if (surveyData) {
      res.status(400);
      throw new Error("Question is already exists, try different question.");
    }
    surveyData = await Survey.create({
      factor,
      subfactor,
      option1,
      rating1,
      option2,
      rating2,
      option3,
      rating3,
      option4,
      rating4,
      question,
    });
    res.status(200).json(surveyData);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getSurveyData, postSurveyData };
