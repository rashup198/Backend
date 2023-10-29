const data = require("../model/data")

exports.details= async(req,res)=>{
    try {
        const {name,email,phone} = req.body;
        const response = await data.create({name,email,phone});

        res.status(201).json({
            status:"success",
            data:{
                name:response.name,
                email:response.email,
                phone:response.phone
            }
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            status:"fail",
            message:error
        })
    }
}