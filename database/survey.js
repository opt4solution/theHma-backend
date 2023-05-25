const mongoose = require("mongoose");

const surveySchema = mongoose.Schema({
    factor : {
        type : String,
        required : [ true, "Please enter factor"],
        min : 3,
        max : 25,
    },
    weightage : {
        type : String,
        required : [ true, "Please enter subfactor"],
    },
    option1 : {
        type : String,
        required: [ true, "Please enter option1" ],
        min : 3,
    },
    rating1 : {
        type : String,
        required: [ true, "Please enter option1" ],
    },
    option2 :{
        type : String,
        min : 3,
    },
    rating2 :{
        type : String,
    },
    option3 :{
        type : String,
        min : 3,
    },
    rating3 :{
        type : String,
    },
    option4 :{
        type : String,
        min : 3,
    },
    rating4 :{
        type : String,
    },
    option5 :{
        type : String,
        min : 3,
    },
    rating5 :{
        type : String,
    },
    question : {
        type : String,
        required : [ true, "Please enter question" ],
        unique : [ true, "Question is already exists" ],
        min : 3,
    },
});

const Survey = mongoose.model("survey", surveySchema );
module.exports = Survey;