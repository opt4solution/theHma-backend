const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [ true, "Please enter name" ],
        min : 3,
        max: 24,
    },
    email : {
        type : String,
        required : [ true, "Please enter email" ],
        unique : [ true, "Email address already exists" ],
        min : 3,
    },
    password : {
        type : String,
        required : [ true, "Please enter password" ],
        min : 3,
        max : 24,
    },
    role : {
        type : String,
        required : [ true, "Please enter role" ],
        min : 3,
    },
    phoneNumber : {
        type : String,
        required : [ true, "Please enter number" ],
        min : 10,
        max : 10,
    },
});

const User = mongoose.model("user", userSchema );
module.exports = User;