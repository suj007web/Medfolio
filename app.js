const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 4000;


const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost:27017/medCareDB").then(()=>{
    console.log("Successfully Connected to mongoDB");
})

const patient = new mongoose.Schema({
    name : String,
    time : String,
    age : Number,
})

const Patient = new mongoose.model("Patient", patient);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(port,()=>{
    console.log("App is running on port: "+port);
})