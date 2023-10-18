const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
        try {
            //fetch all todos from db
            const todos= await Todo.find({});

            //response with success
            res.status(200).json({
                success:true,
                data:todos,
                message:"All todos fetched successfully"
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success:false,
                data:"internal error",
                message:error.message
            })
        }
}

exports.getTodoById = async (req, res) => {
    try {
        //extract todo based on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        //case where todo is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                data:"Not Found",
                message:"Todo with given id not found"
            })
        }
        // case where todo is found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} fetched successfully`
        })
    } catch (error) {
        
    }
}