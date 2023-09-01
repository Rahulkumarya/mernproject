require("dotenv").config();

const express=require("express");
const mongodb=require("mongodb");
const mongoose = require("mongoose");
const cors=require("cors");

const app=express();
require("./db/conn");


const users=require("./models/contactSchema.js");
const user=require("./models/blog");
const router=require("./routes/router.js");


app.use(cors());
app.use(express.json());
app.use(router);

app.get("/",function(req,res){
    res.send("Hello World");
});


const port=process.env.PORT||4000

app.listen(port,function(req,res){
console.log("server start");
})