const post = require("../Model/Post")
exports.getpost = async(req,res)=>{
    try {
        //fetch all todos from db
        const todos= await post.find({});

        //response with success
        res.status(200).json({
            success:true,
            data:todos,
            message:"All post fetched successfully"
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

//get post by id

exports.getpostbyid = async(req,res)=>{
    try {
        const id = req.params.id
        const todos = await post.findById(id)
        res.status(200).json({
            success:true,
            data:todos,
            message:"post fetched successfully"
        })
    } catch (error) {
        console.log(error);
    }
}


