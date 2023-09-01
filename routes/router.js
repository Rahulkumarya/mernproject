const express=require("express");
const users = require("../models/contactSchema");
const user=require("../models/blog");
const blogdata = require("../models/blog");
const { log } = require("console");

const router=express.Router();


// router.get("/",(req,res)=>{
//    console.log("server is connected and");
// })



router.post("/register",async(req,res)=>{
    const {name,number,email,feedback}= req.body;

    const submit=new users ({
        name,number,email,feedback
    });
    await submit.save();
    console.log(submit);
    res.status(201).json(submit);





 })


 // to get data form the database mongodb

 router.get("/blog",async(req,res)=>{
    const datablog= await blogdata.find();
    console.log(datablog);
    res.status(402).json(datablog); 

 })



 // to upload files for the blog 
 router.post("/blogs",async(req,res)=>{
    const {title,content} =req.body;



    const submits=new blogdata({
        title,content
     });
    

     await submits.save();
     console.log(submits);
     res.status(403).json(submits);
 })



 // to display the indivisual blog on the page 

 router.get("/getuser/:id",async(req,res)=>{
    // console.log(req.params);

    const {id}=req.params;

   
    const indivisual=await blogdata.findById({_id:id});
    console.log(indivisual);
    res.status(201).json(indivisual);
 })




module.exports=router;