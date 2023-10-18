// import the todo model

const Todo = require('../models/Todo');

// update todo handler

exports.updateTodo = async (req, res) => {

    try {
        const id = req.params.id;
        const {title, description} = req.body;
        const todo = await Todo.findByIdAndUpdate({_id: id},{title, description,updatedAt: Date.now()});

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
            message:`Todo ${id} updated successfully`
        })

    } catch (error) {
        
    }

}

