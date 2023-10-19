const Comment = require('../Model/Comment'); // Assuming your Comment model is in 'Model/Comment.js'
const Post = require('../Model/Post'); // Assuming your Post model is in 'Model/Post.js'

exports.createComment = async (req, res) => {
    try {
        // Extract the comment information from the request body
        const { post, user, body } = req.body;

        // Create a new comment object
        const newComment = new Comment({
            post,
            user,
            body
        });

        // Save the comment to the database
        const savedComment = await newComment.save();

        // Update the post to include the comment reference
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { Comments: savedComment._id } },
            { new: true }
        ).populate('Comments');

        // Send the comment object as a response
        res.status(201).json({
            success: true,
            post: updatedPost,
            message: "Comment created successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error creating the comment"
        });
    }
}
