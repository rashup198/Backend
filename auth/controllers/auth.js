const bcypt = require('bcrypt');
const user= require('../model/user');

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