const comment=  require('../Model/Comment');

exports.createComment = async (req, res)=>{
    try {
        //extract the comment from the request body

        const {titel,comment} = req.body;
        //create a new comment object
        const usercomment = await comment.create({titel,comment,created_at: Date.now()});

        //send the comment object as a response
        res.status(201).json({
            success:true,
            data:usercomment,
            message:"comment created successfully"
        })

    } catch (error) {
        
    }
}