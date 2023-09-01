const mongoose =require("mongoose");

const blogsSchema=new mongoose.Schema({
    title:{
        type:String
        
        
        
       
    },
    content:{
        type:String
       
        
        
       
    }
})

const blogdata =new mongoose.model("blogdata",blogsSchema);

module.exports=blogdata;