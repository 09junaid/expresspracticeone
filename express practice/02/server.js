import express from "express"
import mongoose from "mongoose";
const app=express();
mongoose.connect("mongodb+srv://junaidengineer162:1234@mydb.zsqux.mongodb.net/",{
  dbName:"practice work"
}).then(()=>console.log("MongoDB Connected")).catch((err)=>console.log("Error",err))
const PORT=1000;
app.listen(PORT,()=>{
  console.log(`Server is running ${PORT}`)
})