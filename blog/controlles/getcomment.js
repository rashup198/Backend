const comment = require('../Model/Comment');

exports.getComment = async (req, res)=>{
    try {
        const allcomments = await comment.find({});
        res.status(200).json({
            success:true,
            data:allcomments,
            message:"All comments fetched successfully"
        })
    } catch (error) {
        console.log(error);
    }
}


// get comment by id

exports.getcommentbyid = async (req, res)=>{
    try {
        const id = req.params.id
        const commentbyid= await comment.findById(id)

        res.status(200).json({
            success:true,
            data:commentbyid,
            message:"comment fetched successfully"
        })
    } catch (error) {
        console.log(error);
    }
}