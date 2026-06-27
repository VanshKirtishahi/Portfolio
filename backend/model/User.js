const mongoose = require("mongoose");


const User = new mongoose.Schema({
    name : String,
    course : String,
    rollNo : Number
});

module.exports = mongoose.model("User", User);