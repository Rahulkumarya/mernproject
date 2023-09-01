const mongoose=require("mongoose");

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    feedback:{
        type:String,
        required:true
        
    }
})



const users=new mongoose.model("users",contactSchema);

// module.exports=user;

module.exports=users;