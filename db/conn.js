const { error } = require("console");
const mongodb=require("mongodb");
const mongoose = require("mongoose");
// const DB="mongodb://127.0.0.1:27017/blogDB";

const dbs="mongodb+srv://rk1265489:bHnMGB6w31FD4sub@cluster0.wpkgmgy.mongodb.net/blogDB?retryWrites=true&w=majority";
// mongodb://mongodb+srv://rk1265489:bHnMGB6w31FD4sub@cluster0.wpkgmgy.mongodb.net/blogDB
mongoose.connect(dbs,{
   
    // useCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology:true
    
}).then(()=>console.log("connection has been start db")).catch((error)=>console.log(error.message));