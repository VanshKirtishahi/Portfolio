const express = require("express");

const app = express();


app.get("/", (req, res) =>{
    res.send("Welcome, Students !!")
} )

app.get("/students", (req, res) => {
    res.send("Hello All Students");
})

app.get("/courses", (req, res) => {
    res.send("All Course");
})

app.get("/students/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Student ID : ${id} `);
})


app.listen(9000, () => {
    console.log("Server Running");
})
