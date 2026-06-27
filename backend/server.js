const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/User");
const Contact = require("./model/Contact");
const cors = require("cors");
const dotenv = require("dotenv");



dotenv.config();
const app = express();
const PORT = process.env.PORT;


// Middleware
app.use(cors());

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}], ${req.method} request made to: ${req.url}`);
    next();
})

app.use(express.json());
mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("Database is Connected");
})
.catch((err) => {
    console.log(err);
});



app.post('/api/contact', async (req, res) => {
    try{
        const {name, email, message} = req.body;

        if(!name || !email || !message){
            return res.status(400).json({error: 'All Fields are requiured.'})
        }

        const newMessage = new Contact({name, email, message});
        await newMessage.save();

        res.status(200).json({success: true, message: "Message securly saved to the database !"});
    }
    catch (error){
        console.error('Error saving message:', error);
        res.status(500).json({error: 'Internal Server Error. Please try again later'});
    }
});



app.get('/api/contact', async (req, res) => {
    try{
        const messages = await Contact.find().sort({date : -1});
        res.status(200).json(messages);
    }
    catch (error) {
        res.status(500).json({error: 'Failed to retrive messages.'})
    }
});


app.get("/test", (req, res) => {
    res.send("Test Route Working");
});

app.get("/hello", (req, res) => {
    res.send("Hello Express");
});

app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})
