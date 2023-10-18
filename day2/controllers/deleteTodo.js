//import todo model

const Todo = require('../models/Todo');

// delete todo handler

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete({_id: id});

        //case where todo is not found

        if(!todo){
            return res.status(404).json({
                sucess:false,
                data:"NOt Found",
                message :"given id not found"

            })
        }
        // case where todo is found
        return res.status(200).join({
            sucess:true,
            data:todo,
            message:`todo ${id} deleted successfully`
        })
    } catch (error) {
        
    }
}