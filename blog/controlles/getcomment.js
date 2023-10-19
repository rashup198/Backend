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
