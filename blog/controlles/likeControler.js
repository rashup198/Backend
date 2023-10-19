
const Like = require('../Model/Like');
const Post = require('../Model/Post');


//like post

exports.likePost = async (req, res) => {

    try {
        const{post, user} = req.body;
        const like =new Like({
            post,user
        })
        const likePost = await like.save();

        //update post

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: likePost._id}}, {new: true}).populate('likes');

        res.status(201).json({
            success: true,
            post: updatedPost,
            message: "Post liked successfully"
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error liking the post"
        });

    }

}


exports.unlikePost = async (req, res) => {
    try {
        const{post,like} = req.body;
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        //update post
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: deletedLike._id}}, {new: true}).populate('Post');
        
        res.status(201).json({
            success: true,
            post: updatedPost,
            message: "Post unliked successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error unliking the post"
        });
    }
} 