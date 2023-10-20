const bcypt = require('bcrypt');
const user= require('../model/user');
const jwt = require('jsonwebtoken');
require("dotenv").config();
// signup controller

exports.signup = async (req,res) => {
    try {
        const {name,email,password,role} = req.body;
        // check if user already exists
        const existingUser = await  user.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            })
        }
        // hash the password
        let hasedPassword;
        try {
            hasedPassword = await bcypt.hash(password,10);
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Something went wrong"
            })
        } 
        // create user
        const newUser= await user.create({
            name,email,password:hasedPassword,role
        })
        return res.status(201).json({
            success:true,
            message:"User created successfully",         
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"user creation failed please try again"
        })
    }
}

// login controller

exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        // check if email and password is provided
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please provide email and password"
            })
        }
        // check if user exists
        const userExists = await user.findOne({email});
        if(!userExists){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }
            const payload={
                email:userExists.email,
                id:userExists._id,
                role:userExists.role
            }
        // check if password matches and create token
        if(await bcypt.compare(password,userExists.password)){
            let token= jwt.sign(payload,
                process.env.JWT_SECRET,
                {expiresIn:"1d"})
                
            userExists.toObject();    
            userExists.token=token;
            userExists.password=undefined;
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
            }
            res.cookie(
                "token",token,options
            ).status(200).json({
                success:true,
                message:"User logged in successfully",
                data:userExists,token
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"Invalid credentials"
            })
        }
    } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:false,
        message:"Something went wrong"
    })
    }
}