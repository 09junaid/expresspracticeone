import { User } from "../Models/User.js";
export const UserControllers=async(req,res)=>{
  try {
    let user=await User.create(req.body);
    res.json({message:"User Created",user:user,success:true})
    console.log(user)
  } catch (error) {
    console.log("Error",error)
  }
}