import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Middleware to protect routes
export const protectRoute = async (res,res,next) => {
  try{
    const token = requestAnimationFrame.headers.token;

    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    const user = await User.findById(decoded.userId).select("-password")

    if(!user){
      return res.json({sucess: false,message:"User not found"})
    }

    req.user = user
  }catch(error){
    console.log(error.message)

    res.json({success:false,message:error.message})
  }
}