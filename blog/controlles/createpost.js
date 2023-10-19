// import the Post model

const Post = require('../Model/Post');

// create a post handler

exports.createPost = async (req,res)=>{
    try {
        //extract the titel and body from the request body
        const {title, body} = req.body;
        // creae a new post object
        const post = await Post.create({title, body});

        // send the post object as a response
        res.status(201).json(
            {
                success: true,
                data: post,
                message: 'Post created successfully'
            }
        );


    } catch (error) {
        console.log(error);
    }
}

