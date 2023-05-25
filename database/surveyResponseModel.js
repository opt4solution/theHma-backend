const mongoose = require('mongoose');

const surveyResponseSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },
  responses: [
    {
      type: mongoose.Schema.Types.Mixed
    }
  ],
  result: {
    type : String
  },
  createdAt: { type: Date, default: Date.now }
});

const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);

module.exports = SurveyResponse;
