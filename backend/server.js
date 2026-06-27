const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User");

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://vanshkirtishahi_db_user:vor1Txb41iyxIlrK@merncourse.bks0lpk.mongodb.net/?appName=MernCourse").then(() =>{
    console.log("Database is Connected");
})
.catch((err) => {
    console.log(err);
});

// CRUD Operation


// Create Operation

app.post('/student', async (req, res) =>{
    const student = new User(req.body);
    await student.save();

    res.send("Student Saved")
});

// Read Operation 

app.get("/student", async (req, res) => {
    const students = await User.find();
    res.json((students));
});

// Update Operation

app.put("/student/:id", async (req, res) => {
    await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );

    res.send("Info Updated !!")
});


// Delete Operation


app.delete("/student/:id", async (req, res) => {
    await User.findByIdAndDelete(
        req.params.id,
    );

    res.send("Info is Deleted");
})



app.listen(5000, () => {
    console.log("Server Running");
})
