import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:Number,
    required:true
  },
  age:{
    type:String,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
})
export const User=mongoose.model("user",userSchema);