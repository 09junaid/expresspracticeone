import express from "express";
import mongoose from "mongoose";
import path from "path";
import { UserControllers } from "./controllers/UserControllers.js";
const app=express();
app.use(express.urlencoded({extended:true}))
const PORT=1000;
mongoose.connect("mongodb+srv://junaidengineer162:1234@mydb.zsqux.mongodb.net/",{
  dbName:"user_register"
}).then(()=>console.log("MongoDB Connected")).catch((err)=>console.log("Error",err))
app.use(express.static(path.join(path.resolve(),"public")))
app.get("/",(req,res)=>{
  res.render("index.ejs")
})
app.post("/userregister",UserControllers)


app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))