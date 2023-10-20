//auth, isStudent, isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../model/user");

exports.auth = async (req, res, next) => {
    try {
      //extract jwt token 
      const token = req.body.token || req.cookies.token;
        // check if token exists
        if(!token){
            return res.status(401).json({
                success:false,
                message:"No token provided"
            })
        }
        // verify token
        try {
            const decode = await jwt.verify(token,process.env.JWT_SECRET);
            req.user = decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"Invalid token"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

exports.isStudent = async (req,res,next)=>{
    try {
        if(req.user.role !== "Student"){
            return res.status(403).json({
                success:false,
                message:"You are not authorized to access this route"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user role check failed"
        })
    }
}

exports.isAdmin = async (req,res,next)=>{
    try {
        if(req.user.role !== "Admin"){
            return res.status(403).json({
                success:false,
                message:"You are not authorized to access this route"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user role check failed"
        })
    }
}