//import td model

const Todo = require('../models/Todo');

//create todo handler

exports.createTodo= async(req,res)=>{
    try {
        // extract karna hai titel and desc
        const {title,description} =req.body;
        //create a new todo obj and insert in db
        const response = await Todo.create({title,description})
        //sending a json response with a success
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"
            }
        )

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal error",
            message:error.message
        })
    }
}