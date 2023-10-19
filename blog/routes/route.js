const express = require('express');
const router = express.Router();

// Import the controllers
const { createPost } = require("../controlles/createpost");
const { getpost } = require("../controlles/getPost");
const {getpostbyid} = require("../controlles/getPost")

//import the controllers for the comment
const {createComment} = require("../controlles/creatcomment") 
const {getComment} = require("../controlles/getcomment")
const {getcommentbyid} = require("../controlles/getcomment")
const {likes} = require("../controlles/likeControler")


// Define the routes
router.post('/createpost', createPost);
router.get("/getPost", getpost)
router.get("/getPost/:id", getpostbyid)
router.get("/like",likes)


//define the routes for the comment
router.post("/createcomment",createComment)
router.get("/getcomment",getComment)
router.get("/getcomment/:id",getcommentbyid)

module.exports = router;
